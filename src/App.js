import { useState } from 'react';
import './App.css';
import Busqueda from './Components/Busqueda/Busqueda';
import Tarjeta from './Components/Tarjeta/Tarjeta';

function App() {

  let datos = "hola"

  return (
    <div className="App">
      <Busqueda loquemedalagana={datos} />
    </div>
  );
}



export default App;
