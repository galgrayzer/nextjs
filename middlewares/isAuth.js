import { cookies } from "next/headers";

const { query } = require("/utils/mysql.js");

export const isAuth = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")
    ? cookieStore.get("token").value
    : false;
  if (!token) {
    return false;
  }
  return query(`SELECT * FROM tokens WHERE token='${token}'`).then((result) => {
    if (result.length === 0) {
      return false;
    }
    return true;
  });
};
