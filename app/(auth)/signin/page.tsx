"use client"

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthLogo from "../auth-logo";
import {useAuth} from "@/app/contexts/AuthContext";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setSession, setIsAdmin } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === "test@gmail.com" && password === "test") {
      alert("welcome member")
      setIsAdmin(false)
      setSession(true)
      console.log("Member")
      router.push("/");
    } else if (email === "admin@gmail.com" && password === "admin") {
      alert("welcome admin")
      setIsAdmin(true)
      setSession(true)
      console.log("admin")
      router.push("/");
    } else {
      alert("Sign in failed");
    }
  };

  return (
      <>
        {/* Page header */}
        <div className="max-w-3xl mx-auto text-center pb-12">
          {/* Logo */}
          <AuthLogo />
          {/* Page title */}
          <h1 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">
            Sign in to your account
          </h1>
        </div>

        {/* Form */}
        <div className="max-w-sm mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label
                    className="block text-sm text-slate-300 font-medium mb-1"
                    htmlFor="email"
                >
                  Email
                </label>
                <input
                    id="email"
                    className="form-input w-full"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <label
                      className="block text-sm text-slate-300 font-medium mb-1"
                      htmlFor="password"
                  >
                    Password
                  </label>
                  <Link
                      className="text-sm font-medium text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out ml-2"
                      href="/reset-password"
                  >
                    Forgot?
                  </Link>
                </div>
                <input
                    id="password"
                    className="form-input w-full"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="on"
                    required
                />
              </div>
            </div>
            <div className="mt-6">
              <button className="btn text-sm text-white bg-purple-500 hover:bg-purple-600 w-full shadow-sm group">
                Sign In{" "}
                <span className="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                -&gt;
              </span>
              </button>
            </div>
          </form>

          <div className="text-center mt-4">
            <div className="text-sm text-slate-400">
              Don't have an account?{" "}
              <Link
                  className="font-medium text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out"
                  href="/signup"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </>
  );
}
