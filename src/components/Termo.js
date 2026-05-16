import React, { useEffect } from 'react'
import useTermo from '../hooks/useTermo'
import Grid from './Grid'
import Keypad from './Keypad'

const Termo = ({ solution }) => {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } = useTermo(solution)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup])

  useEffect(() => {
    console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect])

  return (
    <div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad usedKeys={usedKeys}/>
    </div>
  )
}

export default Termo