import { useState } from 'react';

const useTermo = (solution) => {
  const [turn, setTurn] = useState(0)
  const [currentGuess, setCurrentGuess] = useState('')
  const [guesses, setGuesses] = useState([]) // cada item é um array de letras
  const [history, setHistory] = useState([]) // cada item é uma string
  const [isCorrect, setIsCorrect] = useState(false)

  // mostrar o status de cada letra do palpite (verde, amarelo, cinza)
  const formatGuess = () => {

  }

  // adicionar um novo palpite
  const addNewGuess = () => {

  }

  // lidar com eventos de teclado
  const handleKeyup = ({ key }) => {
    if (key === 'Backspace') {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1)
      })
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key.toLowerCase()
        })
      }
    }
  }

  return { turn, currentGuess, guesses, isCorrect, handleKeyup }
}

export default useTermo