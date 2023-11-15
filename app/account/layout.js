"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import redirect from "./(redirect)/redirect";

export default function RootLayout({ children }) {
  const router = useRouter();
  useEffect(() => {
    redirect().then((isAuth) => {
      if (!isAuth) {
        router.push("/login");
      }
    });
  }, []);
  return <>{children}</>;
}
