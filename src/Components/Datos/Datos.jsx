import axios from 'axios'
   
  const pokeApp = async (busqueda) => {

      let baseUrl = 'https://pokeapi.co/api/v2/pokemon/'
  
      if (busqueda !== "") {
        try {

          console.log(`${baseUrl}${busqueda}`)

          const response = await axios.get(`${baseUrl}${busqueda}`)
          const pokeData = await response.data  //Axios siempre devuelve un objeto, dentro de la key data se encuentra la respuesta de la api

          console.log(pokeData)
          
        } catch (error) {
            console.log(error)
        }
      }


  
  }


export default pokeApp