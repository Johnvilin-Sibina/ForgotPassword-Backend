import express from "express"
import dotenv from "dotenv"
import cors from 'cors'
import connectDB from "./Database/config.js"
import userRouter from "./Routers/userRoute.js"

dotenv.config()
const app = express()

//Middleware
app.use(express.json())
app.use(cors({
    origin:"*",
    credentials:true
}))

//DB connection
connectDB()

//Default route
app.get('/',(req,res)=>{
    res.status(200).send("Welcome to the Authetication App")
})

//Routes
app.use('/api',userRouter)

//Listen
app.listen(process.env.PORT,()=>{
    console.log("App is running")
})