// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/eslint", "@nuxt/image", "@nuxtjs/tailwindcss"],
	devtools: { enabled: true },
	compatibilityDate: "2025-07-15",
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
					name: "InitiumDigital",
					content: "Software Solutions, Web Development, and tech consulting services for small businesses, located in Thorold, Ontario. Empowering businesses with custom web and software solutions.",
				}
			],
			link: [
				{
					rel: "icon",
					type: "image/x-icon",
					href: "/favicon.ico",
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
