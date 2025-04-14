import React from 'react'
import { fetchCharacters } from '../../services/api'
import SearchBar from '../../components/SearchBar/SearchBar'
import CharacterCard from '../../components/CharacterCard/CharacterCard'
// import HouseCard from '../../components/HouseCard/HouseCard'
import Spinner from '../../components/spinner/Spinner'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const houses = [
  { name: 'Gryffindor', image: '/assets/gryffindor.jpg' },
  { name: 'Hufflepuff', image: '/assets/hufflepuff.jpg' },
  { name: 'Ravenclaw', image: '/assets/ravenclaw.jpg' },
  { name: 'Slytherin', image: '/assets/slytherin.jpg' }
]

const Home = () => {
  console.log('home montado')
  // Usaremos solo un arreglo para los álbumes populares por ahora
  const [allCharacters, setAllCharacters] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const loadCharacters = async () => {
      setLoading(true)

      try {
        const data = await fetchCharacters()
        setAllCharacters(data)

        console.log('Total characters:', data.length)
      } catch (error) {
        setError('error loading characters')
      } finally {
        setLoading(false)
      }
    }
    loadCharacters()
  }, [])

  const displayedCharacters = searchTerm
    ? allCharacters.filter((character) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allCharacters.slice(0, 10)

  // Calculamos, para cada casa, cuántos personajes pertenecen
  const houseCounts = houses.map((house) => {
    const count = allCharacters.filter(
      (character) => character.house === house.name
    ).length
    return { ...house, count }
  })

  return (
    <div className='home'>
      {/* fila 1 header con searchbar y seeall */}

      <div className='header-row'>
        <SearchBar onSearch={setSearchTerm} />
        <Link to='/characters' className='see-all-button'>
          See All Characters
        </Link>
      </div>

      {/* fila 2 principals characters */}
      <section className='principals-section'>
        <h2>{searchTerm ? 'Search Results' : 'Principals Characters'}</h2>
        {loading && <Spinner />}
        {error && <p className='error'>{error}</p>}
        <div className='principals-grid'>
          {displayedCharacters.map((character) => (
            <CharacterCard key={character.name} character={character} />
          ))}
        </div>
      </section>
      {/* fila 3 Houses */}
      <section className='houses-section'>
        <h2>Houses</h2>
        <div className='houses-row'>
          {houseCounts.map((house) => (
            <Link key={house.name} to={`/house/${house.name}`}>
              <div key={house.name} className='house-card'>
                <img src={house.image} alt={house.name} />
                <p>{house.name}</p>
                <p className='house-count'>{house.count} characters</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
