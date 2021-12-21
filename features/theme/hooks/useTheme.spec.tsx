import { act, renderHook } from "@testing-library/react-hooks";
import useTheme from "./useTheme";

describe("useTheme should work correctly", () => {
	test("should return correct data types", () => {
		const { result } = renderHook(() => useTheme());
		expect(typeof result.current.isDark).toBe("boolean");
	});
	test("toggle function should work correctly", () => {
		const { result } = renderHook(() => useTheme());

		expect(result.current.isDark).toBe(false);

		act(() => {
			result.current.toggleTheme();
		});

		expect(result.current.isDark).toBe(true);
	});
});
