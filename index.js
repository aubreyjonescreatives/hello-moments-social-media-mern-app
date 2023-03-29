
import dotenv from "dotenv";
import express from "express"; 
import bodyParser from "body-parser"; 
import mongoose from "mongoose"; 
import cors from "cors";   
import multer from "multer"; 
import helmet from "helmet"; 
import morgan from "morgan"; 
import path from "path"; 
import authRoutes from './routes/auth.js'; 
import userRoutes from './routes/users.js'; 
import postRoutes from './routes/posts.js'; 
import { fileURLToPath } from "url";
import { register } from "./controllers/auth.js"; 
import { createPost } from "./controllers/posts.js"; 
import { verifyToken } from "./middleware/auth.js"; 
 /* import User from "./models/User.js"; 
import Post from "./models/Post.js";
import { users, posts } from "./data/index.js";  */

/* SECURITY WITH DOTENV */

dotenv.config(); 
console.log(process.env.MONGO_URI) //testing .env file





/* SERVER CONFIGURATION */

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 

 
const app = express(); 


app.use(express.json()); 
app.use(helmet()); 
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"})); 
app.use(morgan("common")); 
app.use(bodyParser.json({ limit: "30mb", extended: true })); 
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));  
app.use('/assets', express.static(path.join(__dirname, 'public/assets'))); 

/* Because we hate CORS */

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH' ]
}));



app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "*")
    next()
})


app.use(function (req, res, next) {
    res.setHeader(
      'Content-Security-Policy',
      "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; frame-src 'self'"
    );
    next();
  });



/* SERVER STORAGE */

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/assets"); 
    }, 
    filename: function (req, file, cb) {
        cb(null, file.originalname); 
    },
}); 


const upload = multer({ storage }); 


/* LETS CREATE SOME AWESOME ROUTES HERE */

app.post("/auth/register", upload.single("picture"), register); 
app.post("/posts", verifyToken, upload.single("picture"), createPost); 


app.use("/auth", authRoutes); 
app.use("/users", userRoutes); 
app.use("/posts", postRoutes); 



// connect server to client for production

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
	app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'));
    });
}






/* MONGOOSE CONNECTION */

mongoose.set('strictQuery', false); 

const PORT = process.env.PORT || 3002; 
console.log(`${PORT}`) //test dotenv file

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
}).then(() => {
    app.listen(PORT, () => console.log(`Server Started: ${PORT}`)); 
   /* TESTING DATA */
  //   User.insertMany(users); 
  //   Post.insertMany(posts); 
}).catch((error) => console.log(`${error} something went wrong.`)); 

