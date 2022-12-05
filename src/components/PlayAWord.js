import Drawing from './Drawing';
import { Letters } from './Letters';
import Word from './Word';
import Header from './Header';
import BasicModal from './BasicModal';
import { useState } from 'react';
import GetWord from '../functions/GetWord';
import Transactions from '../functions/Transactions';

export default function PlayAWord({ searchingLetter, setSearchingLetterter, dashes, setDashes, wrongAnswers, setWrongAnswers,
  rightAnswers, setRightAnswers, firstLetter, setFirstLetter, missingLetters, setMissingLetters, lastLetter, setLastLetter,
  clickedLetters, setClickedLetters, clickedLettersRight, setClickedLettersRight, clickedLettersWrong, setClickedLettersWrong }) {
  const [isRight, setIsRight] = useState(false)
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = async () => {
    var word = await GetWord();
    Transactions(word, setFirstLetter, setLastLetter, setDashes, setMissingLetters);
    setIsClicked(true)
    setClickedLetters([])
    setClickedLettersRight([])
    setClickedLettersWrong([])
    setWrongAnswers(0)
    setRightAnswers(0)
  }
  return (
    <div className='App'>
      <div className='container'>
        <Header></Header>
        <button id="getAword" onClick={handleClick} className="btn btn-info">{isClicked ? "Get another word!" : "Get a word!"}</button>
        <div className='row'>
          <div className='col-md-4'>
            <Drawing wrongAnswers={wrongAnswers} rightAnswers={rightAnswers} className="drawing"></Drawing>
            <br /><br /><br />
          </div>
          <div className='col-md-8'>
            <br /><br /><br /><br />
            <Word searchingLetter={searchingLetter} setSearchingLetterter={setSearchingLetterter} dashes={dashes} setDashes={setDashes}
              wrongAnswers={wrongAnswers} setWrongAnswers={setWrongAnswers} rightAnswers={rightAnswers} setRightAnswers={setRightAnswers}
              firstLetter={firstLetter} missingLetters={missingLetters} lastLetter={lastLetter}
              setIsRight={setIsRight} clickedLettersWrong={clickedLettersWrong} setClickedLettersWrong={setClickedLettersWrong}
              clickedLettersRight={clickedLettersRight} setClickedLettersRight={setClickedLettersRight}></Word>
            <BasicModal wrongAnswers={wrongAnswers} setWrongAnswers={setWrongAnswers}
              rightAnswers={rightAnswers} setRightAnswers={setRightAnswers}
              firstLetter={firstLetter} missingLetters={missingLetters}
              lastLetter={lastLetter} dashes={dashes} setDashes={setDashes} setFirstLetter={setFirstLetter}
              setMissingLetters={setMissingLetters} setLastLetter={setLastLetter}
              setClickedLettersRight={setClickedLettersRight}
              setClickedLettersWrong={setClickedLettersWrong}
              clickedLetters={clickedLetters} setClickedLetters={setClickedLetters}
            ></BasicModal>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <Letters searchingLetter={searchingLetter} setSearchingLetterter={setSearchingLetterter} isRight={isRight}
              clickedLetters={clickedLetters} setClickedLetters={setClickedLetters}
              isClicked={isClicked} clickedLettersWrong={clickedLettersWrong} setClickedLettersWrong={setClickedLettersWrong}
              clickedLettersRight={clickedLettersRight} setClickedLettersRight={setClickedLettersRight}></Letters>
          </div>
        </div>
      </div>
    </div>

  )
}

