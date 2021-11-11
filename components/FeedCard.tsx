import React, { FC } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import useTheme from "../store/useTheme";

interface IProps {
	image: string;
	title: string;
	description: string;
	uploadDate: Date;
}

const FeedCard: FC<IProps> = ({ image, title, description, uploadDate }) => {
	return (
		<View style={styles.feedCard}>
			<Image
				style={{ width: "100%", height: 100 }}
				source={{ uri: image }}
			/>
			<View style={styles.feedCardTextWrapper}>
				<Text style={styles.feedCardTitle}>{title}</Text>
				<Text style={styles.feedCardDesc}>{description}</Text>
				<Text style={styles.feedCardDate}>
					{uploadDate.toDateString()}
				</Text>
			</View>
		</View>
	);
};

export default FeedCard;

const styles = StyleSheet.create({
	feedCard: {
		backgroundColor: "white",
		marginVertical: 5,
		borderRadius: 10,
		width: "75%",
		maxWidth: 350,
		overflow: "hidden",
		elevation: 1,
	},
	feedCardTextWrapper: {
		padding: 15,
	},
	feedCardTitle: {
		fontSize: 15,
		fontWeight: "bold",
	},
	feedCardDate: {
		marginTop: 5,
		fontSize: 10,
		color: "gray",
	},
	feedCardDesc: {},
});
