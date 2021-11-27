import {
	DrawerContentComponentProps,
	DrawerContentScrollView,
	DrawerItemList,
	DrawerItem,
} from "@react-navigation/drawer";
import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import useTheme from "../store/useTheme";
import { useTheme as useRNTheme } from "@react-navigation/native";
import useThemableStyles from "../utils/useThemableStyles";
import { Ionicons } from "@expo/vector-icons";

const NavigationDrawer = (props: DrawerContentComponentProps) => {
	const { isDark } = useTheme();
	const { colors } = useRNTheme();
	const { s } = useThemableStyles(isDark);

	return (
		<DrawerContentScrollView
			{...props}
			contentContainerStyle={{
				height: "100%",
				display: "flex",
			}}
		>
			<DrawerItemList {...props} />
			<View style={{ flex: 1 }}></View>
			<DrawerItem
				labelStyle={{ color: colors.text }}
				icon={() => (
					<Ionicons name="settings-outline" size={24} color="gray" />
				)}
				label="Settings"
				to="Settings"
				onPress={() => props.navigation.navigate("Settings")}
			/>
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
