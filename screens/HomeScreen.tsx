import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import FeedCard from "../components/FeedCard";
import FeedForm from "../components/FeedForm";
import { NotificationWrapper } from "../features/notifications";
import useFeedItems from "../store/useFeedItems";
import useTheme from "../store/useTheme";
import useThemableStyles from "../utils/useThemableStyles";

export default function HomeScreen() {
	const { isDark } = useTheme();
	const { items } = useFeedItems();
	const { s } = useThemableStyles(isDark);
	return (
		<View style={styles.container}>
			<NotificationWrapper>
				<FlatList
					style={s(styles.feedList, darkStyles.feedList)}
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
			</NotificationWrapper>
		</View>
	);
}

const darkStyles = StyleSheet.create({
	feedList: {
		backgroundColor: "#202020",
	},
});

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
