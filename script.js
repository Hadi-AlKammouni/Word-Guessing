const inputs = document.querySelector(".inputs"),
reset_btn = document.querySelector(".reset-btn")

function randomWord() {
    // getting random object from the wordList list
    let ran_obj = wordList[Math.floor(Math.random() * wordList.length)]
    let word = ran_obj.word

    // creating number of empty boxes equal to the word length
    let html = ""
    for(let i=0; i < word.length; i++) {
        html += '<input type="text" disabled>'
    }
    inputs.innerHTML = html
}

randomWord()

reset_btn.addEventListener("click", randomWord)