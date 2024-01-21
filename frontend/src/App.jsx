import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'


import { Listado } from './components/layout/Listado'
import { Crear } from './components/layout/Crear'

function App() {
 
  const [listadoState, setListadoState]=useState([]);


  useEffect(()=>{
    conseguirListado()
  },[])
  const conseguirListado=async ()=>{
    try {
      const response=await axios.get('http://localhost:4201/getAllRegister')
      console.log(response);
      setListadoState([response])
    } catch (error) {
      console.log('Ha ocurrido un error al traer el listado' + error);
    }
  }
  return (
    <>
      <div className='layout'>
        <header className='header'>
          <h1>TodoList</h1>
        </header>
        <nav className='nav'>
          <ul>
          </ul>
        </nav>
        <section className='content'>
          <Listado 
              listadoState={listadoState} 
              setListadoState={setListadoState}
              conseguirListado={conseguirListado} />
        </section>
        <aside className='lateral'>
          <Crear setListadoState={setListadoState} conseguirListado={conseguirListado}/>
        </aside>
        <footer className='footer'>
          &copy; 2024 - fernandoDev All rights reserved
        </footer>
      </div>
    </>
  )
}

export default App
