class ComputerChoice {
    constructor(){
        this.digitChoice = Math.floor(Math.random() * 3);
        this.choice = "";
    }
    setChoice(){
        this.digitChoice = Math.floor(Math.random() * 3);
    }
    getChoice(){
        switch (this.digitChoice){
            case 0:
                this.choice = "Rock";
                break;
            case 1:
                this.choice = "Paper";
                break;
            case 2:
                this.choice = "Scissor";
                break;
        }
        return this.choice;
    }   
}

class PlayerChoice{
    constructor(){
        this.choice = "";
        this.outcome = "";
    }
    getChoice(){
        return this.choice;
    }
    getOutcome(){
        return this.outcome;
    }
    rockChoice(computer){
        switch (computer.getChoice()){
            case "Rock":
                this.outcome = "It's A Tie!";
                break;
            case "Paper":
                this.outcome = "You Lost!";
                break;
            case "Scissor":
                this.outcome = "You Won!";
                break;
        }
    }

    paperChoice(computer){
        switch (computer.getChoice()){
            case "Rock":
                this.outcome = "You Won!";
                break;
            case "Paper":
                this.outcome = "It's A Tie";
                break;
            case "Scissor":
                this.outcome = "You Lost";
                break;
        }
    }

    scissorChoice(computer){
        switch (computer.getChoice()){
            case "Rock":
                this.outcome = "You Lost";
                break;
            case "Paper":
                this.outcome = "You Won!";
                break;
            case "Scissor":
                this.outcome = "It's A Tie";
                break;
        }
    }
}
let computer = new ComputerChoice;
let player = new PlayerChoice;

document.getElementById("rock").onclick = computer.getChoice(), player.rockChoice(computer);
document.getElementById("paper").onclick = computer.getChoice(), player.paperChoice(computer);
document.getElementById("scissor").onclick = computer.getChoice(), player.scissorChoice(computer);

let result = document.createElement('div');
result.innerText = `Player chose ${player.getChoice}, Computer chose ${computer.getChoice}. ${player.getOutcome}`;
document.getElementById("header-result").innerText = "The Results Are In"
document.getElementById("header-result").append(result);
