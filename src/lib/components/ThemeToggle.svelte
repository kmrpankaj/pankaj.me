<script>
  const THEME_KEY = 'theme';

  let current = /** @type {'light'|'dark'} */ ('light');

  function initTheme() {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved === 'light' || saved === 'dark') {
        current = saved;
      } else if (typeof window !== 'undefined' && window.matchMedia) {
        current = window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';
      }
    } catch {
      // ignore
    }
    applyTheme();
  }

  function applyTheme() {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', current);
    }
  }

  function toggle() {
    current = current === 'dark' ? 'light' : 'dark';
    try {
      localStorage.setItem(THEME_KEY, current);
    } catch {
      // ignore
    }
    applyTheme();
  }

  initTheme();
</script>

<button class="theme-toggle" aria-label="Toggle color theme" on:click={toggle}>
  {#if current === 'dark'}
    <!-- Sun icon -->
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 4V2M12 22v-2M4 12H2M22 12h-2M5.64 5.64 4.22 4.22M19.78 19.78l-1.42-1.42M18.36 5.64l1.42-1.42M4.22 19.78l1.42-1.42" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/>
    </svg>
  {:else}
    <!-- Moon icon -->
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  {/if}
</button>

<style>
  .theme-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    height: 36px;
    width: 36px;
    border-radius: 9999px;
    border: 1px solid var(--border);
    background: var(--card);
    color: var(--text);
    cursor: pointer;
  }

  .theme-toggle:hover {
    filter: brightness(1.02);
  }
</style>