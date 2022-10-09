const inputs = document.querySelector(".inputs"),
reset_btn = document.querySelector(".reset-btn"),
hint = document.querySelector(".hint span"),
guesses_left = document.querySelector(".guess-left span"),
wrong_letter = document.querySelector(".wrong-letter span"),
typing_input = document.querySelector(".typing-input")

let word, max_guesses, corrects = [], incorrects = []

function randomWord() {
    // getting random object from the wordList list
    let ran_obj = wordList[Math.floor(Math.random() * wordList.length)]
    word = ran_obj.word
    max_guesses = 8
    corrects = []
    incorrects = []

    hint.innerText = ran_obj.hint
    guesses_left.innerText = max_guesses
    wrong_letter.innerText = incorrects

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
    if(key.match(/^[A-Za-z]+$/) && !incorrects.includes(` ${key}`) && !corrects.includes(key)) {
        if(word.includes(key)) {
            // displaying the matching letter
            for(let i=0; i<word.length; i++) {
                if(word[i] === key) {
                    corrects.push(key)
                    inputs.querySelectorAll("input")[i].value = key
                }
            }
        } else {
            max_guesses--
            incorrects.push(` ${key}`)
        }
        wrong_letter.innerText = incorrects
        guesses_left.innerText = max_guesses
    }

    typing_input.value = ""

    if(max_guesses < 1) {
        alert("Game over! Try again.")
        for (let i=0; i < word.length; i++) {
            inputs.querySelectorAll("input")[i].value = word[i]
        }
    }
}

reset_btn.addEventListener("click", randomWord)
typing_input.addEventListener("input", initGame)
document.addEventListener("keydown", () => typing_input.focus())