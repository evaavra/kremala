const GetWord = async () => {
    var result = await fetch("https://random-words-api.vercel.app/word")
      .catch(() => { alert("Something is currently wrong, please try again later")});
    let json = await result.json();
    return json[0].word;
}

export default GetWord;