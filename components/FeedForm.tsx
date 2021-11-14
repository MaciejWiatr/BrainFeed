import { BlurView } from "@react-native-community/blur";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import useFeedItems from "../store/useFeedItems";
import * as Clipboard from "expo-clipboard";

const FeedForm = () => {
	const { addItem } = useFeedItems();
	const [initialUrlValue, setInitialUrlValue] = useState("");

	// TODO: Waiting for expo to fix clipboard issue
	// useEffect(() => {
	// 	const checkIfClipboardContainsUrl = async () => {
	// 		const clipboardText = await Clipboard.getStringAsync();
	// 		console.log(clipboardText);
	// 	};
	// 	checkIfClipboardContainsUrl();
	// }, []);

	return (
		<View style={styles.formContainer}>
			<Formik
				initialValues={{ url: "" }}
				onSubmit={(values) =>
					addItem({
						id: Math.floor(Math.random() * 20000),
						description: "bonjour meine friend",
						title: values.url,
						image: "https://placeimg.com/640/480/tech",
						uploadDate: new Date(),
					})
				}
			>
				{({ handleChange, handleBlur, handleSubmit, values }) => (
					<View
						style={{
							position: "relative",
							overflow: "hidden",
							borderTopLeftRadius: 10,
							borderTopRightRadius: 10,
							borderColor: "#dddddd",
							borderWidth: 0.8,
							borderBottomWidth: 0,
						}}
					>
						<BlurView
							blurType="xlight"
							blurAmount={80}
							style={styles.formBlur}
							reducedTransparencyFallbackColor="white"
						/>
						<View style={styles.formWrapper}>
							<TextInput
								placeholder="Some fancy url ✨"
								onChangeText={handleChange("url")}
								onBlur={handleBlur("url")}
								value={values.url}
								style={styles.formInput}
							/>
							<TouchableOpacity
								style={styles.formButton}
								onPress={() => handleSubmit()}
							>
								<Text style={styles.formButtonText}>Send</Text>
							</TouchableOpacity>
						</View>
					</View>
				)}
			</Formik>
		</View>
	);
};

export default FeedForm;

const styles = StyleSheet.create({
	formContainer: {
		width: "100%",
		position: "absolute",
		overflow: "hidden",
		height: 80,
		bottom: 0,
		// paddingHorizontal: 15,
	},
	formBlur: {
		overflow: "hidden",
		position: "absolute",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
	formWrapper: {
		padding: 15,
		paddingHorizontal: 15,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		height: "100%",
		elevation: 2,
	},
	formInput: {
		width: "77%",
		height: "100%",
		borderRadius: 10,
		paddingHorizontal: 20,
		backgroundColor: "white",
		borderWidth: 0.5,
		borderColor: "#cccccc",
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
