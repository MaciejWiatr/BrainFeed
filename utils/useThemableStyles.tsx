import { useCallback } from "react";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";

type Styles<T> = ViewStyle | TextStyle | ImageStyle;

const useThemableStyles = (isDark: boolean) => {
	const s = useCallback(
		<T extends Styles<T> | Styles<any>>(
			lightThemeStyles: T | Styles<T>,
			darkThemeStyles?: T | Styles<T>,
			override?: boolean
		): T | Styles<T> => {
			if (!isDark || !darkThemeStyles) return lightThemeStyles;
			if (override) return darkThemeStyles;
			return { ...lightThemeStyles, ...darkThemeStyles };
		},
		[isDark]
	);

	const t = useCallback(
		<T,>(firstVal: T, secondVal: T): T => {
			if (!isDark) return firstVal;
			return secondVal;
		},
		[isDark]
	);

	return { s, t };
};

export default useThemableStyles;
