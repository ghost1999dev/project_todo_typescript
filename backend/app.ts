

import { json } from "body-parser";
import express from "express";
import cors from 'cors'
import router from "./routes/special.routes";
import './database'

//swagger

import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
import {options} from "./swaggerOptions";
let app = express()
let bodyparser=require('body-parser');
let mongoose=require('mongoose')

let port =process.env.PORT || 4201;
app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(cors());
const specs=swaggerJsDoc(options)
//RUTAS
app.use(router)


/**
 * RUTA PARA PROBAR LOS ENDPOINTS EN SWAGGER
 * 
 * 
 * 
 * http://localhost:4201/docs/
 */
app.use('/docs', swaggerUI.serve,swaggerUI.setup(specs))


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


