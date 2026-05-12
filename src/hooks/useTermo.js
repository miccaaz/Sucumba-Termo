import { useState } from 'react';

const useTermo = (solution) => {
  const [turn, setTurn] = useState(0)
  const [currentGuess, setCurrentGuess] = useState('')
  const [guesses, setGuesses] = useState([]) // cada item é um array de letras
  const [history, setHistory] = useState([]) // cada item é uma string
  const [isCorrect, setIsCorrect] = useState(false)

  // mostrar o status de cada letra do palpite (verde, amarelo, cinza)
  // e.g. [{key: 'a', color: 'yellow'}]
  const formatGuess = () => {
    let solutionArray = [...solution.word]
    let formattedGuess = [...currentGuess].map((l) => {
      return { key: l, color: 'grey' }
    })

    // achar letras verdes
    formattedGuess.forEach((l, i) => {
      if (solutionArray[i] === l.key) {
        formattedGuess[i].color = 'green'
        solutionArray[i] = null
      }
    })

    // achar letras amarelas
    formattedGuess.forEach((l, i) => {
      if (solutionArray.includes(l.key) && l.color !== 'green') {
        formattedGuess[i].color = 'yellow'
        solutionArray[solutionArray.indexOf(l.key)] = null
      }
    })

    return formattedGuess
  }

  // adicionar um novo palpite
  const addNewGuess = () => {

  }

  // lidar com eventos de teclado
  const handleKeyup = ({ key }) => {
    if (key === 'Enter') {
      // apenas adicionar palpite se o número de tentativas for menor que 5
      if (turn > 5) {
        console.log("Usou todas as tetativas");
        return
      }

      // não permitir palpite repetido
      if (history.includes(currentGuess)) {
        console.log("Palpite já usado");
        return
      }

      // checar se a palavra tem 5 letras
      if (currentGuess.length !== 5) {
        console.log("Palpite deve conter 5 letras");
        return
      }

      const formatted = formatGuess()
      console.log(formatted);
    }

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