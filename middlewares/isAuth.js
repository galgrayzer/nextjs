import { cookies } from "next/headers";

const { query } = require("/utils/mysql.js");

export const isAuth = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  if (!token) {
    return false;
  }
  return query("SELECT * FROM users WHERE token = ?", [token]).then(
    (result) => {
      if (result.length === 0) {
        return false;
      }
      return true;
    }
  );
};
