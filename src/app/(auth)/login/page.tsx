"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/app/store/authStore";

export default function LoginPage() {
  const router = useRouter();

  const { login, loading, error } = useAuthStore();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // const [loading, setLoading] = useState<boolean>(false);
  // const [error, setError] = useState<string>("");
  // const [success, setSuccess] = useState<string>("");

  const handleLogin = async () => {
    await login(email, password);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col gap-4 p-8 rounded-md w-full max-w-md bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-2 text-black">
          Log In
        </h2>

        {error && <p className="text-red-600">{error}</p>}
        {/* {success && <p className="text-green-600">{success}</p>} */}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          className="flex flex-col gap-4"
        >
          <label className="font-medium text-black">Email</label>
          <div className="flex border border-black rounded-sm bg-white px-2 py-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full outline-none border-0 px-2 text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <label className="font-medium text-black">Password</label>
          <div className="flex border border-black rounded-sm bg-white px-2 py-2">
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full outline-none border-0 px-2 text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`flex items-center justify-center gap-2 px-4 py-2 text-white 
            rounded-sm font-semibold transition ${
              loading ? "bg-gray-600" : "bg-black hover:bg-gray-900"
            }`}
          >
            {loading ? "..." : "Log in"}
          </button>
        </form>

        <div className="flex justify-center text-black">
          <h1>
            New user{" "}
            <Link href="/signup">
              <button className="cursor-pointer underline font-bold">
                Sign up
              </button>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
}
