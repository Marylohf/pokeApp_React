import axios from 'axios'
   
  const Pokeapp = async (busqueda) => {

      let baseUrl = 'https://pokeapi.co/api/v2/pokemon/'
  
      try {

          console.log(`${baseUrl}${busqueda}`)

          const response = await axios.get(`${baseUrl}${busqueda}`)
          const pokeData = await response.data  //Axios siempre devuelve un objeto, dentro de la key data se encuentra la respuesta de la api

          console.log(pokeData)
          
      } catch (error) {
          console.log(error)
      }
  
  }


export default Pokeapp