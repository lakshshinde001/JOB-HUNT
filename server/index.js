import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors'

const app = express()
const PORT = 3000;

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

app.get('/home', (req, res) =>{
    return res.status(200).json({
        message:"This is Home page",
        success : true
    });
})

app.listen(PORT, ()=> {
    console.log(`Server is running at PORT : ${PORT}`)
})

