import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import FeedCard from "../components/FeedCard";
import FeedForm from "../components/FeedForm";
import { NotificationWrapper } from "../../notifications";
import useFeedItems from "../store/useFeedItems";
import {
	darkTheme,
	lightTheme,
	useThemableStyles,
	useTheme,
} from "@features/theme";
import { useQuery } from "react-query";
import { fetchFeed } from "../api";
import { FeedItemResp } from "../types/FeedItemResp";

export default function FeedScreen() {
	const { isDark } = useTheme();
	const { s } = useThemableStyles(isDark);
	const { data, isFetched } = useQuery("feed", fetchFeed);

	return (
		<View style={styles.container}>
			<NotificationWrapper>
				{isFetched && (
					<FlatList
						style={s(styles.feedList, darkStyles.feedList)}
						contentContainerStyle={styles.feedListContent}
						initialNumToRender={5}
						data={data}
						keyExtractor={(item) => item._id.toString()}
						renderItem={({ item }) => (
							<FeedCard
								id={item._id}
								image={item.imageUrl}
								title={item.title}
								description={item.description}
								uploadDate={new Date("2002-02-10")}
								read={item.read}
							/>
						)}
						inverted
					></FlatList>
				)}
				<FeedForm />
			</NotificationWrapper>
		</View>
	);
}

const darkStyles = StyleSheet.create({
	feedList: {
		backgroundColor: darkTheme.backgroundColor,
	},
});

const styles = StyleSheet.create({
	container: {
		position: "relative",
		flex: 1,
		backgroundColor: lightTheme.backgroundColor,
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
