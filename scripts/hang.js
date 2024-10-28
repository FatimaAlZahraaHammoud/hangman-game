var body_parts = [
    {id: "head", className: "head", src: "./assets/head.svg"},
    {id: "body", className: "body", src: "./assets/body.svg"},
    {id: "left-hand", className: "left-hand", src: "./assets/left-hand.svg"},
    {id: "right-hand", className: "right-hand", src: "./assets/right-hand.svg"},
    {id: "left-leg", className: "left-leg", src: "./assets/left-leg.svg"},
    {id: "right-leg", className: "right-leg", src: "./assets/right-leg.svg"},
];

var wrong_guesses = 0;
var number_of_guesses = 6;


function initBodyParts(){
    var hangContainer = document.getElementById("hang");
    body_parts.forEach(part =>{
        var img_element = document.createElement("img");
        img_element.id = part.id;
        img_element.className = part.className;
        img_element.src = part.src;
        img_element.style.display =  "none";
        hangContainer.appendChild(img_element);
    });
}

function showNextBodyPart() {
    if (wrong_guesses < body_parts.length) {
        var current_part = body_parts[wrong_guesses];
        console.log(wrong_guesses);
        var img_element = document.getElementById(current_part.id);
        img_element.style.display = "block";
        wrong_guesses++;
        console.log(wrong_guesses);
        if(wrong_guesses >= number_of_guesses){
            setTimeout(() => {
                console.log("You lose!");
                WinOrLose(false);
            });
        }
    }
}

function handleIfNotCorrect() {
    initBodyParts();
    showNextBodyPart();
}

function resetBodyParts(){
    wrong_guesses = 0;
    body_parts.forEach(part =>{
        var img_element = document.getElementById(part.id);
        if(img_element){
            img_element.style.display = "none";
        }
    })
}