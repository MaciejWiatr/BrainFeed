import React, { FC, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
	runOnJS,
	useAnimatedGestureHandler,
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from "react-native-reanimated";
import useTheme from "../store/useTheme";

interface IProps {
	image: string;
	title: string;
	description: string;
	uploadDate: Date;
}

const FeedCard: FC<IProps> = ({ image, title, description, uploadDate }) => {
	const { isDark } = useTheme();
	const maxHeight = useSharedValue(100);
	const maxCollapseIndicatorHeight = useSharedValue(0);
	const maxDescHeight = useSharedValue(100);
	const startingPosition = 0;
	const x = useSharedValue(startingPosition);
	const pressed = useSharedValue(false);
	const [collapsed, setCollapsed] = useState(false);
	const descInitialHeight = useSharedValue(0);

	const eventHandler = useAnimatedGestureHandler({
		onStart: (event, ctx) => {
			pressed.value = true;
		},
		onActive: (event, ctx) => {
			x.value = startingPosition + event.translationX;
		},
		onEnd: (event, ctx) => {
			if (event.translationX < -100) {
				maxHeight.value = withSpring(0, { overshootClamping: true });
				maxCollapseIndicatorHeight.value = withSpring(50);
				maxDescHeight.value = withSpring(0, {
					overshootClamping: true,
					damping: 1000,
					stiffness: 200,
				});
				runOnJS(setCollapsed)(true);
			} else {
				maxHeight.value = withSpring(100);
				maxCollapseIndicatorHeight.value = withSpring(0, {
					overshootClamping: true,
					damping: 100,
				});
				maxDescHeight.value = withSpring(descInitialHeight.value);
				runOnJS(setCollapsed)(false);
			}
			x.value = withSpring(startingPosition);
		},
	});

	const useSlidingAnimationStyles = useAnimatedStyle(() => {
		return {
			transform: [{ translateX: x.value }],
		};
	});

	const useCollapseStyle = useAnimatedStyle(() => {
		return {
			height: maxHeight.value,
		};
	});

	const useCollapseTextIndicatorStyle = useAnimatedStyle(() => {
		return {
			maxHeight: maxCollapseIndicatorHeight.value,
		};
	});

	const useDescriptionAnimatedStyles = useAnimatedStyle(() => {
		return {
			maxHeight: maxDescHeight.value,
		};
	});

	return (
		<PanGestureHandler
			onGestureEvent={eventHandler}
			activeOffsetX={[-15, 15]}
		>
			<Animated.View style={[styles.feedCard, useSlidingAnimationStyles]}>
				<Animated.Image
					style={[{ width: "100%", height: 100 }, useCollapseStyle]}
					source={{ uri: image }}
				/>
				<View style={styles.feedCardTextWrapper}>
					<Animated.Text
						style={[
							useCollapseTextIndicatorStyle,
							{ color: "#27ae60" },
						]}
					>
						Marked as read
					</Animated.Text>
					<Text style={styles.feedCardTitle}>{title}</Text>
					<Animated.Text
						onLayout={(evt) => {
							if (!descInitialHeight.value) {
								descInitialHeight.value =
									evt.nativeEvent.layout.height;
							}
						}}
						style={[
							styles.feedCardDesc,
							useDescriptionAnimatedStyles,
						]}
					>
						{description}
					</Animated.Text>
					<Text style={styles.feedCardDate}>
						{JSON.stringify(uploadDate)}
					</Text>
				</View>
			</Animated.View>
		</PanGestureHandler>
	);
};

export default FeedCard;

const styles = StyleSheet.create({
	feedCard: {
		backgroundColor: "white",
		marginVertical: 5,
		borderRadius: 10,
		width: 300,
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
	feedCardDesc: {
		overflow: "hidden",
	},
});
