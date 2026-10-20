import type { APIRoute } from 'astro';

const pages = ['/', '/privacy-policy'];

export const GET: APIRoute = ({ site }) => {
	const baseUrl = site ?? new URL('https://plombera.vercel.app');
	const urls = pages
		.map((page) => `<url><loc>${new URL(page, baseUrl)}</loc></url>`)
		.join('');

	return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' },
	});
};
