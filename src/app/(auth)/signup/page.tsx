"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/app/store/authStore";

export default function SignupPage() {
  const router = useRouter();

  const { signup, loading, error } = useAuthStore();

  console.log("Signup page error", loading);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignUp = async () => {
    await signup(email, password);
    router.push("/login");
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-200">
      <div className="flex flex-col gap-4 p-8 rounded-md w-full max-w-md bg-white shadow-md">
        <h2 className="text-2xl font-bold text-center mb-2 text-black">
          Sign Up
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignUp();
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
            // disabled={loading}
            className={`flex items-center justify-center gap-2 px-4 py-2 text-white
            rounded-sm font-semibold transition ${"bg-black hover:bg-gray-900"}`}
            // className={`flex items-center justify-center gap-2 px-4 py-2 text-white
            // rounded-sm font-semibold transition ${
            //   loading ? "bg-gray-600" : "bg-black hover:bg-gray-900"
            // }`}
          >
            Create Account
            {/* {loading ? "Creating..." : "Create Account"} */}
          </button>
        </form>

        <div className="flex justify-center mt-2 text-black">
          <h1>
            Already have an account?{" "}
            <Link href="/login">
              <button className="cursor-pointer underline font-bold ml-1">
                Log in
              </button>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
}
