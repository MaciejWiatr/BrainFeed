import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-community/picker";

const SettingsScreen = () => {
	const [selectedLanguage, setSelectedLanguage] = useState();
	return (
		<ScrollView contentContainerStyle={styles.settingsContainer}>
			<View style={styles.settingCard}>
				<View style={styles.settingTextContainer}>
					<Text style={styles.settingTitle}>Speed mode</Text>
					<Text style={styles.settingDesc}>
						Disable blur and some of the animations to speed-up
						application
					</Text>
				</View>
				<View style={styles.settingActionContainer}>
					<Picker
						selectedValue={selectedLanguage}
						onValueChange={(itemValue, itemIndex) =>
							setSelectedLanguage(itemValue)
						}
					>
						<Picker.Item label="Java" value="java" />
						<Picker.Item label="JavaScript" value="js" />
					</Picker>
				</View>
			</View>
		</ScrollView>
	);
};

const darkStyles = StyleSheet.create({
	settingsCard: {
		backgroundColor: "#303030",
	},
});

const styles = StyleSheet.create({
	settingsContainer: {
		padding: 15,
	},
	settingCard: {
		display: "flex",
		flexDirection: "row",
		backgroundColor: "white",
		borderRadius: 15,
		padding: 15,
		elevation: 1,
	},
	settingTextContainer: {
		width: "50%",
	},
	settingTitle: {
		fontSize: 16,
	},
	settingDesc: {
		fontSize: 12,
		color: "gray",
		marginTop: 3,
	},
	settingActionContainer: {
		width: "50%",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
	settingSwitch: {
		backgroundColor: "#eeeeee",
		borderRadius: 10,
		overflow: "hidden",
	},
	settingSwitchText: {
		fontSize: 14,
		color: "black",
	},
});

export default SettingsScreen;
