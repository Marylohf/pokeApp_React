import {React, useState} from 'react'

const Datos = () => {

    const Pokeapp = async () => {

        let baseUrl = 'https://pokeapi.co/api/v2/pokemon/'
    
        try {
    
            const response = await axios.get(`${baseUrl}/`)
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