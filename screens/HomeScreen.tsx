import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import FeedCard from "../components/FeedCard";
import FeedForm from "../components/FeedForm";

const fakeUrls = [
	{
		id: 1,
		image: "http://placeimg.com/640/480/tech",
		title: "Direct Operations Facilitator",
		description:
			"Ergonomic executive chair upholstered in bonded black leather and",
		uploadDate: new Date(),
	},
	{
		id: 2,
		image: "http://placeimg.com/640/480/tech",
		title: "Direct Operations Facilitator",
		description:
			"Ergonomic executive chair upholstered in bonded black leather and",
		uploadDate: new Date(),
	},
	{
		id: 3,
		image: "http://placeimg.com/640/480/tech",
		title: "Direct Operations Facilitator",
		description:
			"Ergonomic executive chair upholstered in bonded black leather and",
		uploadDate: new Date(),
	},
	{
		id: 4,
		image: "http://placeimg.com/640/480/tech",
		title: "Direct Operations Facilitator",
		description:
			"Ergonomic executive chair upholstered in bonded black leather and",
		uploadDate: new Date(),
	},
	{
		id: 5,
		image: "http://placeimg.com/640/480/tech",
		title: "Direct Operations Facilitator",
		description:
			"Ergonomic executive chair upholstered in bonded black leather and",
		uploadDate: new Date(),
	},
];

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<ScrollView
				style={{ width: "100%" }}
				contentContainerStyle={styles.scrollList}
			>
				{fakeUrls.map(
					({ image, title, description, id, uploadDate }) => (
						<FeedCard
							key={id}
							image={image}
							title={title}
							description={description}
							uploadDate={uploadDate}
						/>
					)
				)}
			</ScrollView>
			<FeedForm />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#eeeeee",
		alignItems: "center",
		justifyContent: "center",
	},
	scrollList: {
		paddingVertical: 5,
		width: "100%",
		alignItems: "flex-end",
		flexDirection: "column-reverse",
		paddingHorizontal: 15,
		paddingBottom: 90,
	},
});
