import { Request,Response } from "express";
import TodoList from '../models/datos'
import { serialize } from "v8";

export const create= async (req:Request,res:Response)=>{

    try {
       const todoListData=new TodoList(req.body);
       await todoListData.save()

       res.status(200).send({
            message:"Se guardo correctamente la nota",
            data:todoListData
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
        const {nombre,descripcion,id}=req.body

        let dataObjeto={
            nombre,
            descripcion,
            id
        }
        console.log(dataObjeto);
        
        //const dataResponse=await TodoList.findOne({nombre:nombre})
        const dataResponse =await TodoList.findOneAndUpdate({_id:id},dataObjeto,{new:true});
        
        res.status(200).send(
            dataResponse
        )
    } catch (error) {
        res.status(501).send({
            message:"Ocurrio un error al editar los datos",
            error:error
        })
    }
}

export const deleteRegister=async(req:Request,res:Response)=>{
    try {
        const {nombre}=req.params;
        console.log(nombre);
        

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
        res.status(200).send(
            getData
        )
    } catch (error) {
        res.status(500).send({
            message:"Ha ocurrido un error al traer los datos",
            error:error
        })
    }
}





