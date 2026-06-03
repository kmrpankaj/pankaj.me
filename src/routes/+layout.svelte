<script>
    import { browser } from '$app/environment';
    import favicon from '$lib/assets/favicon.svg';
    import { fade } from 'svelte/transition';
    import ThemeToggle from '$lib/components/ThemeToggle.svelte';
    import '../app.css';
    import { page } from '$app/stores';
    import { PUBLIC_SITE_URL, PUBLIC_GA_MEASUREMENT_ID } from '$env/static/public';
    import { trackPageView } from '$lib/analytics.js';
    import {
        SITE,
        SOCIAL_LINKS,
        GA_MEASUREMENT_ID,
        getSiteUrl,
        getCanonicalUrl,
        buildStructuredData
    } from '$lib/site.js';

    let { children } = $props();

    const gaId = PUBLIC_GA_MEASUREMENT_ID || GA_MEASUREMENT_ID;

    $effect(() => {
        if (!browser || !gaId) return;
        trackPageView($page.url.pathname + $page.url.search);
    });

    const siteUrl = $derived(getSiteUrl(PUBLIC_SITE_URL, $page.url.origin));
    const canonical = $derived(getCanonicalUrl(siteUrl, $page.url.pathname));
    const ogImage = $derived(`${siteUrl}${SITE.ogImagePath}`);
    const jsonLd = $derived(
        buildStructuredData(siteUrl, SITE.description, canonical)
    );
    const keywords = SITE.keywords.join(', ');
</script>

<svelte:head>
    {#if gaId}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <script async src="https://www.googletagmanager.com/gtag/js?id={gaId}"></script>
        {@html `<script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', { send_page_view: false });
        <\/script>`}
    {/if}

    <link rel="icon" href={favicon} type="image/svg+xml" />
    <link rel="canonical" href={canonical} />

    {#each SOCIAL_LINKS as link}
        <link rel="me" href={link.href} />
    {/each}

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link
        href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
        rel="stylesheet"
    />

    <title>{SITE.title}</title>
    <meta name="description" content={SITE.description} />
    <meta name="keywords" content={keywords} />
    <meta name="author" content="Pankaj Kumar" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <meta name="googlebot" content="index, follow" />

    <meta name="theme-color" id="theme-color-meta" content="#0ea5e9" />

    <meta property="og:site_name" content={SITE.name} />
    <meta property="og:locale" content={SITE.locale} />
    <meta property="og:title" content={SITE.title} />
    <meta property="og:description" content={SITE.description} />
    <meta property="og:type" content="profile" />
    <meta property="og:url" content={canonical} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:secure_url" content={ogImage} />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content={String(SITE.ogImageWidth)} />
    <meta property="og:image:height" content={String(SITE.ogImageHeight)} />
    <meta property="og:image:alt" content={SITE.ogImageAlt} />
    <meta property="profile:first_name" content="Pankaj" />
    <meta property="profile:last_name" content="Kumar" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content={SITE.twitterSite} />
    <meta name="twitter:creator" content={SITE.twitterSite} />
    <meta name="twitter:title" content={SITE.title} />
    <meta name="twitter:description" content={SITE.description} />
    <meta name="twitter:image" content={ogImage} />
    <meta name="twitter:image:alt" content={SITE.ogImageAlt} />

    {@html '<script type="application/ld+json">' + JSON.stringify(jsonLd).replace(/</g, '\\u003c') + '<\/script>'}
</svelte:head>

<header class="header">
    <div class="header-inner container">
        <div class="branding">
            <a href="/" class="brand">Pankaj.me</a>
        </div>
        <ThemeToggle />
    </div>
</header>

<main class="main-container" id="main-content">
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
        <small>© {new Date().getFullYear()} Pankaj Kumar. Built with SvelteKit.</small>
    </div>
</footer>
