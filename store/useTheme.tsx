import create from "zustand";
import { Appearance } from "react-native";

interface IState {
	isDark: boolean;
	toggleTheme: () => void;
}

const useTheme = create<IState>((set, get) => ({
	isDark: Appearance.getColorScheme() == "dark",
	toggleTheme: () => {
		set((s) => ({ isDark: !s.isDark }));
	},
}));

export default useTheme;
