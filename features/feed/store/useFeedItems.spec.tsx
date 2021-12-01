import { act, renderHook } from "@testing-library/react-hooks";
import useFeedItems from "./useFeedItems";

describe("useFeedItems should work correctly", () => {
	test("adding item works", () => {
		const { result } = renderHook(() => useFeedItems());
		const beforeAdd = result.current.items.length;

		act(() => {
			result.current.addItem({
				id: Math.random(),
				image: "image",
				title: "test element",
				description: "test desc",
				uploadDate: new Date(),
			});
		});

		const afterAdd = result.current.items.length;

		expect(afterAdd).toBeGreaterThan(beforeAdd);
	});
});
