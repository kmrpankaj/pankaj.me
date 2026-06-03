import { PUBLIC_SITE_URL } from '$env/static/public';
import { DEFAULT_SITE_URL } from '$lib/site.js';

const siteUrl = (PUBLIC_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, '');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

/** @type {import('./$types').RequestHandler} */
export function GET() {
	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600'
		}
	});
}

export const prerender = true;
