import React, { useEffect } from 'react'
import useTermo from '../hooks/useTermo'

const Termo = ({ solution }) => {
  const { currentGuess, handleKeyup } = useTermo(solution)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup])

  return (
    <div>
      <div>Palavra: {solution.word}</div>
      <div>Tentativa Atual: {currentGuess}</div>
    </div>
  )
}

export default Termo