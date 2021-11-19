import axios from "axios";
import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import FeedCard from "../components/FeedCard";
import FeedForm from "../components/FeedForm";
import useFeedItems from "../store/useFeedItems";
import useTheme from "../store/useTheme";

const fakeUrls = [
	{
		id: 1,
		image: "http://placeimg.com/640/480/tech",
		title: "Direct Operations Facilitator 1",
		description:
			"Ergonomic executive chair upholstered in bonded black leather and",
		uploadDate: new Date(),
	},
	{
		id: 2,
		image: "http://placeimg.com/640/480/tech",
		title: "Direct Operations Facilitator 2",
		description:
			"Ergonomic executive chair upholstered in bonded black leather and",
		uploadDate: new Date(),
	},
	{
		id: 3,
		image: "http://placeimg.com/640/480/tech",
		title: "Direct Operations Facilitator 3",
		description:
			"Ergonomic executive chair upholstered in bonded black leather and",
		uploadDate: new Date(),
	},
	{
		id: 4,
		image: "http://placeimg.com/640/480/tech",
		title: "Direct Operations Facilitator 4",
		description:
			"Ergonomic executive chair upholstered in bonded black leather and",
		uploadDate: new Date(),
	},
	{
		id: 5,
		image: "http://placeimg.com/640/480/tech",
		title: "Direct Operations Facilitator 5",
		description:
			"Ergonomic executive chair upholstered in bonded black leather and",
		uploadDate: new Date(),
	},
];

export default function HomeScreen() {
	const { isDark } = useTheme();
	const { items } = useFeedItems();
	return (
		<View style={styles.container}>
			<FlatList
				style={styles.feedList}
				contentContainerStyle={styles.feedListContent}
				data={items}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<FeedCard
						key={item.id}
						image={item.image}
						title={item.title}
						description={item.description}
						uploadDate={item.uploadDate}
					/>
				)}
				inverted
			></FlatList>
			<FeedForm />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		position: "relative",
		flex: 1,
		backgroundColor: "#eeeeee",
		alignItems: "center",
		justifyContent: "center",
	},
	feedList: {
		width: "100%",
	},
	feedListContent: {
		width: "100%",
		display: "flex",
		alignItems: "flex-end",
		paddingHorizontal: 15,
		paddingVertical: 5,
		paddingTop: 90,
	},
	scrollList: {
		paddingVertical: 5,
		height: "100%",
		width: "100%",
		alignItems: "flex-end",
		flexDirection: "column-reverse",
		paddingHorizontal: 15,
		paddingBottom: 90,
	},
});
