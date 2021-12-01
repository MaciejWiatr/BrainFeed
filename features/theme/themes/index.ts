const lightTheme = {
	primary: "red",
};

const darkTheme: typeof lightTheme = {
	primary: "blue",
};

type ThemeType = typeof lightTheme;

export { lightTheme, darkTheme, ThemeType };
