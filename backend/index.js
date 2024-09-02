import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
import multer from 'multer'

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})
const upload = multer({storage: storage})
app.use('/uploads', express.static('uploads'));



const PORT = process.env.PORT || 4000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL)
  .then(() => {
    console.log("Database is connected successfully");
    app.listen(PORT, () => {
      console.log("Server Running on Port " + PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

const studentSchema = new mongoose.Schema({
  image: String,
  firstName: String,
  lastName: String,
  email: String,
  mobile: Number,
  aadhar: Number,
  gender: String,
  age: Number,
  dob: Date,  // Added dob to the schema
  department: String,
  collegeYear: Number,
  passoutYear: Number,
  registerNum: Number,
  collegeName: String,
  parentsAddress: String,
  parentsMobileNumber: Number,
  presentResidentialAddress: String,
  residentialName: String,
  vehicleNumber: String,
  caseCount: {
    type: Number,
    default: 0,
  }
});

const studentModel = mongoose.model("students", studentSchema);

app.get("/getStudent", async (req, res) => {
  try {
    const studentData = await studentModel.find();
    res.json(studentData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/addStudent', upload.single('image') , async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      mobile,
      aadhar,
      gender,
      age,
      dob,
      department,
      collegeYear,
      passoutYear,
      registerNum,
      collegeName,
      parentsAddress,
      parentsMobileNumber,
      presentResidentialAddress,
      residentialName,
      vehicleNumber,
      caseCount
    } = req.body; // Destructuring req.body

    const studentData = new studentModel({
      image: req.file ? req.file.path : '',
      firstName,
      lastName,
      email,
      mobile,
      aadhar,
      gender,
      age,
      dob,
      department,
      collegeYear,
      passoutYear,
      registerNum,
      collegeName,
      parentsAddress,
      parentsMobileNumber,
      presentResidentialAddress,
      residentialName,
      vehicleNumber,
      caseCount
    });

    const savedStudent = await studentData.save();
    res.status(201).json(savedStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// const loginSchema = new mongoose.Schema({
//   username: {
//     type: String,
//   },
//   password: {
//     type: String,
//   }
// });

// const loginModel = mongoose.model('login', loginSchema);

// app.get('/login', async (req, res) => {
//   try {
//     const loginData = await loginModel.find();
//     res.json(loginData);  // Sending response back to client
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });
