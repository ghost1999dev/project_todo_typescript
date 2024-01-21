import React, { useState } from 'react'
import axios from 'axios'

export const Crear = ({setListadoState,conseguirListado}) => {
   const titulo = "Crear una nueva tarea"
   const [todoListState,setTodoListState]=useState({
        nombre:'',
        descripcion:'',
        completado:''
   })
   const conseguirDatosForm=async(e)=>{

        try {
                e.preventDefault();
                let target=e.target;
                let nombre=target.nombre.value
                let descripcion=target.descripcion.value;
                let completado=true


                let todoList={
                nombre,
                descripcion,
                completado
                }

                setTodoListState(todoList);
                
                const response = await axios.post('http://localhost:4201/save', todoList)
                conseguirListado()
        } catch (error) {
           console.log('Ocurrio un error ' + error);       
        }
   }
  return (
    <div className='add'>

        <h3 className='title'>{titulo}</h3>

        {console.log(todoListState.nombre)}
        <strong>
          
        </strong>
        <form onSubmit={conseguirDatosForm}>
            <input  type="text" 
                    id='nombre'
                    name='nombre'
                    placeholder='Titulo' />
            <textarea 
                    name="descripcion" 
                    id="descripcion" 
                    cols="30" 
                    rows="10">

            </textarea>

            <input type="submit"
                    id='save'
                    value="Guardar"
             />
            
           
        </form>

    </div>
  )
}
