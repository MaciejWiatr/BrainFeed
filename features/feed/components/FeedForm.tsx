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
import {
	darkTheme,
	lightTheme,
	useThemableStyles,
	useTheme,
} from "@features/theme";
import * as Clipboard from "expo-clipboard";
import { useNotifications } from "@features/notifications";
import { useMutation, useQueryClient } from "react-query";
import { uploadLink } from "../api";
import feedFormSchema from "../validators/feedform.validator";

const FeedForm = () => {
	const notify = useNotifications();
	const { addItem } = useFeedItems();
	const { isDark } = useTheme();
	const { s, t } = useThemableStyles(isDark);
	const [initialUrlValue, setInitialUrlValue] = useState("");
	const queryClient = useQueryClient();
	const { mutate } = useMutation((url: string) => uploadLink(url), {
		onSuccess: () => {
			queryClient.invalidateQueries("feed");
		},
		onError: () => {
			notify({ message: "Error uploading link", type: "error" });
		},
	});

	useEffect(() => {
		const checkClipboardContainsUrl = async () => {
			try {
				const clip = await Clipboard.getStringAsync();
				if (!clip.includes("http")) return;
				setInitialUrlValue(clip);
				notify({
					message: "URL was copied from clipboard",
					type: "success",
				});
			} catch (e) {
				console.log("e");
			}
		};
		checkClipboardContainsUrl();
	}, []);

	return (
		<View style={styles.formContainer}>
			<Formik
				validateOnBlur={false}
				validateOnChange={false}
				enableReinitialize
				initialValues={{ url: initialUrlValue }}
				validationSchema={feedFormSchema}
				onSubmit={(values, { resetForm }) => {
					mutate(values.url.trim());
					notify({ message: "Link was added", type: "success" });
					setInitialUrlValue("");
					resetForm();
				}}
			>
				{({
					handleChange,
					handleBlur,
					handleSubmit,
					values,
					errors,
					touched,
				}) => (
					<>
						{errors.url && (
							<View style={styles.errorContainer}>
								<Text style={styles.errorText}>
									{errors.url}
								</Text>
							</View>
						)}

						<View
							style={s(
								styles.blurWrapper,
								darkStyles.blurWrapper
							)}
						>
							<View style={styles.formWrapper}>
								<TextInput
									placeholder={
										errors.url
											? errors.url
											: "Some fancy url ✨"
									}
									onChangeText={handleChange("url")}
									onBlur={handleBlur("url")}
									value={values.url}
									placeholderTextColor={
										errors.url
											? "#d35400"
											: t("gray", "#909090")
									}
									style={[
										s(
											styles.formInput,
											darkStyles.formInput
										),
										errors.url && touched.url
											? { borderColor: "#d35400" }
											: {},
									]}
								/>
								<TouchableOpacity
									style={s(
										styles.formButton,
										darkStyles.formButton
									)}
									onPress={() => handleSubmit()}
								>
									<Text
										style={s(
											styles.formButtonText,
											darkStyles.formButtonText
										)}
									>
										Send
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</>
				)}
			</Formik>
		</View>
	);
};

export default FeedForm;

const darkStyles = StyleSheet.create({
	formButton: {
		backgroundColor: "white",
	},
	formButtonText: {
		color: "black",
	},
	formInput: {
		color: "white",
		borderColor: "#909090",
		backgroundColor: "rgba(0,0,0,0)",
	},
	blurWrapper: {
		backgroundColor: darkTheme.cardBgColor,
		borderWidth: 0,
	},
});

const styles = StyleSheet.create({
	errorContainer: {
		position: "absolute",
		top: -25,
		backgroundColor: "#e74c3c",
		width: "100%",
		height: 50,
		display: "flex",
		flexDirection: "row",
		paddingTop: 5,
		justifyContent: "center",
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
	},
	errorText: {
		color: "white",
		fontWeight: "bold",
		fontSize: 12,
	},
	formContainer: {
		width: "100%",
		position: "absolute",
		// overflow: "hidden",
		minHeight: 80,
		bottom: 0,
	},
	formBlur: {
		overflow: "hidden",
		position: "absolute",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
	blurWrapper: {
		position: "relative",
		overflow: "hidden",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		backgroundColor: lightTheme.cardBgColor,
		borderColor: "#dddddd",
		borderWidth: 0.8,
		borderBottomWidth: 0,
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
		color: "black",
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
