const isProd = process.env.EXPO_PROD === "true" ? true : false;

module.exports = {
	expo: {
		name: isProd ? "brainfeed" : "brainfeed_dev",
		slug: isProd ? "brainfeed" : "brainfeed_dev",
		version: "1.0.0",
		orientation: "portrait",
		icon: "./assets/icon.png",
		splash: {
			image: "./assets/splash.png",
			resizeMode: "contain",
			backgroundColor: "#ffffff",
		},
		updates: {
			fallbackToCacheTimeout: 0,
		},
		assetBundlePatterns: ["**/*"],
		ios: {
			supportsTablet: true,
			bundleIdentifier: isProd
				? "com.maciejwiatr.brainfeed"
				: "com.maciejwiatr.dev.brainfeed",
		},
		android: {
			adaptiveIcon: {
				foregroundImage: "./assets/adaptive-icon.png",
				backgroundColor: "#FFFFFF",
			},
			package: isProd
				? "com.maciejwiatr.brainfeed"
				: "com.maciejwiatr.dev.brainfeed",
		},
		web: {
			favicon: "./assets/favicon.png",
		},
	},
};
