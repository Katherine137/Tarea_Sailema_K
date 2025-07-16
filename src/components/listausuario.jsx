import React, { useEffect, useState } from 'react';
// se importa el useEffect para ejecutar el codigo y el useState para guardar los datos
function ListaUsuario() {
  const [usuario, setUsuario] = useState([]);
  // creamos una funcion (componente) como ListaUsuario con constantes usuario y set usuario

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsuario(data));
  }, []);
  // useEffect se enpieza a ejecutar eel codigo, en el fetch se pide al link los datos 
  // cuando los datos se procesan correctamente se los transforman a json
  // cuando ya se tienen los datos se los guarda con el setUsuario y solo se ejecuta una vez.

  return (
    <div>
      <h1>Lista de Usuarios</h1> 
      <ul>
        {usuario.map((usuario) => (
          <li key={usuario.id}>
            <span class = "n">{usuario.name}</span> - {usuario.email}
          </li>
        ))}
      </ul>
    </div>
  );
  // h1 titulo, usuario.map crea una lista
  // key sirve para que el react identifique los elementos 
  // strong muestra en negrita el nombre de usuario
}
export default ListaUsuario;