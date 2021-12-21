import { nanoid } from "nanoid/non-secure";
import AsyncStorage from "@react-native-async-storage/async-storage";

const generateAuthToken = async () => {
	try {
		const value = await AsyncStorage.getItem("authToken");
		if (value === null) {
			const token = nanoid();
			await AsyncStorage.setItem("authToken", token);
			return token;
		}
	} catch (e) {
		console.log(e);
	}
};

export default generateAuthToken;
