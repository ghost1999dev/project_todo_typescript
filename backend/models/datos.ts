import {model,Schema,Document} from 'mongoose'

export interface TodoList extends Document{
    nombre: string;
    descripcion?: string;
    completado?:boolean;
    fechaCreacion?:Date;
}
const todoListSchema=new Schema({
    nombre:{
        type: String,
        unique:true,
        required:true,
        
    },
    descripcion:{
        type:String,
        required:false,
    },
    completado:{
        type:Boolean,
        default:false
    },
    fechaCreacion:{
        type:Date,
        default:Date.now,
    }
})

export default model<TodoList>('TodoList',todoListSchema)