import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import todosRoute from './route/todos.js'
const app=express();
dotenv.config();
app.use(express.json({extended: true}))
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use('/todos', todosRoute)
const mongodb="mongodb+srv://goel:goelazxsdf@cluster0.4qluu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
app.get('/',(req,res)=>{
    res.send("welcome ")
})
const PORT =process.env.PORT || 3000;
mongoose.connect(mongodb,{ useNewUrlParser: true , useUnifiedTopology: true }).then(()=>
console.log(`server is running on ${PORT}`)).catch(err=> console.log(err))
app.listen(PORT);