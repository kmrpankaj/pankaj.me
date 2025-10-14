<script>
    import favicon from '$lib/assets/favicon.svg';
    import { fade } from 'svelte/transition';
    import ThemeToggle from '$lib/components/ThemeToggle.svelte';
    import '../app.css';
    import { page } from '$app/stores';

    let { children } = $props();

    const siteTitle = 'Pankaj — Portfolio';
    const siteDescription =
        "Hey there, I’m Pankaj! I spend most of my time turning caffeine into code and ideas into clean, fast websites. If it’s got wheels, pixels, or a power button — I’m interested. I can talk about cars and gadgets for hours, but give me JavaScript and a good playlist, and I’m in my zone. Always learning, always building — just trying to make cool stuff that actually works.";
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    <title>{siteTitle}</title>
    <meta name="description" content={siteDescription} />
    <meta name="theme-color" content="#0ea5e9" />
    <meta property="og:title" content={siteTitle} />
    <meta property="og:description" content={siteDescription} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
</svelte:head>

<header class="header container">
    <div class="branding">
        <a href="/" class="brand">Pankaj</a>
    </div>
    <ThemeToggle />
    
</header>

<main class="main-container">
    <div class="container">
        {#key $page.url.pathname}
            <div in:fade={{ duration: 200 }} out:fade={{ duration: 200 }}>
                {@render children?.()}
            </div>
        {/key}
    </div>
</main>

<footer class="container">
    <div class="footer">
        <small>© {new Date().getFullYear()} Pankaj. Built with SvelteKit.</small>
    </div>
</footer>
