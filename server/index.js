
import dotenv from "dotenv";
import express from "express"; 
import bodyParser from "body-parser"; 
import mongoose from "mongoose"; 
import cors from "cors";   
import multer from "multer"; 
import helmet from "helmet"; 
import morgan from "morgan"; 
import path from "path"; 
import { fileURLToPath } from "url";
import { register } from "./controllers/auth.js"; 
 

/* SECURITY WITH DOTENV */

dotenv.config(); 
console.log(process.env.MONGO_URL) //testing .env file



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
app.use(cors()); 
app.use('/assets', express.static(path.join(__dirname, 'public/assets'))); 


/* SERVER STORAGE */

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/assets"); 
    }, 
    filename: function (req, file, cb) {
        cb(null, file.originalname); 
    }
}); 


const upload = multer({ storage }); 


/* LETS CREATE SOME AWESOME ROUTES HERE */
app.post('/auth/register', upload.single("picture", register)); 


/* MONGOOSE CONNECTION */

const PORT = process.env.PORT || 3002; 
console.log(`${PORT}`) //test dotenv file

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
}).then(() => {
    app.listen(PORT, () => console.log(`Server Started: ${PORT}`)); 
}).catch((error) => console.log(`${error} something went wrong.`)); 

