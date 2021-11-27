import React, { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

const Notification = ({ children }: { children: ReactNode }) => {
	return (
		<View style={styles.container}>
			<View style={styles.bubble}>
				<Text style={styles.bubbleText}>{children}</Text>
			</View>
		</View>
	);
};

export default Notification;

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		width: "100%",
		top: 0,
		left: 0,
		zIndex: 10,
		display: "flex",
		justifyContent: "center",
		flexDirection: "row",
		paddingTop: 10,
	},
	bubble: {
		backgroundColor: "#2ecc71",
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 1000,
	},
	bubbleText: {
		color: "white",
	},
});
