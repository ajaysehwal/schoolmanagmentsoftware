const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "erpsystem",
});
db.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("MySQL Database is connected Successfully");
  }
});

module.exports=db;