import React, { useEffect } from 'react'
import useTermo from '../hooks/useTermo'
import Grid from './Grid'

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
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
    </div>
  )
}

export default Termo