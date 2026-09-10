(function () {
  const toggle = document.querySelector('.theme-toggle');
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

  if (!toggle) return;

  function savedTheme() {
    try {
      return localStorage.getItem('theme');
    } catch (error) {
      return null;
    }
  }

  function applyTheme(theme) {
    const isDark = theme === 'dark';
    const label = `Switch to ${isDark ? 'light' : 'dark'} mode`;
    const labelEl = toggle.querySelector('.theme-toggle__label');
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    toggle.setAttribute('aria-label', label);
    toggle.setAttribute('title', label);
    if (labelEl) labelEl.textContent = isDark ? 'Light mode' : 'Dark mode';
    if (themeColor) themeColor.setAttribute('content', isDark ? '#0b1120' : '#f6f7f9');
  }

  applyTheme(document.documentElement.dataset.theme || 'light');

  toggle.addEventListener('click', function () {
    const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    try {
      localStorage.setItem('theme', theme);
    } catch (error) {
      // The selected theme still applies for this page when storage is unavailable.
    }
    applyTheme(theme);
  });

  systemTheme.addEventListener('change', function (event) {
    if (!savedTheme()) applyTheme(event.matches ? 'dark' : 'light');
  });
}());
