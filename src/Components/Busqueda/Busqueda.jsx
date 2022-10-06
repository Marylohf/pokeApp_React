import {React, useState} from 'react'

const Busqueda = ({loquemedalagana, edad}) => {

  const [pkm, setPkm] = useState("")

  console.log(edad.edad)
  edad.setEdad(32)
  
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