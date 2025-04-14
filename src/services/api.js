console.log('hpAPI.js cargado')

export async function fetchCharacters() {
  try {
    const response = await fetch('https://hp-api.onrender.com/api/characters')

    if (!response.ok) {
      throw new Error(`Error en la respuesta de la API: ${response.statusText}`)
    }
    const data = await response.json()
    console.log('Datos de personajes:', data)
    return data
  } catch (error) {
    console.error('Error fetching characters:', error)
    return []
  }
}
