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

  function readProjectConfig() {
    try {
      const request = new XMLHttpRequest();
      request.open('GET', configUrl(), false);
      request.overrideMimeType('application/json');
      request.send(null);
      if (request.status && request.status !== 200) throw new Error(`HTTP ${request.status}`);
      return JSON.parse(request.responseText);
    } catch (err) {
      console.warn('Falling back to embedded project configuration.', err);
      return {
        schemaVersion: 1,
        account: { id: 'local', name: 'Local', defaultProjectId: 'dovetell-sandbox' },
        defaultContextFiles: FALLBACK_CONTEXT_FILES,
        projects: FALLBACK_PROJECTS
      };
    }
  }

  const config = readProjectConfig();
  const defaultContextFiles = config.defaultContextFiles || FALLBACK_CONTEXT_FILES;
  const projects = Array.isArray(config.projects) && config.projects.length ? config.projects : FALLBACK_PROJECTS;

  global.DOVETELL_ACCOUNT_CONFIG = config.account || null;
  global.DOVETELL_PROJECT_CONFIG = config;
  global.DOVETELL_DEFAULT_CONTEXT_FILES = defaultContextFiles;
  global.DOVETELL_DEFAULT_PROJECTS = projects;
  global.DOVETELL_PROJECTS = projects;
})(window);
