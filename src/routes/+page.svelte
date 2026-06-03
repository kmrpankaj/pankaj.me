<script>
  import { SocialLinks } from '$lib';

  const focusAreas = ['JavaScript', 'PostgreSQL', 'UI/UX', 'AI'];
</script>

<section class="card hero">
  <header class="hero-head">
    <h1>
      <span class="name">Pankaj Kumar</span>
      <span class="role">Web Developer</span>
    </h1>
  </header>

  <div class="bio">
    <p class="lead">
      Hey, I’m Pankaj — building on the web since 2011, when WordPress themes felt like the future (and
      honestly, they still hold up).
    </p>
    <p class="rest">
      These days I work with JavaScript, PostgreSQL, UI/UX, and AI integrations to ship experiences that
      are fast, functional, and a little addictive.  I’m the kind of guy who can spend hours perfecting a layout or talking about cars, gadgets, and design trends. Fueled by curiosity and coffee, I love turning ideas into
      things people actually enjoy using.
    </p>
  </div>

  <ul class="tags" aria-label="Focus areas">
    {#each focusAreas as tag}
      <li>{tag}</li>
    {/each}
  </ul>

  <SocialLinks align="center" />
</section>

<style>
  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    text-align: center;
  }

  .hero-head {
    width: 100%;
  }

  .hero h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.35rem;
    margin: 0;
    padding-bottom: 0.75rem;
    position: relative;
    opacity: 0;
    animation: fadeUp 500ms ease 60ms forwards;
  }

  .hero h1::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    height: 2px;
    width: 64px;
    transform: translateX(-50%);
    background: linear-gradient(90deg, var(--accent), transparent 85%);
    border-radius: 2px;
    opacity: 0.75;
  }

  .name {
    font-family: var(--font-display);
    font-size: clamp(1.75rem, 6vw, 2.5rem);
    font-weight: 400;
    line-height: 1.15;
    letter-spacing: -0.02em;
    text-wrap: balance;
  }

  .role {
    font-family: inherit;
    font-size: clamp(0.875rem, 2.5vw, 1rem);
    font-weight: 500;
    color: var(--muted);
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .bio {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    max-width: 58ch;
    opacity: 0;
    animation: fadeUp 600ms ease 140ms forwards;
  }

  .bio p {
    margin: 0;
    text-align: center;
  }

  .lead {
    color: var(--text);
    font-size: 1.05rem;
    line-height: 1.6;
  }

  .rest {
    color: var(--muted);
    font-size: 0.975rem;
    line-height: 1.65;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    margin: 0;
    padding: 0;
    list-style: none;
    opacity: 0;
    animation: fadeUp 600ms ease 220ms forwards;
  }

  .tags li {
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    color: var(--muted);
    padding: 0.3rem 0.65rem;
    border: 1px solid var(--border);
    border-radius: 999px;
    background: var(--bg);
  }

  @media (max-width: 480px) {
    .hero {
      gap: 1rem;
    }
  }
</style>
