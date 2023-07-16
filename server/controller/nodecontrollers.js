const db = require("../config/dbcon");
const defaultapi = (req, res) => {
  res.setHeader("Content-Type", "application/json");

  res.send({ Message: "Welcome to our school management system" });
};

const signup = (req, res) => {
  const sql = "SELECT * FROM signupstep1";

  db.query(sql, (err, data) => {
    if (err) {
      return res.json("Error");
    } else {
      return res.json(data);
    }
  });
};
const signupemail = (req, res) => {
  res.setHeader("Content-Type", "application/json");

  const emailid = req.params.email;
  console.log(emailid);
  const sql = "SELECT * FROM `signupstep1` WHERE email=?";
  db.query(sql, emailid, (err, data) => {
    if (err) {
      return err;
    } else {
      return res.json(data);
    }
  });
};
const signuppost = (req, res) => {
  const schoolname = req.body.schoolname;
  const schoolurl = req.body.schoolurl;
  const email = req.body.email;
  const phone = req.body.phone;
  const user_token = req.body.user_token;

  const sql =
    "INSERT INTO `signupstep1`(`schoolname`,`schoolurl`,`email`,`phone`,`user_token`) VALUES (?,?,?,?,?)";

  db.query(
    sql,
    [schoolname, schoolurl, email, phone, user_token],
    (err, data) => {
      if (err) {
        return res.json(err);
      }

      return res.json(data);
    }
  );
};

const apisignupid = (req, res) => {
  res.setHeader("Content-Type", "application/json");

  const userid = req.params.id;
  console.log(userid);
  const sql = "SELECT * FROM `signupstep1` WHERE user_token=?";
  db.query(sql, userid, (err, data) => {
    if (err) {
      return err;
    } else {
      return res.json(data);
    }
  });
};
const register_address_post = (req, res) => {
  const user_token = req.body.user_token;
  const country = req.body.country;
  const address = req.body.address;

  const sql =
    "INSERT INTO `signupstep2-address`(`user_token`,`country`,`schooladdress`) VALUES (?,?,?)";

  db.query(sql, [user_token, country, address], (err, data) => {
    if (err) {
      return res.json(err);
    }

    return res.json(data);
  });
};
const register_address_get_id = (req, res) => {
  res.setHeader("Content-Type", "application/json");

  const userid = req.params.id;
  // console.log(emailid);
  const sql = "SELECT * FROM `signupstep2-address` WHERE user_token=?";
  db.query(sql, userid, (err, data) => {
    if (err) {
      return err;
    } else {
      return res.json(data);
    }
  });
};
const register_address_get = (req, res) => {
  const sql = "SELECT * FROM `signupstep2-address`";

  db.query(sql, (err, data) => {
    if (err) {
      return res.json("Error");
    } else {
      return res.json(data);
    }
  });
};
const admindata_post = (req, res) => {
  const user_token = req.body.user_token;
  const admin_name = req.body.admin_name;
  const admin_email = req.body.admin_email;
  const admin_password = req.body.admin_password;
  const admin_phone = req.body.admin_phone;
  const admin_confirmPassword = req.body.admin_confirmPassword;

  const sql =
    "INSERT INTO `signup-info`(`user_token`,`admin_name`,`admin_email`, `admin_password`, `admin_phone`,`admin_confirmPassword`) VALUES (?,?,?,?,?,?)";

  db.query(
    sql,
    [
      user_token,
      admin_name,
      admin_email,
      admin_password,
      admin_phone,
      admin_confirmPassword,
    ],
    (err, data) => {
      if (err) {
        return res.json(err);
      }

      return res.json(data);
    }
  );
};
const admindata_get_id = (req, res) => {
  res.setHeader("Content-Type", "application/json");

  const userid = req.params.id;
  // console.log(emailid);
  const sql = "SELECT * FROM `signup-info` WHERE user_token=?";
  db.query(sql, userid, (err, data) => {
    if (err) {
      return err;
    } else {
      return res.json(data);
    }
  });
};

const admindata_get_email = (req, res) => {
  res.setHeader("Content-Type", "application/json");

  const userid = req.params.id;
  // console.log(emailid);
  const sql = "SELECT * FROM `signup-info` WHERE admin_email=?";
  db.query(sql, userid, (err, data) => {
    if (err) {
      return err;
    } else {
      return res.json(data);
    }
  });
};
const admindata_get = (req, res) => {
  res.setHeader("Content-Type", "application/json");

  // console.log(emailid);
  const sql = "SELECT * FROM `signup-info`";
  db.query(sql, (err, data) => {
    if (err) {
      return err;
    } else {
      return res.json(data);
    }
  });
};


module.exports = {
  admindata_get_email,
  admindata_post,
  signup,
  signupemail,
  signuppost,
  apisignupid,
  register_address_post,
  register_address_get_id,
  register_address_get,
  admindata_get_id,
  defaultapi,
  admindata_get
};
