// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/eslint", "@nuxt/image"],
	devtools: { enabled: true },
	app: {
		head: {
			title: "InitiumDigital",
			htmlAttrs: {
				lang: "en",
			},
			meta: [
				{
					charset: "utf-8",
				},
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1, maximum-scale=1",
				},
				{
					name: "Description",
					content: "Software Solutions, Web Development, and tech consulting services for small businesses, located in Thorold, Ontario. Empowering businesses with custom web and software solutions.",
				},
				{
					name: "keywords",
					content: "SaaS development, Web development, Software Development, Thorold Ontario, Freelance developer",
				},
			],
			link: [
				{
					rel: "icon",
					type: "image/x-icon",
					href: "/favicon.ico",
				},
			],
			script: [
				{
					src: "https://initiumanalytics-production.up.railway.app/analytics.js",
					type: "text/javascript",
					async: true,
				},
			],
		},
	},
	router: {
		options: {
			linkActiveClass: "active",
			scrollBehaviorType: "smooth",
		},
	},
	compatibilityDate: "2025-07-15",
	nitro: {
		prerender: {
			routes: ["/", "/contact"],
		},
	},
	eslint: {
		config: {
			stylistic: {
				semi: true,
				quotes: "double",
				commaDangle: "always-multiline",
				indent: "tab",
			},
		},
	},
});
