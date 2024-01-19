import { useState } from 'react'

import './App.css'


import { Listado } from './components/layout/Listado'
import { Crear } from './components/layout/Crear'

function App() {
 

  return (
    <>
      <div className='layout'>
        <header className='header'>
          <h1>TodoList</h1>
        </header>
        <nav className='nav'>
          <ul>
            <li><a href="#">Link1</a></li>
            <li><a href="#">Link1</a></li>
            

          </ul>
        </nav>
        <section className='content'>
          <Listado></Listado>
        </section>
        <aside className='lateral'>
          <Crear></Crear>
        </aside>
        <footer className='footer'>
          &copy; 2024 - fernandoDev All rights reserved
        </footer>
      </div>
    </>
  )
}

export default App
