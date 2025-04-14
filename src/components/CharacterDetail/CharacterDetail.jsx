import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchCharacters } from '../../services/api'

import Spinner from '../spinner/Spinner'
import './characterDetail.css'

const CharacterDetail = () => {
  const { id } = useParams()
  const [character, setCharacter] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadCharacter = async () => {
      try {
        const data = await fetchCharacters()
        const found = data.find((character) => character.id === id)
        if (!found) {
          setError('character not found')
        } else {
          setCharacter(found)
        }
      } catch (error) {
        setError('error while obtain character data ')
      } finally {
        setLoading(false)
      }
    }
    loadCharacter()
  }, [id])

  if (loading) return <Spinner />
  if (error) return <p className='error'>{error}</p>
  if (!character) return <p className='error'>Can't find character </p>

  return (
    <div className='character-detail-container'>
      <img src={character.image} alt={character.name} />
      <div className='character-info'>
        <h1>{character.name}</h1>
        <p>
          <strong>House:</strong> {character.house}
        </p>

        <p>
          <strong>Ancestry:</strong> {character.ancestry || 'N/A'}
        </p>
        <p>
          <strong>Species:</strong> {character.species || 'N/A'}
        </p>
        <p>
          <strong>Gender:</strong> {character.gender || 'N/A'}
        </p>
        <p>
          <strong>Birth:</strong>{' '}
          {character.dateOfBirth || character.yearOfBirth || 'N/A'}
        </p>
        <p>
          <strong>Wand:</strong>{' '}
          {character.wand?.wood
            ? `${character.wand.wood} - ${character.wand.core}`
            : 'N/A'}
        </p>
        <p>
          <strong>Patronus:</strong> {character.patronus || 'N/A'}
        </p>
      </div>
    </div>
  )
}
export default CharacterDetail
