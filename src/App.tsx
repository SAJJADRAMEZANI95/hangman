import { useEffect, useState } from 'react'
import './App.css'
import words from './wordList.json'
import HangmanDrawing from './components/HangmanDrawing'
import HangmanWords from './components/HangmanWords'
import Keyboard from './components/Keyboard'

function App() {
  const [wordToGuess, setWordToGuess] = useState(
    ()=>{
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetters,setGuessedLetters] = useState<string[]>([])
  const incorrectLetter = guessedLetters.filter(letter=>{
    return !wordToGuess?.includes(letter)
  })

  useEffect(()=>{
    const handler = (e:KeyboardEvent)=>{
      const key = e.key;
      if(!key.match(/^[a-z]$/)) return
      if(isLoser || isWinner) return
      e.preventDefault();
      addGuessedLetters(key)
    }

    document.addEventListener("keypress",handler)
    return ()=>{document.removeEventListener("keypress",handler)} 
  },[guessedLetters])

  const addGuessedLetters=(letter : string)=> {
    if(guessedLetters.includes(letter)) return

    setGuessedLetters(prevLetter => [...prevLetter,letter])
  }
  const isLoser = incorrectLetter.length >= 6 ;
  const isWinner = wordToGuess.split("").every(letter=>
    guessedLetters.includes(letter));
  return (
    <div className='container'>
     <div className='title'>
      {isWinner && "Winner! - refresh to try again"}
      {isLoser && "Nice Try! - refresh to try again"}
      </div>
     <HangmanDrawing nubmberOfGuesses={incorrectLetter.length}/>
     <HangmanWords guessedLetters={guessedLetters} wordToGuess={wordToGuess} reveal={isLoser}/>
     <div style={{alignSelf:"stretch"}}>
      <Keyboard disable={isLoser||isWinner} activeLetter={guessedLetters.filter(letter=>
        wordToGuess.includes(letter)
      )} inactiveLetter={incorrectLetter} addGuesstedLetter={addGuessedLetters}/>
     </div>
    </div>
  )
}

export default App
