import React, { ReactNode, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
	useAnimatedReaction,
	useAnimatedStyle,
	useCode,
	useSharedValue,
	withSpring,
} from "react-native-reanimated";

const Notification = ({ children }: { children: ReactNode }) => {
	const y = useSharedValue(-100);

	useEffect(() => {
		y.value = withSpring(0);
	}, []);

	const bubbleAnimatedStyle = useAnimatedStyle(() => ({
		transform: [{ translateY: y.value }],
	}));

	return (
		<Animated.View style={styles.container}>
			<Animated.View style={[styles.bubble, bubbleAnimatedStyle]}>
				<Text style={styles.bubbleText}>{children}</Text>
			</Animated.View>
		</Animated.View>
	);
};

export default Notification;

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		width: "100%",
		top: 0,
		left: 0,
		zIndex: 10,
		display: "flex",
		justifyContent: "center",
		flexDirection: "row",
		paddingTop: 10,
		elevation: 10,
	},
	bubble: {
		backgroundColor: "#2ecc71",
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 1000,
	},
	bubbleText: {
		color: "white",
	},
});
