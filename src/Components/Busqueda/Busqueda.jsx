import {React, useState, useEffect} from 'react'
import pokeApp  from '../Datos/Datos'

const Busqueda = () => {

  const [pkm, setPkm] = useState("")

  useEffect(() => {
    pokeApp(pkm);
  }, [pkm])
  

  const handleSearch = (e) => {
    
    e.preventDefault() 

    const pokemonBuscado = e.target.pokemon.value
    setPkm(pokemonBuscado)
    
    
    console.log(pokemonBuscado)

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