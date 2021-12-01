import { useCallback } from "react";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import * as R from "ramda";

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
			return R.mergeRight(lightThemeStyles, darkThemeStyles);
		},
		[isDark]
	);

	/** Function that toggles between values based on isDark value */
	const t = useCallback(
		<T,>(lightVal: T, darkVal: T): T => {
			if (!isDark) return lightVal;
			return darkVal;
		},
		[isDark]
	);

	return { s, t };
};

export default useThemableStyles;
