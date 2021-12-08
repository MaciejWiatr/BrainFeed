import { createDrawerNavigator } from "@react-navigation/drawer";
import {
    DarkTheme,
    DefaultTheme,
    NavigationContainer,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import DrawerButton from "./components/DrawerButton";
import NavigationDrawer from "./components/NavigationDrawer";
import ThemeSwitch from "./components/ThemeSwitch";
import { FeedScreen } from "@features/feed";
import { SettingsScreen } from "@features/settings";
import { useTheme } from "@features/theme";
import { NativeBaseProvider } from "native-base";
import { QueryClient, QueryClientProvider } from "react-query";
import { LogBox } from "react-native";

const queryClient = new QueryClient();
const Drawer = createDrawerNavigator();
LogBox.ignoreLogs(['Setting a timer'])
export default function App() {
    const { isDark } = useTheme();

    return (
        <QueryClientProvider client={queryClient}>
            <NativeBaseProvider>
                <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
                    <StatusBar style={isDark ? "light" : "dark"} />
                    <Drawer.Navigator
                        initialRouteName="Feed"
                        screenOptions={{
                            headerTitleAlign: "center",
                            headerRight: () => <ThemeSwitch />,
                            headerLeft: () => <DrawerButton />,
                        }}
                        drawerContent={(props) => (
                            <NavigationDrawer {...props} />
                        )}
                    >
                        <Drawer.Screen name="Feed" component={FeedScreen} />
                        <Drawer.Screen
                            name="Settings"
                            component={SettingsScreen}
                            options={{ drawerItemStyle: { display: "none" } }}
                        />
                    </Drawer.Navigator>
                </NavigationContainer>
            </NativeBaseProvider>
        </QueryClientProvider>
    );
}
