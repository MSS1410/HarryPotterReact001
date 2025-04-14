import React, { use, useEffect, useState } from 'react'
import { fetchCharacters } from '../../services/api'
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import Spinner from '../../components/spinner/Spinner'
import './AllCharacters.css'

const ITEMS_PER_PAGE = 20

const AllCharacters = () => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const loadCharacters = async () => {
      setLoading(true)
      try {
        const data = await fetchCharacters()
        setCharacters(data)
      } catch (error) {
        setError('Error loading All Characters ')
      } finally {
        setLoading(false)
      }
    }
    loadCharacters()
  }, [])

  //Numero de paginas en total
  const totalPages = Math.ceil(characters.length / ITEMS_PER_PAGE)

  //obtener los personajes de la pagina actual
  const paginatedCharacters = characters.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  return (
    <div className='all-characters'>
      <h2>All Characters</h2>
      {loading && <Spinner />}
      {error && <p className='error'>{error}</p>}
      <div className='characters-grid'>
        {paginatedCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      <div className='pagination'>
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default AllCharacters
