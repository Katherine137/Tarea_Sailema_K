import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ListaUsuario from './components/listausuario'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class ="lista">
      <ListaUsuario/> 
    </div>
    </>
  )
  //llama al jsx
}

export default App
