import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { HStack, Select, Text, VStack, ScrollView } from "native-base";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "@features/theme";

const SettingsScreen = () => {
	let [service, setService] = useState("true");
	const { isDark } = useTheme();

	return (
		<ScrollView
			contentContainerStyle={styles.settingsContainer}
			bg="gray.200"
			_dark={{ bg: "gray.800" }}
		>
			<HStack
				p="5"
				bgColor="white"
				borderRadius="12"
				mt="2"
				mb="2"
				_dark={{ bg: "gray.700" }}
			>
				<VStack w="60%">
					<Text fontSize="md">Speed mode</Text>
					<Text fontSize="xs" color="gray.400">
						Disable blur and some of the animations to speed-up
						application
					</Text>
				</VStack>
				<VStack w="40%" justifyContent="center">
					<Select
						selectedValue={service}
						accessibilityLabel="Choose Service"
						_selectedItem={{
							endIcon: (
								<Feather
									name="check-circle"
									size={18}
									color={isDark ? "white" : "black"}
								/>
							),
						}}
						mt={1}
						onValueChange={(itemValue) => setService(itemValue)}
					>
						<Select.Item label="Enabled" value="true" />
						<Select.Item label="Disabled" value="false" />
					</Select>
				</VStack>
			</HStack>
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
