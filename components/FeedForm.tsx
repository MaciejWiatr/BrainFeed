import { BlurView } from "@react-native-community/blur";
import React from "react";
import {
	Button,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";

const FeedForm = () => {
	return (
		<View style={styles.formContainer}>
			<TextInput
				placeholder="Some fancy url ✨"
				style={styles.formInput}
			/>
			<TouchableOpacity style={styles.formButton}>
				<Text style={styles.formButtonText}>Send</Text>
			</TouchableOpacity>
		</View>
	);
};

export default FeedForm;

const styles = StyleSheet.create({
	formContainer: {
		position: "absolute",
		bottom: 10,
		marginHorizontal: 10,
		overflow: "hidden",
		backgroundColor: "rgba(255,255,255,0.9)",
		height: 75,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		padding: 15,
		paddingHorizontal: 15,
		justifyContent: "space-between",
		borderRadius: 10,
	},
	formInput: {
		width: "77%",
		height: "100%",
		borderRadius: 10,
		paddingHorizontal: 20,
		backgroundColor: "#eeeeee",
	},
	formButton: {
		width: "20%",
		backgroundColor: "black",
		borderRadius: 10,
		height: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	formButtonText: {
		color: "white",
		textAlign: "center",
	},
});
