import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchCharacters } from '../../services/api'
import CharacterCard from '../CharacterCard/CharacterCard'
import Spinner from '../spinner/Spinner'
import './HouseCharacter.css'

const HouseCharacters = () => {
  const { houseName } = useParams()
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadCharacters = async () => {
      setLoading(true)
      try {
        const data = await fetchCharacters()
        const filtered = data.filter(
          (character) =>
            character.house.toLowerCase() === houseName.toLowerCase()
        )
        setCharacters(filtered)
      } catch (error) {
        setError('Error loading characters')
      } finally {
        setLoading(false)
      }
    }
    loadCharacters()
  }, [houseName])

  return (
    <div className='house-characters-container'>
      <h2>{houseName} Characters</h2>
      {loading && <Spinner />}
      <div className='house-characters-grid'>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  )
}

export default HouseCharacters
