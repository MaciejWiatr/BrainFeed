import { renderHook } from "@testing-library/react-hooks";
import { StyleSheet } from "react-native";
import useThemableStyles from "./useThemableStyles";

const exampleLightStyles = StyleSheet.create({
	test: {
		color: "pink",
	},
});

const exampleDarkStyles = StyleSheet.create({
	test: {
		color: "yellow",
		backgroundColor: "pink",
	},
});

describe("useThemableStyles should work properly", () => {
	test("works in light mode", () => {
		const { result } = renderHook(() => useThemableStyles(false));

		expect(
			result.current.s(exampleLightStyles.test, exampleDarkStyles.test)
		).toBe(exampleLightStyles.test);

		expect(result.current.t("light", "dark")).toBe("light");
	});

	test("works in dark mode", () => {
		const { result } = renderHook(() => useThemableStyles(true));

		expect(
			result.current.s(exampleLightStyles.test, exampleDarkStyles.test)
		).toStrictEqual(exampleDarkStyles.test);

		expect(result.current.t("light", "dark")).toBe("dark");
	});
});
