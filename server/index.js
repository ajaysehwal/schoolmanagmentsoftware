if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const express = require("express");

const app = express();
const cors = require("cors");
var bodyParser = require("body-parser");
const multer=require('multer');
const path=require('path');
const xlsx=require('xlsx');
const fs=require('fs-extra');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());
app.use('/images/studentfiles',express.static('images/studentfiles'));
app.use('/images/teachersfiles',express.static('images/teachersfiles'));

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
app.get('/studentclasses',controllers.classes_get);
app.post('/studentclasses',controllers.classes_post);
app.get('/studentclasses/:id',controllers.classes_get_id);
app.get('/apistudentclasses/:id',controllers.classes_get_search);
app.get('/apistudentclasses',controllers.classes_get_all_search);
app.delete('/studentclasses',controllers.class_delete);
app.get('/studentclasses',controllers.class_limit);
app.get('/api.studenthouses',controllers.studenthouse_get);
app.get('/api.studenthouses/:id',controllers.studenthouse_get_id);
app.post('/api.studenthouses',controllers.studenthouse_post);
app.delete('/api.studenthouses',controllers.studenthouse_delete);
const teacherstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images/teachersfiles/')
  },
  filename: function (req, file, cb) {
   return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }  
})

const teacherupload = multer({ storage: teacherstorage })

const studentstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images/studentfiles/')
  },
  filename: function (req, file, cb) {
   return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }  
})

const studentupload = multer({ storage: studentstorage })
const excelfilesstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload/excelfiles/')
  },
  filename: function (req, file, cb) {
   return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }  
})
const excelupload = multer({ storage: excelfilesstorage })

// const upload=multer({dest:"upload/"});

app.post('/apistudents',studentupload.fields([
  { name: 'file1', maxCount: 1 },
  { name: 'file2', maxCount: 1 },
  { name: 'file3', maxCount: 1 },
]),controllers.Student_post);

app.get('/apistudents',controllers.getstudent_data);
app.get('/apistudents/:id',controllers.getstudent_data_admission_no)
app.post('/apiexceldata',excelupload.single('file'),controllers.poststudentdata_excel)
app.post('/apiteacher',teacherupload.fields([
  { name: 'file1', maxCount: 1 },
  { name: 'file2', maxCount: 1 },
]),controllers.postteacher_data)
app.get('/apiteacher/:admin_id/:id',controllers.getteacherdatabyid);
app.get('/teacherdata/:teacher_id/:admin_id',controllers.getteacherdatabyteacher_id);
app.post('/studentclasses.section',controllers.class_section);
app.get('/studentclasses.section',controllers.class_section_get);
app.get('/studentclasses.section/:id',controllers.class_section_get_id);
app.get('/studentsection/:classes/:user_id',controllers.class_section_get_class);

app.get('/studentdatabyadmin/:id',controllers.getstudentdatabyadmin);
app.get('/teacher.api/:id',controllers.getteacherdatabyadmin);
const imagePaths = fs.readdirSync(path.join(__dirname, 'images/teachersfiles'));
app.get('/teacher/images',(req,res)=>{
  const serverDomain = 'http://localhost:8000'; // Change this to your actual server domain

  const imageUrls=imagePaths.map((imagePath)=>`${serverDomain}/images/teachersfiles/${imagePath}`)
  res.json(imageUrls);
})


app.get('/studentdetails/:id',controllers.studentdetailbyid);
app.post('/schooltimetable',controllers.schooltimetable_post)
app.get('/schooltimetable',controllers.schooltimetable_get);
app.get('/schooltimetable/:id',controllers.schooltimetable_get_by_id);
app.get('/schooltimetablebyteacher/:teacher_id/:admin_id',controllers.schooltimetable_get_teacher)
app.get('/schooltimetablebyclasses/:classes/:section/:school_id',controllers.schooltimetable_get_class_section);
app.post('/schoolsubjects',controllers.schoolsubject_post);
app.delete('/schoolsubjects/:key',controllers.schoolsubject_delete);
app.get('/schoolsubjects',controllers.schoolsubject_get);
app.get('/schoolsubjects/:classes/:id',controllers.schoolsubject_get_id);
app.post('/schoolholiday',controllers.schoolholiday_post)
app.get('/schoolholiday',controllers.schoolholiday_get)
app.get('/schoolholiday/:id',controllers.schoolholiday_get_user_id);
app.delete('/schoolholiday/:id',controllers.schoolholiday_delete);
app.post('/schoolcalenders',controllers.schoolcalenders);
app.get('/schoolcalenders',controllers.schoolcalender_get);
app.get('/schoolcalenders/:id',controllers.schoolcalender_get_id);

app.listen(process.env.PORT)  