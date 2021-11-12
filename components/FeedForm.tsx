import React from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";

const FeedForm = () => {
	return (
		<View style={styles.formContainer}>
			<View style={styles.formWrapper}>
				<TextInput
					placeholder="Some fancy url ✨"
					style={styles.formInput}
				/>
				<TouchableOpacity style={styles.formButton}>
					<Text style={styles.formButtonText}>Send</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default FeedForm;

const styles = StyleSheet.create({
	formContainer: {
		width: "100%",
		position: "absolute",
		bottom: 10,
		paddingHorizontal: 15,
		overflow: "hidden",
		height: 75,
	},
	formWrapper: {
		borderRadius: 10,
		borderWidth: 0.5,
		borderColor: "lightgray",
		padding: 15,
		paddingHorizontal: 15,
		backgroundColor: "rgba(255,255,255,0.9)",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		height: "100%",
	},
	formInput: {
		width: "77%",
		height: "100%",
		borderRadius: 5,
		paddingHorizontal: 20,
		backgroundColor: "#eeeeee",
	},
	formButton: {
		width: "20%",
		backgroundColor: "black",
		borderRadius: 5,
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
