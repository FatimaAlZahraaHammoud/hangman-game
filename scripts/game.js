// initialize
var wordList = ["developer", "computer", "mouse", "keyboard", "carrot", "student", "hangman", "javascript", "document"];
var answer_section = document.getElementById("answer-section");
var guessed_letters = [];
var answer_state = [];
var correct_letters = [];
var selected_word = "";
var start_new_game = "";

function getRandomWord(words){
    var randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

function startGame(){
    guessed_letters = [];
    correct_letters = [];
    resetBodyParts();
    selected_word = getRandomWord(wordList);
    console.log("SelectedWord", selected_word);
    initializeAnswerState(selected_word);
    updateDisplayedAnswer();

    document.querySelectorAll(".letter").forEach(letter =>{
            letter.addEventListener("click", () => handleLetter(letter.innerHTML));
        }
    )
}

function initializeAnswerState(selected_word){
    answer_state = Array(selected_word.length).fill("_ ");
    console.log(answer_state);
    updateDisplayedAnswer();
}

function updateDisplayedAnswer(){
    answer_section.innerHTML = answer_state.join("");
}

function handleLetter(letter){
    console.log(letter);
    if(!guessed_letters.includes(letter)){
        guessed_letters.push(letter);
        console.log("new letter")
        if(!selected_word.includes(letter.toLowerCase())){
            console.log(letter, "does not exist in the word");
            handleIfNotCorrect();
        }
        else{
            console.log(letter, " exists in the word");
            updateAnswer(letter, selected_word);
        }
    }
}

function updateAnswer(letter, selected_word){
    letter = letter.toLowerCase();
    for (var i = 0; i < selected_word.length; i++){
        if(selected_word[i].toLowerCase() === letter){
            answer_state[i] = letter.toUpperCase();
            correct_letters.push(letter);
            console.log(answer_state);
        }
    }
    if (correct_letters.length === selected_word.length){
        setTimeout(() =>{
            console.log("You Wins!");
            WinOrLose(true);
        })
        
    }
    console.log(answer_state);
    updateDisplayedAnswer();
}

function WinOrLose(isVictory){
    if(isVictory === false){
        alert("Oops, Try again. The correct word is: " + selected_word);

    }
    else{
        alert("Excellent!! You Wins! The word is: " + selected_word);
    }
    start_new_game = prompt("Start a new game?").toLowerCase();
    if (start_new_game === "yes"){
        startGame();
    }
    else{
        alert("Okay! Hope you nice day!");
    }
}

startGame();