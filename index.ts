#! /usr/bin/env node
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
import chalk from "chalk";

let answer = await inquirer.prompt([
  {
    name: "option",
    type: "list",
    message: "Please choose your Countdown unit timer: ",
    choices: ["seconds", "minutes", "hours"],
  },
]);

if (answer.option === "seconds") {
  let { userInput } = await inquirer.prompt([
    {
      name: "userInput",
      type: "number",
      message: "Enter the duration in Seconds: ",
      validate: (input) => {
        if (isNaN(input)) {
          return "Please enter valid number";
        } else if (input > 60) {
          return "Seconds must be less than 60";
        } else {
          return true;
        }
      },
    },
  ]);

  let seconds = userInput;
  console.log(chalk.blueBright.italic("The countdown Timer has been started!"));
  console.log(chalk.blueBright.italic("Press Ctrl + C to exit"));

  function Timer(seconds: number) {
    let startTime = new Date().setSeconds(
      new Date().getSeconds() + seconds + 2
    );
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
      console.log(
        `${min.toString().padStart(2, "0")}: ${sec.toString().padStart(2, "0")}`
      );
    }, 1000);
  }
  Timer(seconds);
} else if (answer.option === "minutes") {
  let { userInput } = await inquirer.prompt([
    {
      name: "userInput",
      type: "number",
      message: "Please enter your duration in Minutes: ",
      validate: (input) => {
        if (isNaN(input)) {
          return "Please enter valid number!";
        } else if (input > 60) {
          return "Minutes should be less than 60";
        } else {
          return true;
        }
      },
    },
  ]);

  let input = userInput * 60;
  console.log(chalk.blueBright.italic("Timer has been started"));
  console.log(chalk.yellowBright.italic("Press Ctrl + C to exit"));

  function Timer(seconds: number) {
    const startTime = new Date().setSeconds(
      new Date().getSeconds() + seconds + 2
    );
    let exactTime = new Date(startTime);

    setInterval(() => {
      const currentTime = new Date();
      let timeDiff = differenceInSeconds(exactTime, currentTime);
      if (timeDiff <= 0) {
        console.log("00 : 00");
        console.log("Timer has been expired");
        process.exit();
      }

      const min = Math.floor(timeDiff / 60);
      const sec = Math.floor(timeDiff % 60);
      console.log(
        `${min.toString().padStart(2, "0")}: ${sec.toString().padStart(2, "0")}`
      );
    }, 1000);
  }
  Timer(input);
} else if (answer.option === "hours") {
  let { userInput } = await inquirer.prompt([
    {
      name: "userInput",
      type: "number",
      message: "Please enter the duration in Hours: ",

      validate: (input) => {
        if (isNaN(input)) {
          return "Please enter valid number";
        } else if (input > 24) {
          return "Hours must be less than 24";
        } else {
          return true;
        }
      },
    },
  ]);

  let input = userInput * 60 * 60;
  console.log(chalk.blueBright.italic("Timer has been started"));
  console.log(chalk.blueBright.italic("Press Ctrl + C to exit"));

  function starTimer(seconds: number) {
    const startTime = new Date().setSeconds(
      new Date().getSeconds() + seconds + 2
    );
    let exactTime = new Date(startTime);

    setInterval(() => {
      const currentTime = new Date();
      let timeDiff = differenceInSeconds(exactTime, currentTime);
      if (timeDiff <= 0) {
        console.log("00 : 00: 00");
        console.log("Timer has expired");
        process.exit();
      }

      const hours = Math.floor(timeDiff / (60 * 60));
      timeDiff -= hours * 60 * 60;
      const min = Math.floor(timeDiff / 60);
      const sec = timeDiff % 60;
      console.log(
        `${hours.toString().padStart(2, "0")}: ${min
          .toString()
          .padStart(2, "0")}: ${sec.toString().padStart(2, "0")}`
      );
    }, 1000);
  
  }
  starTimer(input);
}
