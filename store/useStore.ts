import { create } from "zustand";
import Cookie from "js-cookie";
import { persist, createJSONStorage } from "zustand/middleware";
interface StoreState {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}

const useStore = create(
  persist<StoreState>(
    (set) => ({
      token: null,
      login: (token) => {
        Cookie.set("token", token);
        set({ token });
      },
      logout: () => {
        Cookie.remove("token");
        set({ token: null });
      },
    }),
    {
      name: "food-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useStore;
