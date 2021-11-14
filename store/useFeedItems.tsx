import AsyncStorage from "@react-native-async-storage/async-storage";
import create from "zustand";
import { persist } from "zustand/middleware";

const mockFeedItems = [
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

interface IFeedItem {
	id: number;
	image: string;
	title: string;
	description: string;
	uploadDate: Date;
}

interface IFeedItemsState {
	items: IFeedItem[];
	addItem: (item: IFeedItem) => void;
}

const useFeedItems = create<IFeedItemsState>(
	// persist(
	(set, get) => ({
		items: mockFeedItems,
		addItem: (item: IFeedItem) => {
			set((s) => ({ items: [item, ...s.items] }));
		},
	})
	// 	{
	// 		name: "@brainfeed/feedItems",
	// 		getStorage: () => AsyncStorage,
	// 	}
	// )
);

export default useFeedItems;
