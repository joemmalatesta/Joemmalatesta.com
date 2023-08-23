/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						a: {
							color: "#818cf8",
							"&:hover": {
								color: "#6366f1",
							},
						},
					},
				},
				quoteless: {
					css: {
						"blockquote p:first-of-type::before": { content: "none" },
						"blockquote p:first-of-type::after": { content: "none" },
						pre: {
							backgroundColor: "#171717",
							color: "#ffffff",
						},
						code: {
							backgroundColor: "#0d1117",
							color: "#ffffff",
							fontWeight: "400",
							"border-radius": "0.25rem",
						},
						"code::before": {
							content: '""',
							"padding-left": "0.25rem",
						},
						"code::after": {
							content: '""',
							"padding-right": "0.25rem",
						},
					},
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
