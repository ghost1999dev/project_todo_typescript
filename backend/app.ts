'use strict'

import { json } from "body-parser";
import express from "express";
import cors from "cors"
import './database'
let app = express()
let bodyparser=require('body-parser');
let mongoose=require('mongoose')

let port =process.env.PORT || 4201;
app.use(express.urlencoded({extended:false}))

app.use(express,json());
app.get('/ping',(req,res)=>{
    res.send({
        status:"200",
        message:"Has hecho ping"
    })
})

app.listen(port,()=>{
    console.log('servidor escuchando en el puerto' + port);  
})
