import axios from "axios";
import { FeedItemResp } from "./../types/FeedItemResp";

const backendUrl = process.env.BACKEND_URL;

console.log(backendUrl);

const fetchFeed = () =>
	axios
		.get<FeedItemResp[]>(`${backendUrl}/link`)
		.then((res) => res.data)
		.catch((err) => console.log(err));

const uploadLink = (url: string) =>
	axios
		.post(`${backendUrl}/link`, {
			url,
			description: "Sint in esse nisi aliquip cupidatat ad.",
		})
		.then((res) => res.data);

const markAsRead = (id: string) =>
	axios
		.post<FeedItemResp[]>(`${backendUrl}/link/${id}/read`)
		.then((res) => res.data);

export { fetchFeed, uploadLink, markAsRead };
