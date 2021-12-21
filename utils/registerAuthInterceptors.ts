import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const registerAuthInterceptors = () => {
	axios.interceptors.request.use(
		async (config) => {
			config.headers["x-user-id"] = await AsyncStorage.getItem(
				"authToken"
			);
			return config;
		},
		(error) => Promise.reject(error)
	);
};

export default registerAuthInterceptors;
