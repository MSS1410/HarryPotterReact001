import React from 'react'
import { Link } from 'react-router-dom'
import './CharacterCard.css'

const CharacterCard = ({ character }) => {
  // Si character.image viene vacio, uso la imagen por defecto
  const imageSrc =
    character.image && character.image.trim() !== ''
      ? character.image
      : '/assets/default.jpg'

  return (
    <div className='character-card'>
      <Link to={`/character/${character.id}`}>
        <img src={imageSrc} alt={character.name} />
        <h3>{character.name}</h3>
      </Link>
      <p>{character.house}</p>
    </div>
  )
}

export default CharacterCard
