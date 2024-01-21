import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({setListadoState,listadoState,conseguirListado}) => {
  //const [listadoState, setListadoState]=useState([]);
  const [editar,setEditar]=useState(0)
  const borrarList=async(nombre)=>{
    try {

      
      const response = await axios.delete(`http://localhost:4201/delete/${nombre}`)

      conseguirListado()
    } catch (error) {
      console.log("Ha ocurrido un error" + error);
      
    }
  }
  return (
    <>
      {listadoState.map((component) => (
        // Si listadoState es un array y component.data es un array
        component.data.map((item) => (
          <article key={item._id} className='peli-item'>
            <h3 className='title'>{item.nombre}</h3>
            <h3 className='descripcion'>{item.descripcion}</h3>
            
            <button className='edit' onClick={ ()=>{
                console.log('presionar');
                setEditar(item._id);
            }}>Editar</button>
            <button className='delete' onClick={()=>borrarList(item.nombre)}>Eliminar</button>

            {/**FORMULARIO EDITAR LISTA */}
            {editar ===item._id && (
              <Editar item={item} conseguirListado={conseguirListado}/>
            )}

          </article>
        ))
      ))}
    </>
  );
}
