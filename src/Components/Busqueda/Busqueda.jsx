import {React, useState} from 'react'
import Datos from "../Datos/Datos"

const Busqueda = ({loquemedalagana, edad}) => {

  const [pkm, setPkm] = useState("")
  const pokeSearch = {pkm, setPkm}

  // console.log(edad.edad)
  edad.setEdad(32)
  
  const handleSearch = (e) => {
    e.preventDefault()

    const pokemonBuscado = e.target.pokemon.value
    setPkm(pokemonBuscado)
    
    // console.log(pokemonBuscado)
  }


  return (
    <div className='cont-busqueda'>
      <form onSubmit={handleSearch}>
        <label htmlFor="pokemon">Busca tu pokemon</label>
        <input type="text" name="pokemon" />
        <button>Buscar</button>
      </form>
      <Datos pokeSearch={pokeSearch} />
    </div>
  )
}

export default Busqueda