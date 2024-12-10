import { create } from "zustand";

interface IAuth {
	isAuth: boolean;
	setAuth: (value: boolean) => void;
}

const useAuthStore = create<IAuth>((set) => ({
	isAuth: false,
	setAuth: (val) => set({ isAuth: val }),
}));

export default useAuthStore;
