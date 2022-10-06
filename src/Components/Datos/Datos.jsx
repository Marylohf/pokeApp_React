import {React, useState} from 'react'
import axios from 'axios'

const Datos = ({pokeSearch}) => {

    // console.log(pokeSearch)

    const Pokeapp = async () => {

        let baseUrl = 'https://pokeapi.co/api/v2/pokemon/'
    
        try {

            console.log(`${baseUrl}${pokeSearch.pkm}`)

            const response = await axios.get(`${baseUrl}${pokeSearch.pkm}`)
            const pokeData = await response.data  //Axios siempre devuelve un objeto, dentro de la key data se encuentra la respuesta de la api

            console.log(pokeData)
            
        } catch (error) {
            console.log(error)
        }
    
    }

  return (
    <div>

    </div>
  )
}

export default Datos