(function(global){
  const TOKEN_KEY = 'dovetell_pat';

  function nanoid(len = 8) {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    const arr = new Uint8Array(len);
    crypto.getRandomValues(arr);
    arr.forEach(n => id += chars[n % chars.length]);
    return id;
  }

  async function githubGet(config, path) {
    const res = await fetch(
      `https://api.github.com/repos/${config.owner}/${config.repo}/contents/${path}`,
      { headers: { 'Authorization': `Bearer ${config.token}`, 'Accept': 'application/vnd.github.v3+json' } }
    );
    if (!res.ok) throw new Error(`GitHub ${res.status}: ${res.statusText}`);
    return res.json();
  }

  async function githubPut(config, path, content, sha, message) {
    const res = await fetch(
      `https://api.github.com/repos/${config.owner}/${config.repo}/contents/${path}`,
      {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${config.token}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message,
          content: btoa(unescape(encodeURIComponent(content))),
          sha
        })
      }
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
    nanoid,
    githubGet,
    githubPut,
    nowTimestamp,
    todayDate,
    escHtml,
    readToken,
    saveToken,
    clearToken,
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
})(window);
