import { Letter } from "./Letter";

export function Letters({searchingLetter, setSearchingLetterter,isRight, clickedLetters, setClickedLetters, isClicked, clickedLettersRight,
setClickedLettersRight, clickedLettersWrong, setClickedLettersWrong}) {
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", 
    "W", "X", "Y", "Z"];
    return(
        letters.map((letter) => <Letter key={letter} isRight={isRight} letter={letter} searchingLetter={searchingLetter} 
        setSearchingLetterter={setSearchingLetterter} clickedLetters={clickedLetters} setClickedLetters={setClickedLetters} isClicked={isClicked}
        clickedLettersWrong={clickedLettersWrong} setClickedLettersWrong={setClickedLettersWrong}
        clickedLettersRight={clickedLettersRight} setClickedLettersRight={setClickedLettersRight}/>)
    )
}
