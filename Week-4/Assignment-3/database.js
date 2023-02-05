const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

//handle signup (check emails already been registered, if not, register)
async function checkEmailExist(email) {
  const [rows] = await pool.query(
    `
    SELECT * 
    FROM user 
    WHERE email = ?
    `,
    [email]
  );
  return rows.length > 0;
}

async function registerUser(email, password) {
  const [result] = await pool.query(
    `
    INSERT INTO user(email, password)
    VALUES(?, ?)
    `,
    [email, password]
  );
}
//handle login (check emails and passwords exist and match)
async function checkExistMatch(email, password) {
  const [rows] = await pool.query(
    `
      SELECT * 
      FROM user 
      WHERE email = ? AND password = ?
      `,
    [email, password]
  );
  if (rows.length === 0) {
    return false;
  }
  return true;
}

module.exports = {
  checkEmailExist,
  registerUser,
  checkExistMatch,
};
