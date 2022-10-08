const inputs = document.querySelector(".inputs"),
reset_btn = document.querySelector(".reset-btn"),
hint = document.querySelector(".hint span"),
typing_input = document.querySelector(".typing-input")

let word;

function randomWord() {
    // getting random object from the wordList list
    let ran_obj = wordList[Math.floor(Math.random() * wordList.length)]
    word = ran_obj.word

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
    if(key.match(/^[A-Za-z]+$/)) {
        if(word.includes(key)) {
            // displaying the matching letter
            for(let i=0; i<word.length; i++) {
                if(word[i] === key) {
                    inputs.querySelectorAll("input")[i].value = key
                }
            }
        } else {
            console.log("letter not found")
        }
    }
    typing_input.value = ""
}

reset_btn.addEventListener("click", randomWord)
typing_input.addEventListener("input", initGame)
document.addEventListener("keydown", () => typing_input.focus())