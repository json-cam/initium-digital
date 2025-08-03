// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/eslint", "@nuxt/image", "@nuxtjs/tailwindcss"],
	devtools: { enabled: true },
	compatibilityDate: "2025-07-15",
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
