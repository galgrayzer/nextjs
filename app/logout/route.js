import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const GET = () => {
  if (cookies().get("token")) {
    cookies().set("token", "");
  }
  return redirect("/login?reload=true");
};
