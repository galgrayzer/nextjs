"use server";

import { query } from "utils/mysql";
import isAuthServer from "@/middlewares/isAuthServer";
import Navbar from "./Navbar";

export default async function PreNavbar({ links }) {
  const auth = await isAuthServer();
  if (!auth) {
    return <Navbar img={"/images/account-icon.png"} links={links} />;
  }
  const image = (
    await query(
      `select UserImg from users where UserID=(select UserID from tokens where token='${auth}')`
    )
  )[0].UserImg;
  return <Navbar img={image} links={links} />;
}
