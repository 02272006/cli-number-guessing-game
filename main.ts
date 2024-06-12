#! /usr/bin/env node
// installations
import inquirer from "inquirer";
import chalk from "chalk";

// printing a wlcm message:
console.log (chalk.blueBright.bold("\t\n WELCOME TO (mu5f1r-cli-number-guessing-game) \n"));
// makin a func:
const randnumber = Math.floor(Math.random() * 5 + 1);
const ans = await inquirer.prompt(
    [
        {
            name :"userGuessnumber",
            type : "number",
            message : 
            chalk.whiteBright.italic("Enter a number your guessed! (Numbers limit: 1 to 5)"),
        }
    ]
);
// using if/else staement:
if (ans.userGuessnumber === randnumber){
    console.log (
        chalk.greenBright.italic("Bravo! You guessed the right number! :)")
    );
}
else {
    console.log (
        chalk.redBright.italic("Uh oh! You guessed the wrong number, try again!")
    );
}
