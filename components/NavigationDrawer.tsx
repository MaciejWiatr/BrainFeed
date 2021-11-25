import {
	DrawerContentComponentProps,
	DrawerContentScrollView,
	DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { Button, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import useTheme from "../store/useTheme";
import useThemableStyles from "../utils/useThemableStyles";

const NavigationDrawer = (props: DrawerContentComponentProps) => {
	const { isDark } = useTheme();
	const { s } = useThemableStyles(isDark);

	return (
		<DrawerContentScrollView
			{...props}
			contentContainerStyle={{
				height: "100%",
				display: "flex",
				justifyContent: "space-between",
			}}
		>
			<DrawerItemList {...props} />
			<TouchableOpacity>
				<View style={s(styles.newFeedButton, darkStyles.newFeedButton)}>
					<Text
						style={s(
							styles.newFeedButtonText,
							darkStyles.newFeedButtonText
						)}
					>
						Add new feed
					</Text>
				</View>
			</TouchableOpacity>
		</DrawerContentScrollView>
	);
};

export default NavigationDrawer;

const darkStyles = StyleSheet.create({
	newFeedButton: {
		backgroundColor: "white",
	},
	newFeedButtonText: {
		color: "black",
	},
});

const styles = StyleSheet.create({
	newFeedButton: {
		backgroundColor: "black",
		borderRadius: 5,
		height: 50,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: 10,
		marginBottom: 15,
	},
	newFeedButtonText: {
		color: "white",
	},
});
