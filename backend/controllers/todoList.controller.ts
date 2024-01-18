import { Request,Response } from "express";
import TodoList from '../models/datos'
import { serialize } from "v8";

export const create= async (req:Request,res:Response)=>{

    try {
       const todoListData=new TodoList(req.body);
       await todoListData.save()

       res.status(200).send({
        message:"Se guardo correctamente la nota",

       })
    } catch (error) {

        res.status(501).send({
            message:"Hubo un error al guardar la nota",
            error:error
        })
        
    }
}

export const update =async(req:Request,res:Response)=>{

    try {
        const {nombre}=req.body
        const dataResponse=await TodoList.findOne({nombre:nombre})

        res.status(200).send({
            message:"Registro actualizado con exito",
            data:dataResponse
        })
    } catch (error) {
        res.status(501).send({
            message:"Ocurrio un error al editar los datos",
            error:error
        })
    }
}

export const deleteRegister=async(req:Request,res:Response)=>{
    try {
        const {nombre}=req.body;

        const deletedTodoList=await TodoList.findOneAndDelete({nombre:nombre})
        if (!deletedTodoList) {
            return res.status(404).send({
                message:"Registro no fue encontrado"
            })
            
        }
        
        res.status(200).send({
            message:"Registro eliminado con exito"
        })
    } catch (error) {

        res.status(501).send({
            message:"Ha ocurrido un error al eliminar el registro",
            error:error
        })
        
    }
}

export const getAllRegister=async(req:Request,res:Response)=>{
    try {
        const getData=await TodoList.find()
        res.status(200).send({
            message:"Registro encontrado con exito",
            data:getData
        })
    } catch (error) {
        res.status(500).send({
            message:"Ha ocurrido un error al traer los datos",
            error:error
        })
    }
}





