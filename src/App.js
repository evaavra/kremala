import './App.css';
import { useState } from 'react';
import PlayAWord from './components/PlayAWord';

function App() {
  
  const [searchingLetter, setSearchingLetterter] = useState("");
  const [dashes, setDashes] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [rightAnswers, setRightAnswers] = useState(0);
  const [firstLetter,setFirstLetter] = useState(""); 
  const [missingLetters, setMissingLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState("");
  const [clickedLetters, setClickedLetters] = useState([]);
  const [clickedLettersRight, setClickedLettersRight] = useState([]);
  const [clickedLettersWrong, setClickedLettersWrong] = useState([]);
  
  return(
    <div>
    <PlayAWord searchingLetter={searchingLetter} setSearchingLetterter={setSearchingLetterter} dashes={dashes} setDashes={setDashes} wrongAnswers={wrongAnswers} 
    setWrongAnswers={setWrongAnswers} rightAnswers={rightAnswers} setRightAnswers={setRightAnswers} firstLetter={firstLetter} 
    setFirstLetter={setFirstLetter} missingLetters={missingLetters} setMissingLetters={setMissingLetters} lastLetter={lastLetter} 
    setLastLetter={setLastLetter} clickedLetters={clickedLetters} setClickedLetters={setClickedLetters} clickedLettersWrong={clickedLettersWrong} 
    setClickedLettersWrong={setClickedLettersWrong} clickedLettersRight={clickedLettersRight} 
    setClickedLettersRight={setClickedLettersRight}></PlayAWord>
    </div>
  )
}
export default App;

