"use server";

import { isAuth } from "../../../middlewares/isAuth.js";

export default async function redirect() {
  return isAuth();
}
