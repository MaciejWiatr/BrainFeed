import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Switch } from "react-native-gesture-handler";
import HomeScreen from "./screens/HomeScreen";

const Drawer = createDrawerNavigator();
export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator
				initialRouteName="Feed"
				screenOptions={{
					headerTitleAlign: "center",
					headerRight: () => <Switch />,
				}}
			>
				<Drawer.Screen name="Feed" component={HomeScreen} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
