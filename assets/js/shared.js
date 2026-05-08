(function(global){
  const TOKEN_KEY = 'dovetell_pat';
  const ACCOUNT_CONFIG_STORAGE_KEY = 'dvtl:account-project-config:working';
  const CONFIG_SYNC_STORAGE_KEY = 'dvtl:account-project-config:sync';
  const PROJECTS_STORAGE_KEY = 'dvtl:projects:drafts';
  const LEGACY_PROJECTS_STORAGE_KEY = 'dovetell_projects_custom';
  const STANDARD_CONTEXT_FILES = {
    tasks: 'tasks.md',
    decisions: 'decisions.md',
    risks: 'risks.md',
    opportunities: 'opportunities.md',
    rules: 'business-rules.md',
    journal: 'journal.md',
    changelog: 'changelog.md'
  };
  const PROJECT_CONTEXT_FILES = {
    tasks: '.project-context/tasks.md',
    decisions: '.project-context/decisions.md',
    risks: '.project-context/risks.md',
    opportunities: '.project-context/opportunities.md',
    rules: '.project-context/rules.md',
    journal: '.project-context/journal.md',
    changelog: '.project-context/changelog.md'
  };
  const SOURCE_PROFILES = {
    'project-context': {
      label: 'Project context',
      dashboard: true,
      contextFiles: PROJECT_CONTEXT_FILES
    },
    'business-context': {
      label: 'Business context',
      dashboard: true,
      contextFiles: STANDARD_CONTEXT_FILES
    },
    'asset-refinery': {
      label: 'Asset refinery',
      dashboard: false,
      contextFiles: {
        changelog: '.project-context/changelog.md',
        commands: '.project-context/commands.md',
        contextMap: '.project-context/context-map.md',
        contextStructure: '.project-context/context-structure.md',
        patternCandidates: '.project-context/pattern-candidates.md',
        promotionLifecycle: '.project-context/promotion-lifecycle.md'
      }
    },
    'canonical-assets': {
      label: 'Canonical assets',
      dashboard: false,
      contextFiles: {
        schema: 'schema/README.md',
        promptTemplates: 'prompts/README.md',
        auditPrompts: 'audits/README.md',
        guides: 'guides/README.md',
        conventions: 'conventions/README.md',
        changelog: 'CHANGELOG.md'
      }
    },
    docs: {
      label: 'Docs',
      dashboard: false,
      contextFiles: {
        index: 'README.md',
        changelog: 'CHANGELOG.md'
      }
    },
    app: {
      label: 'App',
      dashboard: false,
      contextFiles: {
        readme: 'README.md',
        changelog: 'CHANGELOG.md'
      }
    }
  };

  function nanoid(len = 8) {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    const arr = new Uint8Array(len);
    crypto.getRandomValues(arr);
    arr.forEach(n => id += chars[n % chars.length]);
    return id;
  }

  async function fetchWithTimeout(url, options = {}, timeoutMs = 15000) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      return await fetch(url, { ...options, signal: controller.signal });
    } catch (err) {
      if (err && err.name === 'AbortError') throw new Error('GitHub request timed out');
      throw err;
    } finally {
      clearTimeout(timer);
    }
  }

  async function githubGet(config, path) {
    const ref = config.branch ? `?ref=${encodeURIComponent(config.branch)}` : '';
    const headers = { 'Accept': 'application/vnd.github.v3+json' };
    if (config.token) headers.Authorization = `Bearer ${config.token}`;
    const res = await fetchWithTimeout(
      `https://api.github.com/repos/${config.owner}/${config.repo}/contents/${path}${ref}`,
      { headers }
    );
    if (!res.ok) throw new Error(`GitHub ${res.status}: ${res.statusText}`);
    return res.json();
  }

  async function githubPut(config, path, content, sha, message) {
    const res = await fetchWithTimeout(
      `https://api.github.com/repos/${config.owner}/${config.repo}/contents/${path}`,
      {
        method: 'PUT',
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
          ...(config.token ? { 'Authorization': `Bearer ${config.token}` } : {})
        },
        body: JSON.stringify({
          message,
          content: btoa(unescape(encodeURIComponent(content))),
          ...(config.branch ? { branch: config.branch } : {}),
          ...(sha ? { sha } : {})
        })
      },
      20000
    );
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || `GitHub ${res.status}`);
    }
    return res.json();
  }

  function partsFor(config, date, includeTime) {
    const opts = {
      timeZone: config.timezone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    };
    if (includeTime) {
      opts.hour = '2-digit';
      opts.minute = '2-digit';
      opts.hour12 = false;
    }
    const parts = new Intl.DateTimeFormat('en-US', opts).formatToParts(date);
    return type => parts.find(part => part.type === type).value;
  }

  function nowTimestamp(config) {
    const get = partsFor(config, new Date(), true);
    return `${get('year')}-${get('month')}-${get('day')}T${get('hour')}:${get('minute')} ${config.tzLabel}`;
  }

  function todayDate(config) {
    const get = partsFor(config, new Date(), false);
    return `${get('year')}-${get('month')}-${get('day')}`;
  }

  function escHtml(str) {
    return (str || '')
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function readToken() {
    return localStorage.getItem(TOKEN_KEY);
  }

  function saveToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
  }

  function clearToken() {
    localStorage.removeItem(TOKEN_KEY);
  }

  function repoSlug(config) {
    return `${config.owner}/${config.repo}`;
  }

  function legacyProjectTokenKey(project) {
    if (project && project.legacyTokenKey) return project.legacyTokenKey;
    if (project && project.tokenKey) return project.tokenKey;
    if (!project) return TOKEN_KEY;
    return `dovetell_pat_${repoSlug(project).replace(/[^a-zA-Z0-9]/g, '_')}`;
  }

  function projectTokenKey(project) {
    if (!project) return TOKEN_KEY;
    const projectId = (project.id || repoSlug(project)).replace(/[^a-zA-Z0-9_-]/g, '-');
    return `dvtl:project:${projectId}:pat`;
  }

  function readProjectToken(project) {
    const canonicalKey = projectTokenKey(project);
    const token = localStorage.getItem(canonicalKey);
    if (token) return token;
    const legacyKey = legacyProjectTokenKey(project);
    const legacyToken = legacyKey && legacyKey !== canonicalKey ? localStorage.getItem(legacyKey) : null;
    return legacyToken || null;
  }

  function saveProjectToken(project, token) {
    localStorage.setItem(projectTokenKey(project), token);
    const legacyKey = legacyProjectTokenKey(project);
    if (legacyKey && legacyKey !== projectTokenKey(project)) localStorage.setItem(legacyKey, token);
  }

  function clearProjectToken(project) {
    localStorage.removeItem(projectTokenKey(project));
    const legacyKey = legacyProjectTokenKey(project);
    if (legacyKey && legacyKey !== projectTokenKey(project)) localStorage.removeItem(legacyKey);
  }

  function configTokenKey(repo = configRepo()) {
    return `dvtl:config:${repoSlug(repo).replace(/[^a-zA-Z0-9_-]/g, '-')}:${repo.path.replace(/[^a-zA-Z0-9_-]/g, '-')}:pat`;
  }

  function readConfigToken() {
    return localStorage.getItem(configTokenKey());
  }

  function saveConfigToken(token) {
    localStorage.setItem(configTokenKey(), token);
  }

  function clearConfigToken() {
    localStorage.removeItem(configTokenKey());
  }

  function cloneProject(project) {
    return JSON.parse(JSON.stringify(project));
  }

  function fallbackContextFiles() {
    return cloneProject(global.DOVETELL_DEFAULT_CONTEXT_FILES || STANDARD_CONTEXT_FILES);
  }

  function normalizeRepoType(repoType) {
    return (repoType || 'project-context').trim().toLowerCase().replace(/[^a-z0-9-]+/g, '-') || 'project-context';
  }

  function sourceProfile(repoType = 'project-context') {
    const key = normalizeRepoType(repoType);
    return SOURCE_PROFILES[key] || SOURCE_PROFILES['project-context'];
  }

  function sourceContextFiles(repoType = 'project-context', contextDefaults = null) {
    const key = normalizeRepoType(repoType);
    if (key === 'business-context' && contextDefaults) {
      return cloneProject({ ...SOURCE_PROFILES['business-context'].contextFiles, ...contextDefaults });
    }
    return cloneProject(sourceProfile(key).contextFiles);
  }

  function sourceSupportsDashboard(project) {
    return Boolean(sourceProfile(project && project.repoType).dashboard);
  }

  function normalizeAccountConfig(config) {
    const source = config && typeof config === 'object' ? config : {};
    const defaults = { ...fallbackContextFiles(), ...(source.defaultContextFiles || {}) };
    const projects = (Array.isArray(source.projects) ? source.projects : [])
      .map(project => normalizeProject(project, defaults))
      .filter(project => project.id && project.owner && project.repo)
      .sort((a, b) => a.id.localeCompare(b.id));
    return {
      schemaVersion: Number(source.schemaVersion) || 1,
      account: {
        id: (source.account && source.account.id) || 'local',
        name: (source.account && source.account.name) || 'Local',
        defaultProjectId: (source.account && source.account.defaultProjectId) || (projects[0] && projects[0].id) || ''
      },
      configRepo: source.configRepo || {
        owner: 'jchromchak',
        repo: 'dovetell-tasks',
        branch: 'main',
        path: 'assets/config/account-projects.json'
      },
      defaultContextFiles: defaults,
      projects
    };
  }

  function baseAccountConfig() {
    return normalizeAccountConfig(global.DOVETELL_PROJECT_CONFIG || {
      schemaVersion: 1,
      account: { id: 'local', name: 'Local', defaultProjectId: 'dovetell-sandbox' },
      defaultContextFiles: fallbackContextFiles(),
      projects: global.DOVETELL_DEFAULT_PROJECTS || global.DOVETELL_PROJECTS || []
    });
  }

  function readWorkingAccountConfig() {
    try {
      const raw = localStorage.getItem(ACCOUNT_CONFIG_STORAGE_KEY);
      return raw ? normalizeAccountConfig(JSON.parse(raw)) : null;
    } catch {
      return null;
    }
  }

  function saveWorkingAccountConfig(config) {
    const normalized = normalizeAccountConfig(config);
    localStorage.setItem(ACCOUNT_CONFIG_STORAGE_KEY, JSON.stringify(normalized));
    localStorage.setItem(CONFIG_SYNC_STORAGE_KEY, JSON.stringify({ state: 'pending', updatedAt: new Date().toISOString() }));
    return normalized;
  }

  function clearWorkingAccountConfig() {
    localStorage.removeItem(ACCOUNT_CONFIG_STORAGE_KEY);
    localStorage.removeItem(CONFIG_SYNC_STORAGE_KEY);
  }

  function readConfigSyncStatus() {
    try {
      const raw = localStorage.getItem(CONFIG_SYNC_STORAGE_KEY);
      return raw ? JSON.parse(raw) : { state: 'synced' };
    } catch {
      return { state: 'unknown' };
    }
  }

  function saveConfigSyncStatus(status) {
    localStorage.setItem(CONFIG_SYNC_STORAGE_KEY, JSON.stringify({ ...status, updatedAt: new Date().toISOString() }));
  }

  function readLegacyDraftProjects() {
    try {
      let raw = localStorage.getItem(PROJECTS_STORAGE_KEY);
      if (!raw) {
        raw = localStorage.getItem(LEGACY_PROJECTS_STORAGE_KEY);
        if (raw) localStorage.setItem(PROJECTS_STORAGE_KEY, raw);
      }
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed.filter(project => project && project.id && project.owner && project.repo) : [];
    } catch {
      return [];
    }
  }

  function clearLegacyDraftProjects() {
    localStorage.removeItem(PROJECTS_STORAGE_KEY);
    localStorage.removeItem(LEGACY_PROJECTS_STORAGE_KEY);
  }

  function normalizeProject(project, contextDefaults = null) {
    const owner = (project.owner || '').trim();
    const repo = (project.repo || '').trim();
    const id = (project.id || `${owner}-${repo}`).trim().toLowerCase().replace(/[^a-z0-9-]+/g, '-').replace(/^-+|-+$/g, '');
    const repoType = normalizeRepoType(project.repoType);
    const contextFiles = { ...sourceContextFiles(repoType, contextDefaults), ...(project.contextFiles || {}) };
    return {
      id,
      name: (project.name || repo || id).trim(),
      owner,
      repo,
      repoType,
      visibility: ['public', 'private', 'unknown'].includes(project.visibility) ? project.visibility : 'unknown',
      legacyTokenKey: project.legacyTokenKey || project.tokenKey || null,
      contextFiles
    };
  }

  function accountConfig() {
    const working = readWorkingAccountConfig();
    if (working) return cloneProject(working);
    const base = baseAccountConfig();
    const drafts = readLegacyDraftProjects();
    if (!drafts.length) return cloneProject(base);
    const projects = base.projects.filter(project => !drafts.some(draft => draft.id === project.id));
    drafts.forEach(draft => projects.push(normalizeProject(draft, base.defaultContextFiles)));
    return normalizeAccountConfig({ ...base, projects });
  }

  function defaultContextFiles() {
    return cloneProject(accountConfig().defaultContextFiles || fallbackContextFiles());
  }

  function defaultProjects() {
    return accountConfig().projects.map(cloneProject);
  }

  function baseDefaultProjects() {
    return baseAccountConfig().projects.map(cloneProject);
  }

  function readCustomProjects() {
    const baseIds = new Set(baseDefaultProjects().map(project => project.id));
    return defaultProjects().filter(project => !baseIds.has(project.id));
  }

  function saveCustomProjects(projects) {
    const base = accountConfig();
    saveWorkingAccountConfig({ ...base, projects });
  }

  function clearCustomProjects() {
    clearWorkingAccountConfig();
    clearLegacyDraftProjects();
  }

  function upsertCustomProject(project) {
    const config = accountConfig();
    const normalized = normalizeProject(project, config.defaultContextFiles);
    const projects = config.projects.filter(item => item.id !== normalized.id);
    projects.push(normalized);
    saveWorkingAccountConfig({ ...config, projects });
    return normalized;
  }

  function deleteCustomProject(projectId) {
    const config = accountConfig();
    const projects = config.projects.filter(project => project.id !== projectId);
    const nextDefault = config.account.defaultProjectId === projectId ? (projects[0] && projects[0].id) || '' : config.account.defaultProjectId;
    saveWorkingAccountConfig({ ...config, account: { ...config.account, defaultProjectId: nextDefault }, projects });
  }

  function hasCustomProjects() {
    return Boolean(readWorkingAccountConfig()) || readLegacyDraftProjects().length > 0;
  }

  function projectIsCustom(projectId) {
    return defaultProjects().some(project => project.id === projectId);
  }

  function projectIsDefault(projectId) {
    return baseDefaultProjects().some(project => project.id === projectId);
  }

  function projectSource(projectId) {
    const working = readWorkingAccountConfig();
    if (!working && !readLegacyDraftProjects().length) return 'repo config';
    const base = baseDefaultProjects().find(project => project.id === projectId);
    const current = defaultProjects().find(project => project.id === projectId);
    if (!base && current) return 'working config';
    if (base && current && JSON.stringify(serializableProject(base)) !== JSON.stringify(serializableProject(current))) return 'working override';
    return 'repo config';
  }

  function allProjects() {
    return defaultProjects();
  }

  function serializableProject(project) {
    const normalized = normalizeProject(project);
    return {
      id: normalized.id,
      name: normalized.name,
      owner: normalized.owner,
      repo: normalized.repo,
      repoType: normalized.repoType,
      visibility: normalized.visibility,
      contextFiles: normalized.contextFiles
    };
  }

  function buildAccountProjectConfig(projects = allProjects()) {
    const base = accountConfig();
    const serializedProjects = projects
      .map(serializableProject)
      .sort((a, b) => a.id.localeCompare(b.id));
    const defaultProjectId = (base.account && base.account.defaultProjectId) || (serializedProjects[0] && serializedProjects[0].id) || '';
    return {
      schemaVersion: Number(base.schemaVersion) || 1,
      account: {
        id: (base.account && base.account.id) || 'local',
        name: (base.account && base.account.name) || 'Local',
        defaultProjectId
      },
      configRepo: base.configRepo,
      defaultContextFiles: { ...defaultContextFiles(), ...(base.defaultContextFiles || {}) },
      projects: serializedProjects
    };
  }

  function accountProjectConfigJson(projects = allProjects()) {
    return `${JSON.stringify(buildAccountProjectConfig(projects), null, 2)}\n`;
  }

  function configRepo() {
    const repo = accountConfig().configRepo || {};
    return {
      owner: repo.owner || 'jchromchak',
      repo: repo.repo || 'dovetell-tasks',
      branch: repo.branch || 'main',
      path: repo.path || 'assets/config/account-projects.json'
    };
  }

  async function pushAccountProjectConfig(token, message = 'Update account project configuration') {
    const repo = configRepo();
    const config = { owner: repo.owner, repo: repo.repo, branch: repo.branch, token };
    const file = await githubGet(config, repo.path);
    await githubPut(config, repo.path, accountProjectConfigJson(), file.sha, message);
    saveConfigSyncStatus({ state: 'synced', repo: `${repo.owner}/${repo.repo}`, path: repo.path });
    return repo;
  }

  function projectsForSource(sourceKey) {
    return allProjects().filter(project => project.contextFiles && project.contextFiles[sourceKey]);
  }

  function projectName(project) {
    return project ? project.name || repoSlug(project) : 'unknown project';
  }

  function visibilityIcon(project) {
    if (!project) return '?';
    if (project.visibility === 'private') return '🔒';
    if (project.visibility === 'public') return '🌐';
    return '?';
  }

  function selectedProject(sourceKey) {
    const projects = projectsForSource(sourceKey);
    const params = new URLSearchParams(global.location.search);
    const requested = params.get('project') || localStorage.getItem(`dovetell_project_${sourceKey}`);
    const match = projects.find(project => project.id === requested) || projects[0] || null;
    if (match) localStorage.setItem(`dovetell_project_${sourceKey}`, match.id);
    return match;
  }

  function applyProjectConfig(config, sourceKey, project) {
    if (!project) return;
    config.owner = project.owner;
    config.repo = project.repo;
    config.path = project.contextFiles[sourceKey];
    config.project = project;
    config.token = readProjectToken(project);
    const bannerPath = document.querySelector('.demo-banner span:last-child');
    if (bannerPath) bannerPath.textContent = `${repoSlug(project)} · ${config.path}`;
  }

  function renderProjectSelect(sourceKey, currentProject) {
    const projects = projectsForSource(sourceKey);
    if (!projects.length || document.getElementById('project-select')) return;
    const topbar = document.querySelector('.topbar-right');
    if (!topbar) return;
    const select = document.createElement('select');
    select.id = 'project-select';
    select.className = 'project-select';
    select.title = 'Context source';
    projects.forEach(project => {
      const option = document.createElement('option');
      option.value = project.id;
      option.textContent = `${visibilityIcon(project)} ${projectName(project)}`;
      option.selected = currentProject && project.id === currentProject.id;
      select.appendChild(option);
    });
    select.addEventListener('change', () => {
      localStorage.setItem(`dovetell_project_${sourceKey}`, select.value);
      const url = new URL(global.location.href);
      url.searchParams.set('project', select.value);
      url.searchParams.delete('id');
      global.location.href = url.toString();
    });
    topbar.insertBefore(select, topbar.firstChild);
  }

  function sectionForPath() {
    const match = global.location.pathname.match(/\/(dashboard|tasks|decisions|opportunities|rules|risks)\/?$/);
    return match ? match[1] : 'dashboard';
  }

  function renderSidebarProjects(options = {}) {
    const nav = document.querySelector('.tab-bar');
    if (!nav || document.getElementById('sidebar-projects')) return;
    const projects = allProjects();
    if (!projects.length) return;
    const section = sectionForPath();
    const activeProjectId = options.activeProjectId || '';
    const projectHrefBase = section === 'dashboard' ? 'tasks' : section;
    const addProjectAction = options.addAction || '';
    const addProjectControl = addProjectAction
      ? `<button class="sidebar-project-add" type="button" onclick="${addProjectAction}">+ Add source</button>`
      : `<a class="sidebar-project-add" href="../dashboard/?projects=add">+ Add source</a>`;
    const projectHtml = projects.map(project => `
      <a class="sidebar-project ${project.id === activeProjectId ? 'active' : ''}" href="../${projectHrefBase}/?project=${encodeURIComponent(project.id)}" title="${escHtml(repoSlug(project))}">
        <span class="sidebar-project-icon">${visibilityIcon(project)}</span>
        <span class="sidebar-project-name">${escHtml(projectName(project))}</span>
      </a>
    `).join('');
    const wrap = document.createElement('div');
    wrap.className = 'sidebar-projects';
    wrap.id = 'sidebar-projects';
    wrap.innerHTML = `<div class="sidebar-project-label">Sources</div>${projectHtml}${addProjectControl}`;
    const dashboardLink = nav.querySelector('a[href="../dashboard/"]') || nav.querySelector('.tab-item');
    if (dashboardLink && dashboardLink.nextSibling) {
      nav.insertBefore(wrap, dashboardLink.nextSibling);
    } else {
      nav.appendChild(wrap);
    }
  }

  function initProjectPage(config, sourceKey) {
    const project = selectedProject(sourceKey);
    applyProjectConfig(config, sourceKey, project);
    renderProjectSelect(sourceKey, project);
    renderSidebarProjects({ activeProjectId: project && project.id });
    return project;
  }

  function expandDeepLink(items, prefix, buttonSelector) {
    const params = new URLSearchParams(global.location.search);
    const targetId = params.get('id');
    if (!targetId) return;
    const match = items.find(item => item.id === targetId);
    if (!match) return;
    setTimeout(() => {
      const el = document.getElementById(`${prefix}-${match.lineIndex}`);
      if (!el) return;
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('expanded');
      const btn = buttonSelector ? el.querySelector(buttonSelector) : null;
      if (btn) btn.textContent = '▲';
    }, 200);
  }

  function readTokenInput(id = 'token-input') {
    const input = document.getElementById(id);
    return input ? input.value.trim() : '';
  }

  function setStatus(state, text) {
    const dot = document.getElementById('status-dot');
    const label = document.getElementById('status-text');
    if (!dot || !label) return;
    dot.className = 'status-dot';
    if (state === 'loading') dot.classList.add('loading');
    if (state === 'error') dot.classList.add('error');
    label.textContent = text;
  }

  function showToast(message, type = '') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    setTimeout(() => toast.classList.remove('show'), 3000);
  }

  function openSheet(sheetId, overlayId) {
    const sheet = document.getElementById(sheetId);
    const overlay = document.getElementById(overlayId);
    if (sheet) sheet.classList.add('open');
    if (overlay) overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeSheet(sheetId, overlayId) {
    const sheet = document.getElementById(sheetId);
    const overlay = document.getElementById(overlayId);
    if (sheet) sheet.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  function openAddSheet(options = {}) {
    openSheet(options.sheetId || 'add-sheet', options.overlayId || 'sheet-overlay');
    const focusId = options.focusId;
    if (focusId) {
      setTimeout(() => {
        const el = document.getElementById(focusId);
        if (el) el.focus();
      }, options.focusDelay || 300);
    }
  }

  function closeAddSheet(options = {}) {
    closeSheet(options.sheetId || 'add-sheet', options.overlayId || 'sheet-overlay');
  }

  function openBulkSheet(options = {}) {
    const sheetId = options.sheetId || 'bulk-sheet';
    const overlayId = options.overlayId || 'bulk-overlay';
    openSheet(sheetId, overlayId);
    if (options.previewId) {
      const preview = document.getElementById(options.previewId);
      if (preview) preview.classList.remove('visible');
    }
    if (options.inputId) {
      const input = document.getElementById(options.inputId);
      if (input && options.clearInput !== false) input.value = '';
      setTimeout(() => {
        const focus = document.getElementById(options.inputId);
        if (focus) focus.focus();
      }, options.focusDelay || 300);
    }
  }

  function closeBulkSheet(options = {}) {
    closeSheet(options.sheetId || 'bulk-sheet', options.overlayId || 'bulk-overlay');
  }

  global.Dovetell = {
    TOKEN_KEY,
    ACCOUNT_CONFIG_STORAGE_KEY,
    CONFIG_SYNC_STORAGE_KEY,
    PROJECTS_STORAGE_KEY,
    nanoid,
    fetchWithTimeout,
    githubGet,
    githubPut,
    nowTimestamp,
    todayDate,
    escHtml,
    readToken,
    saveToken,
    clearToken,
    repoSlug,
    legacyProjectTokenKey,
    projectTokenKey,
    readProjectToken,
    saveProjectToken,
    clearProjectToken,
    configTokenKey,
    readConfigToken,
    saveConfigToken,
    clearConfigToken,
    sourceProfiles: () => cloneProject(SOURCE_PROFILES),
    sourceProfile,
    sourceContextFiles,
    sourceSupportsDashboard,
    defaultContextFiles,
    defaultProjects,
    baseDefaultProjects,
    accountConfig,
    baseAccountConfig,
    readWorkingAccountConfig,
    saveWorkingAccountConfig,
    clearWorkingAccountConfig,
    readConfigSyncStatus,
    saveConfigSyncStatus,
    readCustomProjects,
    saveCustomProjects,
    clearCustomProjects,
    normalizeProject,
    upsertCustomProject,
    deleteCustomProject,
    hasCustomProjects,
    projectIsCustom,
    projectIsDefault,
    projectSource,
    allProjects,
    serializableProject,
    buildAccountProjectConfig,
    accountProjectConfigJson,
    configRepo,
    pushAccountProjectConfig,
    projectsForSource,
    projectName,
    visibilityIcon,
    selectedProject,
    applyProjectConfig,
    renderProjectSelect,
    renderSidebarProjects,
    initProjectPage,
    expandDeepLink,
    readTokenInput,
    setStatus,
    showToast,
    openSheet,
    closeSheet,
    openAddSheet,
    closeAddSheet,
    openBulkSheet,
    closeBulkSheet
  };

  global.nanoid = function(len) { return nanoid(len); };
  global.githubGet = function(path) { return githubGet(CONFIG, path); };
  global.githubPut = function(path, content, sha, message) { return githubPut(CONFIG, path, content, sha, message); };
  global.nowTimestamp = function() { return nowTimestamp(CONFIG); };
  global.todayDate = function() { return todayDate(CONFIG); };
  global.escHtml = function(str) { return escHtml(str); };
  global.setStatus = function(state, text) { return setStatus(state, text); };
  global.showToast = function(message, type) { return showToast(message, type); };
})(window);
