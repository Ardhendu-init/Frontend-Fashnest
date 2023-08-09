"use client";
import Link from "next/link";
import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Login submitted:", { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-[#005566]">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Sign in to your account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-blue-500 hover:underline">
            Forgot Password?
          </a>
        </div>
        <div className="mt-4 text-center">
          <p>
            Don&apos;t have an account?{" "}
            <Link href="/auth/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
