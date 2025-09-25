import { create } from "zustand";
import { persist } from "zustand/middleware";
import axiosInstance from "../utils/axiosInstance";

interface User {
  id: string;
  email: string;
}

interface authState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  signup: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
}

export const authStore = create<authState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      loading: false,
      error: null,
      signup: async (email, password) => {
        try {
          set({ loading: true, error: null });
          const res = axiosInstance.post("auth/signUp", { email, password });
          //   set({ user: res.user, token: res.accessToken, loading: false });
        } catch (error) {
          set({ error: error.message || "Signup failed", loading: false });
        }
      },
      login: async (email, password) => {
        try {
          set({ loading: true, error: null });
          const res = axiosInstance.post("auth/logIn", { email, password });
          set({ user: res.user, token: res.accessToken, loading: false });
        } catch (error) {
          set({ error: error.message || "login failed", loading: false });
        }
      },
    }),
    {
      name: "auth-storage",
    }
  )
);
