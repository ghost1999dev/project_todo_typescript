import axios from 'axios'
import React from 'react'

export const Editar = ({item,conseguirListado}) => {
    const guardarEdicion=async(e,data)=>{
        e.preventDefault()  
        
        let target=e.target
        let nombreValue=target.nombre.value
        let descripcionValue=target.descripcion.value
        const dataObjeto={
            nombre:nombreValue,
            descripcion:descripcionValue,
            id:data._id
        }
        const url='http://localhost:4201/update'
        const response = await axios.put(url,dataObjeto)
        console.log(response);
        conseguirListado()
    }
  return (
    <div className="edit_form">
        <h3 className='title'>Editar pelicula</h3>
        <form onSubmit={
                e=>guardarEdicion(e,item)
            } >
            <input 
                type="text"
                name='nombre'
                defaultValue={item.nombre}
                />
            <textarea 
                name="descripcion" 
                id="descripcion" 
                defaultValue={item.descripcion}
                cols="30" 
                rows="10">
                
            </textarea>
            <input type="submit" className='editar' value="Actualizar" />
        </form>
    </div>
  )
}
