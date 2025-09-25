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

export const useAuthStore = create<authState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      loading: false,
      error: null,
      signup: async (email, password) => {
        console.log("Checking error", email, password);
        try {
          set({ loading: true, error: null });
          const res = await axiosInstance.post("/auth/signUp", {
            email,
            password,
          });
          set({ loading: false });
        } catch (err: any) {
          set({
            error:
              err.response?.data?.message || err.message || "Signup failed",
            loading: false,
          });
        }
      },
      login: async (email, password) => {
        try {
          set({ loading: true, error: null });
          const res = await axiosInstance.post("auth/logIn", {
            email,
            password,
          });
          set({
            user: res.data.user,
            token: res.data.accessToken,
            loading: false,
          });
        } catch (err: any) {
          set({
            error:
              err.response?.data?.message || err.message || "Signup failed",
            loading: false,
          });
        }
      },
    }),
    {
      name: "auth-storage",
    }
  )
);
