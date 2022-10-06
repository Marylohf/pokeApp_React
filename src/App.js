import { useState } from 'react';
import './App.css';
import Busqueda from './Components/Busqueda/Busqueda';
import Tarjeta from './Components/Tarjeta/Tarjeta';

function App() {

  const [edad, setEdad] = useState(31)
  const objeto = {edad, setEdad}

  let datos = "hola"

  return (
    <div className="App">
      <Busqueda loquemedalagana={datos} edad={objeto} />
    </div>
  );
}



export default App;
