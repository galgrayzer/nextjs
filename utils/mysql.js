const mysql = require("mysql");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1111",
  database: "nextjs",
});

exports.query = (query, params) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        return reject(err);
      }
      connection.query(query, params, (err, rows) => {
        connection.release();
        if (err) {
          return reject(err);
        }
        resolve(rows);
      });
    });
  });
};
