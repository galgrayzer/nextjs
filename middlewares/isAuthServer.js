"use server";

import { isAuth } from "./isAuth.js";

export default async function isAuthServer() {
  return isAuth();
}
