const Transactions = (newWord, setFirstLetter, setLastLetter, setDashes, setMissingLetters) => {
    var len = [];
    var fl = newWord[0]
    var ll = newWord[newWord.length - 1].toUpperCase()
    var mlw = newWord.slice(1, -1).toUpperCase()
    var ml = [...mlw]
    var num = ml.length
    for (var i = 0; i < num; i++) {
      len.push(" _ ")
    }
    setFirstLetter(fl);
    setLastLetter(ll);
    setDashes(len);
    setMissingLetters(ml)
  }

  export default Transactions;