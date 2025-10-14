<script>
  export let align = 'left';
  const socials = [
    { href: 'https://github.com/kmrpankaj', label: 'GitHub', icon: 'github' },
    { href: 'https://x.com/impankajk', label: 'X (Twitter)', icon: 'x' },
    { href: 'https://www.linkedin.com/in/impankajk/', label: 'LinkedIn', icon: 'linkedin' }
  ];
</script>

<nav class="socials" data-align={align} aria-label="Social links">
  {#each socials as s}
    <a class="social-link" href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
      {#if s.icon === 'github'}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 .5a12 12 0 0 0-3.79 23.41c.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.84 1.32 3.53 1 .11-.78.42-1.32.77-1.62-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.56.12-3.25 0 0 1.01-.32 3.31 1.23.96-.27 1.99-.4 3.01-.4s2.05.13 3.01.4c2.3-1.55 3.31-1.23 3.31-1.23.66 1.69.24 2.94.12 3.25.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.47 5.93.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"/>
        </svg>
      {/if}
      {#if s.icon === 'x'}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18 2h-3l-4 6L6 2H3l6 9-6 9h3l4-6 4 6h3l-6-9 6-9Z"/>
        </svg>
      {/if}
      {#if s.icon === 'linkedin'}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5.001 2.5 2.5 0 0 0 0-5zM3 9h4v12H3V9zm7 0h3.64v1.64h.05c.51-.97 1.76-1.99 3.62-1.99 3.87 0 4.58 2.55 4.58 5.86V21H19v-5.2c0-1.24-.02-2.84-1.73-2.84-1.74 0-2 1.35-2 2.74V21h-4V9z"/>
        </svg>
      {/if}
    </a>
  {/each}

</nav>

<style>
  .socials {
    display: flex;
    gap: 0.75rem;
    margin-top: 1rem;
    justify-content: var(--justify, flex-start);
  }

  .socials[data-align='center'] { --justify: center; }
  .socials[data-align='right'] { --justify: flex-end; }

  .social-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    width: 36px;
    border-radius: 10px;
    border: 1px solid var(--border);
    background: var(--card);
    color: var(--text);
  }

  .social-link:hover { filter: brightness(1.03); }
</style>