const choices = ["Rock", "Paper", "Scissors"];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultsDisplay = document.getElementById("resultsDisplay");

function playGame(playerChoice) {
    // Math.floor(Math.random) will generate a random result from the 3 options in the choices array
    const computerChoice = choices[Math.floor(Math.random() * 3)]; 
    // empty string because the results will vary
    let result = "";

    // if the playerChoice and computerChoice are the same the result is a tie
    if (playerChoice === computerChoice){
        result = "It's a tie!";
    } else {
        switch(playerChoice){
            case "Rock":
               result = (computerChoice === "Scissors") ? "You win!" : "You Lose!";
               break;
            case "Paper":
                result = (computerChoice === "Rock") ? "You win!" : "You Lose!";
                break;
            case "Scissors":
                    result = (computerChoice === "Paper") ? "You win!" : "You Lose!";
                    break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultsDisplay.textContent = result;

}
