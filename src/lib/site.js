/** @type {readonly { href: string; label: string; icon: string }[]} */
export const SOCIAL_LINKS = [
	{ href: 'https://github.com/kmrpankaj', label: 'GitHub', icon: 'github' },
	{ href: 'https://x.com/impankajk', label: 'X (Twitter)', icon: 'x' },
	{ href: 'https://www.linkedin.com/in/impankajk/', label: 'LinkedIn', icon: 'linkedin' }
];

/** Production canonical base when PUBLIC_SITE_URL is unset at build time */
export const DEFAULT_SITE_URL = 'https://pankaj.me';

/** Google Analytics 4 measurement ID (override via PUBLIC_GA_MEASUREMENT_ID) */
export const GA_MEASUREMENT_ID = 'G-T9TSY68KVB';

export const SITE = {
	name: 'Pankaj.me',
	title: 'Pankaj Kumar | Web Developer',
	description:
		'Pankaj Kumar — web developer since 2011. JavaScript, PostgreSQL, UI/UX, and AI integrations for fast, functional web experiences.',
	locale: 'en_US',
	language: 'en',
	twitterSite: '@impankajk',
	ogImagePath: '/og.png',
	ogImageWidth: 1200,
	ogImageHeight: 630,
	ogImageAlt: 'Pankaj Kumar — Web Developer portfolio',
	keywords: [
		'Pankaj Kumar',
		'web developer',
		'JavaScript',
		'PostgreSQL',
		'UI/UX',
		'AI integrations',
		'portfolio',
		'SvelteKit'
	],
	knowsAbout: ['JavaScript', 'PostgreSQL', 'UI/UX', 'Artificial intelligence', 'Web development']
};

export const PERSON = {
	name: 'Pankaj Kumar',
	givenName: 'Pankaj',
	familyName: 'Kumar',
	jobTitle: 'Web Developer'
};

/**
 * @param {string | undefined} envUrl
 * @param {string | undefined} origin
 */
export function getSiteUrl(envUrl, origin) {
	const raw = (envUrl || origin || DEFAULT_SITE_URL).trim();
	return raw.replace(/\/$/, '');
}

/**
 * @param {string} siteUrl
 * @param {string} pathname
 */
export function getCanonicalUrl(siteUrl, pathname) {
	const path = pathname === '/' ? '/' : pathname.replace(/\/+$/, '') || '/';
	return path === '/' ? `${siteUrl}/` : `${siteUrl}${path}`;
}

/**
 * @param {string} siteUrl
 * @param {string} description
 * @param {string} canonicalUrl
 */
export function buildStructuredData(siteUrl, description, canonicalUrl) {
	const imageUrl = `${siteUrl}${SITE.ogImagePath}`;
	const personId = `${siteUrl}/#person`;
	const websiteId = `${siteUrl}/#website`;
	const webpageId = `${canonicalUrl}#webpage`;

	return {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebSite',
				'@id': websiteId,
				url: `${siteUrl}/`,
				name: SITE.name,
				description,
				inLanguage: SITE.language,
				publisher: { '@id': personId }
			},
			{
				'@type': 'ProfilePage',
				'@id': webpageId,
				url: canonicalUrl,
				name: SITE.title,
				description,
				inLanguage: SITE.language,
				isPartOf: { '@id': websiteId },
				about: { '@id': personId },
				mainEntity: { '@id': personId }
			},
			{
				'@type': 'Person',
				'@id': personId,
				name: PERSON.name,
				givenName: PERSON.givenName,
				familyName: PERSON.familyName,
				url: `${siteUrl}/`,
				jobTitle: PERSON.jobTitle,
				description,
				image: imageUrl,
				sameAs: SOCIAL_LINKS.map((s) => s.href),
				knowsAbout: SITE.knowsAbout
			}
		]
	};
}
