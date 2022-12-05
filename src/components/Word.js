import { useEffect } from 'react';

export default function Word({ searchingLetter, setSearchingLetterter, dashes, setDashes, wrongAnswers, setWrongAnswers,
    firstLetter, lastLetter, missingLetters, rightAnswers, setRightAnswers, setIsRight, setClickedLettersWrong,
    setClickedLettersRight, clickedLettersRight, clickedLettersWrong }) {
    useEffect(() => {
        if (searchingLetter !== "") {
            if (missingLetters.includes(searchingLetter)) {
                var indices = [];
                for (var i = 0; i < missingLetters.length; i++) {
                    if (missingLetters[i] === searchingLetter) indices.push(i);
                }
                let mls = dashes;
                for (var y = 0; y < indices.length; y++) {
                    mls.splice(indices[y], 1, searchingLetter);
                }
                setDashes(mls);
                let rAn = rightAnswers + indices.length;
                setRightAnswers(rAn);
                setIsRight(true)
                var clLetRight = clickedLettersRight
                clLetRight.push(searchingLetter)
                setClickedLettersRight(clLetRight)
            } else {
                let wrAn = wrongAnswers + 1;
                setWrongAnswers(wrAn)
                setIsRight(false)
                var clLetWrong = clickedLettersWrong
                clLetWrong.push(searchingLetter)
                setClickedLettersWrong(clLetWrong)
            }
            setSearchingLetterter("")
        }
    })
    return (
        <div>
            <span id="fL">{firstLetter}</span>
            <span id="mLs">{dashes}</span>
            <span id="lL">{lastLetter}</span>
            <div>{searchingLetter}</div>
        </div>
    )
}