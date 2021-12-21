const lightTheme = {
	backgroundColor: "#eeeeee",
	cardBgColor: "white",
	textColorPrimary: "black",
	textColorSecondary: "gray",
	accentColor: "#27ae60",
};

const darkTheme: typeof lightTheme = {
	backgroundColor: "#202020",
	cardBgColor: "#303030",
	textColorPrimary: "#eeeeee",
	textColorSecondary: "gray",
	accentColor: "#27ae60",
};

type ThemeType = typeof lightTheme;

export { lightTheme, darkTheme, ThemeType };
