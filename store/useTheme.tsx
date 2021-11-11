import create from "zustand";

interface IState {
	isDark: boolean;
	toggleTheme: () => void;
}

const useTheme = create<IState>((set, get) => ({
	isDark: false,
	toggleTheme: () => {
		set((s) => ({ isDark: !s.isDark }));
	},
}));

export default useTheme;
