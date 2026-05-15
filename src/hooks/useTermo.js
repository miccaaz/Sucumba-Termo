import { useState } from 'react';

const useTermo = (solution) => {
  const [turn, setTurn] = useState(0)
  const [currentGuess, setCurrentGuess] = useState('')
  const [guesses, setGuesses] = useState([...Array(6)]) // cada item é um array de letras
  const [history, setHistory] = useState([]) // cada item é uma string
  const [isCorrect, setIsCorrect] = useState(false)
  const [usedKeys, setUsedKeys] = useState({}) //{a: 'green', b: "yellow, c: 'grey'}

  // mostrar o status de cada letra do palpite (verde, amarelo, cinza)
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
  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution.word ){
      setIsCorrect(true)
    }

    setGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses]
      newGuesses[turn] = formattedGuess
      return newGuesses
    })

    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess]
    })

    setTurn((prevTurn) => {
      return prevTurn + 1
    })

    setUsedKeys((prevUsedKeys) => {
      let newKeys = {...prevUsedKeys}

      formattedGuess.forEach((l) => {
        const currentColor = newKeys[l.key]

        if (l.color === 'green') {
          newKeys[l.key] = 'green'
          return
        }

        if (l.color === 'yellow' && currentColor !== 'green') {
          newKeys[l.key] = 'yellow'
          return
        }

        if (l.color === 'grey' && currentColor !== 'green' && currentColor !== 'yellow') {
          newKeys[l.key] = 'grey'
         return
        }
      })

      return newKeys
    })

    setCurrentGuess('')
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
      addNewGuess(formatted)
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

  return { turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyup }
}

export default useTermo