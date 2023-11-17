import { query } from "utils/mysql";
import { redirect } from "next/navigation";
import LoginForm from "./(form)/LoginForm";
import { cookies } from "next/headers";
import IsAuth from "@/utils/IsAuth";

const crypto = require("crypto");

export const metadata = {
  title: "Login",
};

export default function Login() {
  async function handleSubmit(formData) {
    "use server";
    const { email, password } = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const userId = (
      await query(
        `select UserID from users where Email='${email}' and Pass='${password}'`
      )
    )[0]?.UserID;

    if (userId) {
      const token = crypto.randomBytes(16).toString("hex");
      await query(
        `insert into tokens (UserID, token) values (${userId}, '${token}') on duplicate key update token='${token}' `
      );
      cookies().set("token", token, { path: "/" });
      redirect("/?reload=true");
    }
    return redirect("/login?error=true");
  }

  return (
    <>
      <IsAuth />
      <LoginForm handleSubmit={handleSubmit} />
    </>
  );
}
