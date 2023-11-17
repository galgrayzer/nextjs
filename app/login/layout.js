"use client";

import { useSearchParams } from "next/navigation";

export default function Loading({ children }) {
  const error = useSearchParams().get("error");
  return (
    <>
      {children}
      {error && (
        <h1 className="text-6xl text-center mt-10 font-bold text-red-500">
          Wrong email or password
        </h1>
      )}
    </>
  );
}
