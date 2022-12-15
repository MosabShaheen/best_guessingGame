#! /usr/bin/env node
import inquirer from "inquirer";
async function welcome() {
    console.clear();
    const user_name = await inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Enter User Name: ",
            default() {
                return "user";
            }
        }
    ]);
    console.clear();
    console.log("**********************\n");
    console.log(`${user_name.name}, Welocme to the Game\n`);
    console.log("Guess Number Between 1-10      \n");
    console.log("**********************\n");
}
async function guessingGame() {
    await welcome();
    let pcRandom = (Math.random());
    pcRandom *= 10;
    pcRandom += 1;
    pcRandom = Math.floor(pcRandom);
    for (let i = 0; i < 5; i++) {
        let a = 5 - i;
        console.log(`*** You have ${a} chances ***`);
        const userInput = await inquirer.prompt([
            {
                name: "InputNumber",
                type: "number",
                message: "Guess Number: "
            }
        ]);
        if (userInput.InputNumber == pcRandom) {
            console.log(`Congratulations! You have guessed the number: ${pcRandom}\n`);
            await playAgain();
            break;
        }
        else {
            if (a == 1) {
                console.log(`The number was: ${pcRandom}`);
                console.log("*** Game Over ***\n");
                await playAgain();
                break;
            }
            else {
                console.log("Try again\n");
            }
        }
    }
}
let play_againUser = false;
async function playAgain() {
    let askUser = await inquirer.prompt([
        {
            name: "playUser",
            type: "confirm",
            message: "Do you want to play again: "
        }
    ]);
    if (askUser.playUser == true) {
        play_againUser = true;
    }
    else if (askUser.playUser == false) {
        play_againUser = false;
    }
}
do {
    await guessingGame();
} while (play_againUser);
