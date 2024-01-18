

import { json } from "body-parser";
import express from "express";

import router from "./routes/special.routes";
import './database'

let app = express()
let bodyparser=require('body-parser');
let mongoose=require('mongoose')

let port =process.env.PORT || 4201;
app.use(express.urlencoded({extended:false}))
app.use(express.json());

//RUTAS
app.use(router)


app.post('/ping',(req,res)=>{
    console.log('Entro');
    
    res.send({
        status:"200",
        message:"Has hecho ping"
    })
})


app.listen(port,()=>{
    console.log('servidor escuchando en el puerto' + port);  
})

export default app


