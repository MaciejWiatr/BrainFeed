import axios from "axios";
import { FeedItemResp } from './../types/FeedItemResp';

const backendUrl = process.env.BACKEND_URL

const fetchFeed = () => axios.get<FeedItemResp[]>(`${backendUrl}/link`).then(res=>res.data);

const uploadLink = (url:string) => axios.post(`${backendUrl}/link`, {url}).then(res=>res.data)

export { fetchFeed, uploadLink};
