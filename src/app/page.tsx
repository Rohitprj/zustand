// import Image from "next/image";

// export default function Home() {
//   return (
//     // <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//     //   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//     //     <Image
//     //       className="dark:invert"
//     //       src="/next.svg"
//     //       alt="Next.js logo"
//     //       width={180}
//     //       height={38}
//     //       priority
//     //     />
//     //     <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
//     //       <li className="mb-2 tracking-[-.01em]">
//     //         Get started by editing{" "}
//     //         <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
//     //           src/app/page.tsx
//     //         </code>
//     //         .
//     //       </li>
//     //       <li className="tracking-[-.01em]">
//     //         Save and see your changes instantly.
//     //       </li>
//     //     </ol>

//     //     <div className="flex gap-4 items-center flex-col sm:flex-row">
//     //       <a
//     //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//     //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//     //         target="_blank"
//     //         rel="noopener noreferrer"
//     //       >
//     //         <Image
//     //           className="dark:invert"
//     //           src="/vercel.svg"
//     //           alt="Vercel logomark"
//     //           width={20}
//     //           height={20}
//     //         />
//     //         Deploy now
//     //       </a>
//     //       <a
//     //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//     //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//     //         target="_blank"
//     //         rel="noopener noreferrer"
//     //       >
//     //         Read our docs
//     //       </a>
//     //     </div>
//     //   </main>
//     //   <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//     //     <a
//     //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//     //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       <Image
//     //         aria-hidden
//     //         src="/file.svg"
//     //         alt="File icon"
//     //         width={16}
//     //         height={16}
//     //       />
//     //       Learn
//     //     </a>
//     //     <a
//     //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//     //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       <Image
//     //         aria-hidden
//     //         src="/window.svg"
//     //         alt="Window icon"
//     //         width={16}
//     //         height={16}
//     //       />
//     //       Examples
//     //     </a>
//     //     <a
//     //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//     //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       <Image
//     //         aria-hidden
//     //         src="/globe.svg"
//     //         alt="Globe icon"
//     //         width={16}
//     //         height={16}
//     //       />
//     //       Go to nextjs.org →
//     //     </a>
//     //   </footer>
//     // </div>
//     <>
//       <div className="bg-red p-8 h-full w-full"></div>
//     </>
//   );
// }

"use client";

// import axios, { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { useAuthContext } from "@/context/AuthContext";
import React, { useState } from "react";
// import { BASE_URL } from "../../../../utils/axiosInstance";
// import { validateEmail } from "../../../../utils/validateEmail";
// import toast, { Toaster } from "react-hot-toast";

export default function SignupPage() {
  const router = useRouter();
  // const signUpApi = `${BASE_URL}/auth/signUp`;
  // const loginApi = `${BASE_URL}/auth/logIn`;

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  // const { user, setUser } = useAuthContext();
  // console.log("UserSignUpData", user);

  // async function signupApi(): Promise<void> {
  //   setLoading(true);
  //   setError("");
  //   setSuccess("");

  //   if (!validateEmail(email)) {
  //     setError("Please enter a valid email address.");
  //     setLoading(false);
  //     return;
  //   }

  //   try {
  //     const signUpResponse = await axios.post(
  //       signUpApi,
  //       { email, password },
  //       { withCredentials: true }
  //     );

  //     const loginResponse = await axios.post(
  //       loginApi,
  //       { email, password },
  //       { withCredentials: true }
  //     );

  //     console.log("Signup Response:", signUpResponse.data);
  //     console.log("Login Response:", loginResponse.data);

  //     setSuccess("Signup successfully!");
  //     if (signUpResponse.status && loginResponse.status === 200) {
  //       const userData = signUpResponse.data;
  //       setUser({
  //         email: userData.email,
  //         isLoggedIn: true,
  //         isLoading: false,
  //       });
  //     }
  //     setEmail("");
  //     setPassword("");
  //     router.push("/");
  //   } catch (err: unknown) {
  //     if (axios.isAxiosError(err)) {
  //       const axiosErr = err as AxiosError<{ message: string }>;
  //       setError(axiosErr.response?.data?.message || "An error occurred.");
  //     } else {
  //       setError("Something went wrong. Please try again later.");
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // }
  // const notify = () => toast("Here is your toast.");
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-200">
      <div className="flex flex-col gap-4 p-8 rounded-md w-full max-w-md bg-white shadow-md">
        <h2 className="text-2xl font-bold text-center mb-2 text-black">
          Sign Up
        </h2>

        {/* {error && <p className="text-red-600">{error}</p>}
        {success && (
          <p className="text-green-600">
            {success}
            <Toaster />
          </p>
        )} */}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            // signupApi();
            // notify();
          }}
          className="flex flex-col gap-4"
        >
          <label className="font-medium text-black">Email</label>
          <div className="flex border border-black rounded-sm bg-white px-2 py-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full outline-none border-0 px-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <label className="font-medium">Password</label>
          <div className="flex border border-black rounded-sm bg-white px-2 py-2">
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full outline-none border-0 px-2"
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
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>

        <div className="flex justify-center mt-2">
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
