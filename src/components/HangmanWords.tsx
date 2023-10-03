type HangmanDrawingProps={
  guessedLetters:string[]
  wordToGuess:string
  reveal?:boolean
}
const HangmanWords = ({guessedLetters,wordToGuess,reveal=false}:HangmanDrawingProps) => {
  return (
    <div style={{
      display:"flex",
      gap:"0.25em",
      fontFamily:"monospace",
      fontWeight:"bold",
      textTransform:"uppercase",
      fontSize:"6rem"
    }}>
      {
        wordToGuess.split("").map((letter:string,index:number)=>{
          return <span style={{borderBottom:"0.1em solid black"}} key={index}>
            <span style={{
              visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
              color:!guessedLetters.includes(letter) && reveal ? "red" : "black"
            }}>
                {letter}
            </span>
            </span>
        })
      }
    </div>
  )
}

export default HangmanWords
