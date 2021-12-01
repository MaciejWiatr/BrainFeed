import React from "react";
import {
	StyleSheet,
	TouchableNativeFeedback,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import useTheme from "../store/useTheme";
import { useThemableStyles } from "../features/theme/";
import { useNavigation, DrawerActions } from "@react-navigation/core";

const DrawerButton = () => {
	const { isDark } = useTheme();
	const { t } = useThemableStyles(isDark);
	const navigation = useNavigation();

	const handleToggle = () => {
		navigation.dispatch(DrawerActions.toggleDrawer());
	};

	return (
		<TouchableNativeFeedback
			onPress={handleToggle}
			style={{ borderRadius: 10, overflow: "hidden" }}
		>
			<View style={styles.iconContainer}>
				<Feather name="menu" size={24} color={t("black", "white")} />
			</View>
		</TouchableNativeFeedback>
	);
};
const styles = StyleSheet.create({
	iconContainer: {
		marginLeft: 10,
		padding: 10,
		borderRadius: 10,
		overflow: "hidden",
	},
});

export default DrawerButton;
