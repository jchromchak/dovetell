(function(global){
  const FALLBACK_CONTEXT_FILES = {
    tasks: 'tasks.md',
    decisions: 'decisions.md',
    risks: 'risks.md',
    opportunities: 'opportunities.md',
    rules: 'business-rules.md',
    journal: 'journal.md',
    changelog: 'changelog.md'
  };

  const FALLBACK_PROJECTS = [
    {
      id: 'dovetell-sandbox',
      name: 'dovetell sandbox',
      owner: 'dovetell-io',
      repo: 'dovetell-sandbox',
      visibility: 'public',
      tokenKey: 'dovetell_pat',
      contextFiles: FALLBACK_CONTEXT_FILES
    },
    {
      id: 'dovetell-private',
      name: 'dovetell private',
      owner: 'jchromchak',
      repo: 'dovetell-private',
      visibility: 'private',
      tokenKey: 'dovetell_pat_jchromchak_dovetell-private',
      contextFiles: {
        tasks: '.dovetell-tasks-context/tasks.md',
        decisions: '.dovetell-tasks-context/decisions.md',
        risks: '.dovetell-tasks-context/risks.md',
        opportunities: '.dovetell-tasks-context/opportunities.md',
        rules: '.dovetell-tasks-context/rules.md',
        journal: '.dovetell-tasks-context/journal.md',
        changelog: '.dovetell-tasks-context/changelog.md'
      }
    }
  ];

  function configUrl() {
    const src = document.currentScript && document.currentScript.src;
    return new URL('../config/account-projects.json', src || global.location.href).href;
  }

  function mergeContextFiles(contextFiles, fallback = FALLBACK_CONTEXT_FILES) {
    return { ...fallback, ...(contextFiles || {}) };
  }

  function normalizeProjectConfig(project, fallbackContextFiles) {
    if (!project || !project.owner || !project.repo) return null;
    const owner = String(project.owner).trim();
    const repo = String(project.repo).trim();
    const id = String(project.id || `${owner}-${repo}`)
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9-]+/g, '-')
      .replace(/^-+|-+$/g, '');
    if (!id || !owner || !repo) return null;
    return {
      id,
      name: String(project.name || repo || id).trim(),
      owner,
      repo,
      visibility: ['public', 'private', 'unknown'].includes(project.visibility) ? project.visibility : 'unknown',
      tokenKey: String(project.tokenKey || `dovetell_pat_${owner}_${repo}`).replace(/[^a-zA-Z0-9_-]/g, '_'),
      contextFiles: mergeContextFiles(project.contextFiles, fallbackContextFiles)
    };
  }

  function normalizeProjectConfigFile(config) {
    const source = config && typeof config === 'object' ? config : {};
    const defaultContextFiles = mergeContextFiles(source.defaultContextFiles);
    const normalizedProjects = (Array.isArray(source.projects) ? source.projects : [])
      .map(project => normalizeProjectConfig(project, defaultContextFiles))
      .filter(Boolean);
    return {
      schemaVersion: Number(source.schemaVersion) || 1,
      account: source.account || { id: 'local', name: 'Local', defaultProjectId: 'dovetell-sandbox' },
      defaultContextFiles,
      projects: normalizedProjects.length ? normalizedProjects : FALLBACK_PROJECTS.map(project => normalizeProjectConfig(project, defaultContextFiles))
    };
  }

  function readProjectConfig() {
    try {
      const request = new XMLHttpRequest();
      request.open('GET', configUrl(), false);
      request.overrideMimeType('application/json');
      request.send(null);
      if (request.status && request.status !== 200) throw new Error(`HTTP ${request.status}`);
      return normalizeProjectConfigFile(JSON.parse(request.responseText));
    } catch (err) {
      console.warn('Falling back to embedded project configuration.', err);
      return normalizeProjectConfigFile({
        schemaVersion: 1,
        account: { id: 'local', name: 'Local', defaultProjectId: 'dovetell-sandbox' },
        defaultContextFiles: FALLBACK_CONTEXT_FILES,
        projects: FALLBACK_PROJECTS
      });
    }
  }

  const config = readProjectConfig();
  const defaultContextFiles = config.defaultContextFiles;
  const projects = config.projects;

  global.DOVETELL_ACCOUNT_CONFIG = config.account || null;
  global.DOVETELL_PROJECT_CONFIG = config;
  global.DOVETELL_DEFAULT_CONTEXT_FILES = defaultContextFiles;
  global.DOVETELL_DEFAULT_PROJECTS = projects;
  global.DOVETELL_PROJECTS = projects;
})(window);
