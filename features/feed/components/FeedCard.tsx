import React, { FC, useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
	runOnJS,
	useAnimatedGestureHandler,
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from "react-native-reanimated";
import {
	useThemableStyles,
	useTheme,
	lightTheme,
	darkTheme,
} from "@features/theme";
import { useMutation, useQueryClient } from "react-query";
import { markAsRead } from "../api";
import { FeedItemResp } from "../types/FeedItemResp";

interface IProps {
	id: string;
	image: string;
	title: string;
	description: string;
	uploadDate: Date;
	read: boolean;
}

const FeedCard: FC<IProps> = ({
	image,
	title,
	description,
	uploadDate,
	read,
	id,
}) => {
	const { isDark } = useTheme();
	const { s } = useThemableStyles(isDark);
	const maxHeight = useSharedValue(100);
	const maxCollapseIndicatorHeight = useSharedValue(0);
	const maxDescHeight = useSharedValue(100);
	const startingPosition = 0;
	const x = useSharedValue(startingPosition);
	const pressed = useSharedValue(false);
	const [collapsed, setCollapsed] = useState(read);
	const descInitialHeight = useSharedValue(0);
	const queryClient = useQueryClient();
	const { mutateAsync } = useMutation<FeedItemResp[]>(markAsRead, {
		onMutate: async (id) => {
			await queryClient.cancelQueries("feed");
			const previousFeed =
				queryClient.getQueryData<FeedItemResp[]>("feed");

			return { previousFeed };
		},
		onError: (
			err,
			newTodo,
			context: { previousFeed: FeedItemResp[]; [name: string]: unknown }
		) => {
			queryClient.setQueryData("feed", context.previousFeed);
		},
	});

	useEffect(() => {
		if (collapsed) {
			maxHeight.value = 0;
			maxCollapseIndicatorHeight.value = 50;
			maxDescHeight.value = 0;
		} else {
			maxHeight.value = 100;
			maxCollapseIndicatorHeight.value = 0;
			maxDescHeight.value = descInitialHeight.value;
		}
	}, []);

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
				runOnJS(mutateAsync)(id);
			} else {
				maxHeight.value = withSpring(100);
				maxCollapseIndicatorHeight.value = withSpring(0, {
					overshootClamping: true,
					damping: 100,
				});
				maxDescHeight.value = withSpring(descInitialHeight.value);
				runOnJS(setCollapsed)(false);
				runOnJS(mutateAsync)(id);
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
			<Animated.View
				style={[
					s(styles.feedCard, darkStyles.feedCard),
					useSlidingAnimationStyles,
				]}
			>
				<Animated.Image
					style={[{ width: "100%", height: 100 }, useCollapseStyle]}
					source={{
						uri:
							image ||
							"https://zwierzetarnia.pl/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png",
					}}
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
					<Text
						style={s(
							styles.feedCardTitle,
							darkStyles.feedCardTitle
						)}
					>
						{title}
					</Text>
					<Animated.Text
						onLayout={(evt) => {
							if (!descInitialHeight.value) {
								descInitialHeight.value =
									evt.nativeEvent.layout.height;
							}
						}}
						style={[
							s(styles.feedCardDesc, darkStyles.feedCardDesc),
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

const darkStyles = StyleSheet.create({
	feedCard: {
		backgroundColor: darkTheme.cardBgColor,
	},
	feedCardTitle: {
		color: darkTheme.textColorPrimary,
	},
	feedCardDesc: {
		color: "gray",
	},
});

const styles = StyleSheet.create({
	feedCard: {
		backgroundColor: lightTheme.cardBgColor,
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
		color: lightTheme.textColorPrimary,
		fontSize: 15,
		fontWeight: "bold",
	},
	feedCardDate: {
		marginTop: 5,
		fontSize: 10,
		color: lightTheme.textColorSecondary,
	},
	feedCardDesc: {
		color: lightTheme.textColorSecondary,
		overflow: "hidden",
	},
});
