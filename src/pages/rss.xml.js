import rss from '@astrojs/rss';

export const get = () =>
	rss({
		title: "Joe Malatesta",
		description: "Personal blog for Joe Malatesta",
		site: import.meta.env.SITE,
		items: import.meta.glob('./blog/**/*.{md,mdx}'),
	});
