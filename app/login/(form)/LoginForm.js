"use client";

import { useState } from "react";
import "./hover.css";

export default function LoginForm({ handleSubmit }) {
  const [hover, setHover] = useState(false);
  return (
    <>
      <h1
        id="login-header"
        className={
          hover
            ? "relative left-1/2 inline-block bg-gradient-to-r from-indigo-500 via-emerald-500 to-rose-600 text-6xl mt-10 -translate-x-1/2 font-extrabold text-transparent bg-clip-text transition-all duration-500 bg-[length:250%_250%] bg-left hover"
            : "relative left-1/2 inline-block bg-gradient-to-r from-indigo-500 via-emerald-500 to-rose-600 text-6xl mt-10 -translate-x-1/2 font-extrabold text-transparent bg-clip-text transition-all duration-500 bg-[length:250%_250%] bg-left"
        }
      >
        LOGIN
      </h1>
      <div className="flex justify-center mt-16">
        <div className="w-96">
          <form className="flex flex-col" action={handleSubmit}>
            <label className="text-xl">Email</label>
            <input
              name="email"
              className="border-2 rounded-md p-2 mt-2 text-black"
              type="text"
            />
            <label className="text-xl mt-4">Password</label>
            <input
              name="password"
              className="border-2 rounded-md p-2 mt-2 text-black"
              type="password"
            />
            <button
              type="submit"
              id="login-button"
              className="bg-gradient-to-r from-indigo-500 via-emerald-500 to-rose-600 text-white rounded-md p-2 mt-4 text-lg font-bold transition-all duration-500 bg-[length:250%_250%] bg-left hover:bg-right hover:text-gray-300"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Login
            </button>
          </form>
          <div className="flex justify-center mt-4">
            <p className="text-xl">
              Don't have an account?{" "}
              <a
                className="text-[#299fa3] hover:text-emerald-400 font-bold duration-300 transition-colors"
                href="/signup"
              >
                Signup
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
