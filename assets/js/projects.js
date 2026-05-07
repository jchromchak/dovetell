(function(global){
  const DEFAULT_CONTEXT_FILES = {
    tasks: 'tasks.md',
    decisions: 'decisions.md',
    risks: 'risks.md',
    opportunities: 'opportunities.md',
    rules: 'business-rules.md',
    journal: 'journal.md',
    changelog: 'changelog.md'
  };

  const projects = [
    {
      id: 'dovetell-sandbox',
      name: 'dovetell sandbox',
      owner: 'dovetell-io',
      repo: 'dovetell-sandbox',
      visibility: 'public',
      tokenKey: 'dovetell_pat',
      contextFiles: DEFAULT_CONTEXT_FILES
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

  global.DOVETELL_DEFAULT_CONTEXT_FILES = DEFAULT_CONTEXT_FILES;
  global.DOVETELL_DEFAULT_PROJECTS = projects;
  global.DOVETELL_PROJECTS = projects;
})(window);
