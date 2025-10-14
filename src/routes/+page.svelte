<script>
  import { SocialLinks } from '$lib';
</script>

<section class="card">
  <h1>Pankaj Kumar — Web Developer</h1>
  <p>
    Hey, I’m Pankaj! I’ve been building on the web since 2011 — back when WordPress themes were the coolest thing around (and honestly, they still are). These days, I work my magic with JavaScript, PostgreSQL, UI/UX, and AI integrations, creating web experiences that are fast, functional, and a little bit addictive. I’m the kind of guy who can spend hours perfecting a layout or talking about cars, gadgets, and design trends. Fueled by curiosity and coffee, I just love turning ideas into things people actually enjoy using.
  </p>

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

  .card {
    padding: 1.5rem;
  }

  .card h1 {
    text-align: center;
    font-size: clamp(1.25rem, 5vw, 2rem);
    line-height: 1.2;
    margin: 0 0 0.75rem;
    font-weight: 800;
    letter-spacing: -0.01em;
    text-wrap: balance;
    position: relative;
    opacity: 0;
    animation: fadeUp 500ms ease 60ms forwards;
  }

  .card h1::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -10px;
    height: 2px;
    width: 72px;
    transform: translateX(-50%);
    background: linear-gradient(90deg, var(--accent), transparent 80%);
    border-radius: 2px;
    opacity: 0.7;
  }

  .card p {
    color: var(--muted);
    max-width: 60ch;
    margin: 0.5rem auto 0;
    text-align: center;
    opacity: 0;
    animation: fadeUp 600ms ease 160ms forwards;
  }
</style>
