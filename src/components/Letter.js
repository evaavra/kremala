export function Letter({letter, setSearchingLetterter, clickedLetters, setClickedLetters, isClicked, clickedLettersRight,
    clickedLettersWrong}){

    const handleClick = (e) => {
        if(!isClicked) alert("Get a word to begin the game!")
        else if(clickedLetters.includes(letter)) handleStopClick();
        else{setSearchingLetterter(letter)
        var clLet = clickedLetters
        clLet.push(letter)
        setClickedLetters(clLet)
        console.log(clickedLetters)
        }
    }
    const handleStopClick = () => {
        alert("You already clicked this letter")
    }
    const setColor = () => {
        if(clickedLetters.includes(letter) && clickedLettersWrong.includes(letter)) return "btn btn-danger"
        if(clickedLetters.includes(letter) && clickedLettersRight.includes(letter)) return "btn btn-success"
        else return "btn btn-info"
    }
    return(
       <span >&nbsp;<button type="button" className={setColor()} onClick={handleClick}>{letter}&nbsp;</button>&nbsp;</span>
    )
    
}