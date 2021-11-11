import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Switch } from "react-native-gesture-handler";
import useTheme from "../store/useTheme";

const ThemeSwitch = () => {
	const { toggleTheme } = useTheme();
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => {
		setIsEnabled((previousState) => !previousState);
		toggleTheme();
	};

	return (
		<View style={styles.themeSwitch}>
			<Text style={styles.themeSwitchText}>🌻</Text>
			<Switch onValueChange={toggleSwitch} value={isEnabled} />
		</View>
	);
};

export default ThemeSwitch;

const styles = StyleSheet.create({
	themeSwitch: {
		paddingRight: 15,
		display: "flex",
		flexDirection: "row",
	},
	themeSwitchText: {
		marginRight: 5,
	},
});
