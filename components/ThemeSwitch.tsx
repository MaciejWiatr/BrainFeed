import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Switch, useColorMode } from "native-base";
import useTheme from "../store/useTheme";

const ThemeSwitch = () => {
	const { toggleTheme, isDark } = useTheme();
	const { toggleColorMode, colorMode } = useColorMode();
	return (
		<View style={styles.themeSwitch}>
			<Text style={styles.themeSwitchText}>{isDark ? "🌙" : "🌻"}</Text>
			<Switch
				onToggle={() => {
					toggleTheme();
					toggleColorMode();
					console.log(colorMode);
				}}
				isChecked={isDark}
			/>
		</View>
	);
};

export default ThemeSwitch;

const styles = StyleSheet.create({
	themeSwitch: {
		paddingRight: 15,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	themeSwitchText: {
		marginRight: 5,
	},
});
