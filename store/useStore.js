import { create } from 'zustand';

const useStore = create((set) => ({
  user: null,
  token: null,
  login: (userData, token) => set({ user: userData, token }),
  logout: () => set({ user: null, token: null }),
}));

export default useStore;
