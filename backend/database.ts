import mongoose from 'mongoose'
import config from './config/config'
import { error } from 'console';

mongoose.connect(config.DB.URI);

const connection= mongoose.connection;

connection.once('open',()=>{
    console.log('Mongodb conectado correctamente');
    
})

connection.on('error',error=>{
    console.log(error);
    process.exit(0)
    
})

