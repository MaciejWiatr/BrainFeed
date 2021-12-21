import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { FeedItemResp } from "./../types/FeedItemResp";

const backendUrl = process.env.BACKEND_URL;

console.log(backendUrl);

const fetchFeed = async () =>
	axios
		.get<FeedItemResp[]>(`${backendUrl}/link`)
		.then((res) => res.data)
		.catch((err) => console.log(err));

const uploadLink = async (url: string) =>
	axios
		.post(`${backendUrl}/link`, {
			url,
		})
		.then((res) => res.data);

const markAsRead = async (id: string) =>
	axios
		.post<FeedItemResp[]>(`${backendUrl}/link/${id}/read`)
		.then((res) => res.data);

export { fetchFeed, uploadLink, markAsRead };
