import { PUBLIC_GA_MEASUREMENT_ID } from '$env/static/public';
import { GA_MEASUREMENT_ID } from '$lib/site.js';

const measurementId = PUBLIC_GA_MEASUREMENT_ID || GA_MEASUREMENT_ID;

/**
 * @param {string} pagePath
 */
export function trackPageView(pagePath) {
	if (!measurementId || typeof window === 'undefined') return;
	const gtag = window.gtag;
	if (typeof gtag !== 'function') return;
	gtag('config', measurementId, { page_path: pagePath });
}
