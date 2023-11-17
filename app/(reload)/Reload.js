"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Reload() {
  const router = useRouter();
  const reload = useSearchParams().get("reload");
  const pathname = usePathname();
  useEffect(() => {
    if (reload) {
      router.refresh();
      router.push(pathname.replace("?reload=true", ""));
    }
  }, [reload]);
}
