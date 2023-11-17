"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

import isAuthServer from "@/middlewares/isAuthServer";
import NavLink from "./Link";

export default function Navbar({ links, img }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    isAuthServer().then((isAuth) => {
      if (isAuth) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });
  }, [showDropdown]);
  return (
    <>
      <nav className="flex justify-between items-center h-16 bg-[#0d0d0d]">
        <div className="flex items-center">
          <NavLink href="/" name="Home" />
        </div>
        <div className="flex items-center">
          {links.map((link) => (
            <NavLink key={link.name} name={link.name} href={link.href} />
          ))}
        </div>
        <div
          className="flex items-center"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <Link href="/account">
            {isAuth ? (
              <img
                src={img}
                width={50}
                height={50}
                alt="account-icon"
                className="rounded-full"
              />
            ) : (
              <img
                src={"/images/account-icon.png"}
                width={50}
                height={50}
                alt="account-icon"
              />
            )}
          </Link>
          {showDropdown && (
            <div
              id="dropdown"
              className="absolute right-1 top-14 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700"
            >
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  {isAuth ? (
                    <Link
                      href="/logout"
                      className="block text-lg text-center font-bold px-4 py-2 dark:hover:text-red-400 hover:duration-300 transition-colors"
                    >
                      Logout
                    </Link>
                  ) : (
                    <Link
                      href="/login"
                      className="block text-lg text-center font-bold px-4 py-2 dark:hover:text-green-400 hover:duration-300 transition-colors"
                    >
                      Login
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
