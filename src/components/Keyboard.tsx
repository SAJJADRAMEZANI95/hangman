import styles from "../Keywords.module.css"
const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]
type KeyboardProps={
  disable?:boolean
  activeLetter : string[]
  inactiveLetter:string[]
  addGuesstedLetter:(letter : string)=> void
}
const Keyboard = ({activeLetter,inactiveLetter,addGuesstedLetter,disable = false}:KeyboardProps) => {
  return (
    <div style={{
      display:"grid",
      gridTemplateColumns:"repeat(auto-fit , minmax(75px,1fr))",
      gap:"0.5rem"
    }}>
      {
        KEYS.map((key)=>{
          const isActive = activeLetter.includes(key);
          const isInActive = inactiveLetter.includes(key)
          return (
          <button onClick={()=>addGuesstedLetter(key)} className={`${styles.btn} 
          ${isActive ? styles.active : ""} 
          ${isInActive ? styles.inactive:""}`} disabled={isActive || isInActive || disable}>{key}</button>
          )
        })
      }
    </div>
  )
}

export default Keyboard
