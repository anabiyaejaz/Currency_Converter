#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    INR: 93,
    EUR: 0.93,
    AUD: 1.53,
    AED: 3.73,
    MYR: 4.82,
    PKR: 283
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Enter from currency",
        choices: ["USD", "INR", "EUR", "AUD", "AED", "MYR", "PKR"]
    },
    {
        name: "to",
        type: "list",
        message: "Enter to currency",
        choices: ["USD", "INR", "EUR", "AUD", "AED", "MYR", "PKR"]
    },
    {
        name: "Amount",
        type: "number",
        message: "Enter Your Amount"
    },
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let Amount = user_answer.Amount;
let baseAmount = Amount / fromAmount;
let convertAmount = baseAmount * toAmount;
console.log(convertAmount);
