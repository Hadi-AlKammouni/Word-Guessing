const inputs = document.querySelector(".inputs"),
reset_btn = document.querySelector(".reset-btn"),
hint = document.querySelector(".hint span"),
typing_input = document.querySelector(".typing-input")

function randomWord() {
    // getting random object from the wordList list
    let ran_obj = wordList[Math.floor(Math.random() * wordList.length)]
    let word = ran_obj.word

    hint.innerText = ran_obj.hint

    // creating number of empty boxes equal to the word length
    let html = ""
    for(let i=0; i < word.length; i++) {
        html += '<input type="text" disabled>'
    }
    inputs.innerHTML = html
}

randomWord()

function initGame(e) {
    let key = e.target.value
    console.log(key)
}

reset_btn.addEventListener("click", randomWord)
typing_input.addEventListener("input", initGame)
document.addEventListener("keydown", () => typing_input.focus())