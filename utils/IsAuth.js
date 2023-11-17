"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import isAuth from "@/middlewares/isAuthServer";

export default function IsAuthComponenet({ not }) {
  const router = useRouter();
  useEffect(() => {
    isAuth().then((isAuth) => {
      if (!isAuth && not) {
        router.push("/login");
      } else if (isAuth && !not) {
        router.push("/");
      }
    });
  }, []);
}
