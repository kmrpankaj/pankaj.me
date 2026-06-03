import { PUBLIC_SITE_URL } from '$env/static/public';
import { DEFAULT_SITE_URL } from '$lib/site.js';

const siteUrl = (PUBLIC_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, '');

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

/** @type {import('./$types').RequestHandler} */
export function GET() {
	return new Response(robots, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Cache-Control': 'public, max-age=3600'
		}
	});
}

export const prerender = true;
