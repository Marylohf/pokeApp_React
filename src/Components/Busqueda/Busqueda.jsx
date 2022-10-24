import {React, useState} from 'react'
import Pokeapp  from '../Datos/Datos'

const Busqueda = () => {

  const [pkm, setPkm] = useState("")

  // console.log(edad.edad)
  const handleSearch = (e) => {
    
    e.preventDefault()

    const pokemonBuscado = e.target.pokemon.value
    setPkm(pokemonBuscado)

    console.log(pkm)
    
    Pokeapp(pkm);
    console.log(pkm)

    // console.log(pokemonBuscado)
  }


  return (
    <div className='cont-busqueda'>
      <form onSubmit={handleSearch}>
        <label htmlFor="pokemon">Busca tu pokemon</label>
        <input type="text" name="pokemon" />
        <button>Buscar</button>
      </form>
    </div>
  )
}

export default Busqueda