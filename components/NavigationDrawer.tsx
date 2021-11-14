import {
	DrawerContentComponentProps,
	DrawerContentScrollView,
	DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { Button, StyleSheet, TouchableOpacity, View, Text } from "react-native";

const NavigationDrawer = (props: DrawerContentComponentProps) => {
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
				<View style={styles.newFeedButton}>
					<Text style={styles.newFeedButtonText}>Add new feed</Text>
				</View>
			</TouchableOpacity>
		</DrawerContentScrollView>
	);
};

export default NavigationDrawer;

const styles = StyleSheet.create({
	newFeedButton: {
		backgroundColor: "black",
		borderRadius: 5,
		height: 50,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: 10,
		marginBottom: 10,
	},
	newFeedButtonText: {
		color: "white",
	},
});
