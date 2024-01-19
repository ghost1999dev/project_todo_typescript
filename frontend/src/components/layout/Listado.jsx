import React from 'react'

export const Listado = () => {
  return (
    <>
        <article className='peli-item'>
            <h3 className='title'>Tarea 1</h3>
            <p className='descripcion'>Inspeccionar codigo</p>
            <button className='edit'>Editar</button>
            <button className='delete'>Eliminar</button>
            
        </article>
        <article className='peli-item'>
            <h3 className='title'>Tarea 2</h3>
            <p className='descripcion'>Probar el codigo</p>
            <button className='edit'>Editar</button>
            <button className='delete'>Eliminar</button>
            
        </article>
        <article className='peli-item'>
            <h3 className='title'>Tarea 3</h3>
            <p className='descripcion'>Produccion</p>

            <button className='edit'>Editar</button>
            <button className='delete'>Eliminar</button>
            
        </article>
    
    </>
  )
}
