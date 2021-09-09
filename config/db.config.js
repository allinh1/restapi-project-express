const { createPool } = require("mysql");
/** Connection pool creation - START */
const db = createPool({
  port: 3306,
  host: "us-cdbr-east-04.cleardb.com",
  user: "b1c630c56dac35",
  password: "10dbf244",
  database: "heroku_87cf0325bea9a29",
  connectionLimit: 10,
});
/** Connection pool creation - END */

module.exports = db;
