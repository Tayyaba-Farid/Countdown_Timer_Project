#! /usr/bin/env node
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
import chalk from "chalk";
let { userInput } = await inquirer.prompt([
    {
        name: "userInput",
        type: "number",
        message: "Enter the duration in Seconds: ",
        validate: (input) => {
            if (isNaN(input)) {
                return "Please enter valid number";
            }
            else if (input > 60) {
                return "Seconds must be less than 60";
            }
            else {
                return true;
            }
        },
    },
]);
let seconds = userInput;
console.log(chalk.blueBright.italic("The countdown Timer has been started!"));
console.log(chalk.blueBright.italic("Press Ctrl + C to exit"));
function Timer(seconds) {
    let startTime = new Date().setSeconds(new Date().getSeconds() + seconds + 2);
    let exactStartTime = new Date(startTime);
    setInterval(() => {
        const currentTime = new Date();
        let timeDiff = differenceInSeconds(exactStartTime, currentTime);
        if (timeDiff <= 0) {
            console.log("00:00");
            console.log("Timer has expired!");
            process.exit();
        }
        const min = Math.floor(timeDiff / 60);
        const sec = Math.floor(timeDiff % 60);
        console.log(`${min.toString().padStart(2, "0")}: ${sec.toString().padStart(2, "0")}`);
    }, 1000);
}
Timer(seconds);
