if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const express = require("express");

const app = express();
const cors = require("cors");
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());
const controllers = require("./controller/nodecontrollers");
app.get("/", controllers.defaultapi);
app.get("/signup", controllers.signup);
app.get("/signup/:email", controllers.signupemail);
app.post("/signup", controllers.signuppost);
app.get("/apisignup/:id", controllers.apisignupid);
app.post("/register_address", controllers.register_address_post);
app.get("/register_address/:id", controllers.register_address_get_id);
app.get("/register_address", controllers.register_address_get);
app.post("/admindata", controllers.admindata_post);
app.get('/admindata',controllers.admindata_get);
app.get("/admindata/:id", controllers.admindata_get_id);
app.get("/apiadmindata/:id", controllers.admindata_get_email);
app.listen(process.env.PORT);
