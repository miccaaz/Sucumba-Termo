import React, { useEffect } from 'react'
import useTermo from '../hooks/useTermo'
import { logDOM } from '@testing-library/react'

const Termo = ({ solution }) => {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn } = useTermo(solution)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup])

  useEffect(() => {
    console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect])

  return (
    <div>
      <div>Palavra: {solution.word}</div>
      <div>Tentativa Atual: {currentGuess}</div>
    </div>
  )
}

export default Termo