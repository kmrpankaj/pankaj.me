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
    const canonical = $derived($page.url.href);
    const siteOrigin = $derived($page.url.origin);
    const ogImage = $derived(`${siteOrigin}/og.svg`);
    const jsonLd = $derived({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Pankaj",
        url: siteOrigin,
        sameAs: [
            "https://github.com/pankaj",
            "https://x.com/",
            "https://www.linkedin.com/"
        ]
    });
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    <link rel="canonical" href={canonical} />
    <title>{siteTitle}</title>
    <meta name="description" content={siteDescription} />
    <meta name="theme-color" content="#0ea5e9" />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content={siteTitle} />
    <meta property="og:description" content={siteDescription} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={canonical} />
    <meta property="og:image" content={ogImage} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={siteTitle} />
    <meta name="twitter:description" content={siteDescription} />
    <meta name="twitter:image" content={ogImage} />
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
</svelte:head>

<header class="header container">
    <div class="branding">
        <a href="/" class="brand">Pankaj Kumar</a>
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
