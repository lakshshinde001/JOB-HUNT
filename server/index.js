import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors'
import  dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoutes from "./routes/user.route.js"
import companyRoutes from "./routes/company.routes.js"
import jobRoutes from "./routes/job.route.js"
import applicationRoutes from "./routes/application.route.js"

dotenv.config();

const app = express()
const PORT =  process.env.PORT || 3001;

//mongodb connected 
connectDB()

// middleware 
//required in all vite applications 
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())

const corsOptions = {
    origin:'http://localhost:5173',
    credentials:true
}
app.use(cors(corsOptions))


app.use("/api/v1/user", userRoutes)
app.use("/api/v1/company", companyRoutes)
app.use("/api/v1/job", jobRoutes)
app.use("/api/v1/application", applicationRoutes)

app.listen(PORT, ()=> {
    console.log(`Server is running at PORT : ${PORT}`)
})

