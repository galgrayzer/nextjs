const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "nextjs",
});

exports.query = (query) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        return reject(err);
      }
      connection.query(query, (err, rows) => {
        connection.release();
        if (err) {
          return reject(err);
        }
        resolve(rows);
      });
    });
  });
};
