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

  function configUrl() {
    const params = new URL(global.location.href).searchParams;
    const override = global.DOVETELL_PROJECT_CONFIG_URL || params.get('projectConfig');
    if (override) return new URL(override, global.location.href).href;
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
      legacyTokenKey: project.tokenKey ? String(project.tokenKey).replace(/[^a-zA-Z0-9_:-]/g, '_') : null,
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
      account: source.account || { id: 'local', name: 'Local', defaultProjectId: '' },
      configRepo: source.configRepo || null,
      defaultContextFiles,
      projects: normalizedProjects
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
      console.warn('Project configuration unavailable. No default projects loaded.', err);
      return normalizeProjectConfigFile({
        schemaVersion: 1,
        account: { id: 'local', name: 'Local', defaultProjectId: '' },
        defaultContextFiles: FALLBACK_CONTEXT_FILES,
        projects: []
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
