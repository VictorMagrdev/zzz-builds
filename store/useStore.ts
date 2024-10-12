import { create } from 'zustand';

interface StoreState {
  token: string | null;
  login: ( token: string) => void;
  logout: () => void;
}

const useStore = create<StoreState>((set,get) => ({
  token: "",
  login: (token) => set({ token }),
  logout: () => set({ token: null }),
}));

export default useStore;
