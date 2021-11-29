import create from "zustand";

interface IOptionsStore {
	speedMode: boolean;
	setSpeedMode: (val: boolean) => void;
}

const useOptions = create<IOptionsStore>((set, get) => ({
	speedMode: true,
	setSpeedMode: (val) => set({ speedMode: val }),
}));

export default useOptions;
