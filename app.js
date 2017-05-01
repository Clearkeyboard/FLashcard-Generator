var flashcards = [];
var inquirer = require('inquirer');
var MakeCard = require('./BasicCard.js');
var flashCount = 0;
console.log("Hello! This application help you create 5 flashcards!\n");
console.log("To get started. Follow the prompts.")
console.log("-----------------------------------------------------------------")
//function used to create another flashcard or to loop back to selections
var makeMore = function() {
    inquirer.prompt([
        {
        type: 'confirm',
        name: "confirm",
        message: "Would you like to make another FlashCard?"
        }
    ]).then(function(confirm){
        if (confirm.confirm) {
            createFlashCard();
        }else{
            selections();
        }
    })
}
//function used to make selections
var selections = function() {
    inquirer.prompt([
        {
            type: 'list',
            name: "pick",
            message: "What would you like to do?",
            choices: [
                "Make a FlashCard",
                "Show FlashCard List",
                "Select a Flashcard"
            ]
        }
    ]).then(function(selection){
        switch (selection.pick){
            case "Make a FlashCard":
            createFlashCard();
            break;

            case "Show FlashCard List":
            console.log(flashcards);
            selections();
            break;

            case "Select a Flashcard":
            selectFlashCard();
            break;
        }
    })
}
//function that shows list of flashcards
var selectFlashCard = function() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'flashCard list',
            message: 'Select a FlashCard from below',
            choices: [
                flashcards[0].printFront(),
                flashcards[1].printFront(),
                flashcards[2].printFront(),
                flashcards[3].printFront(),
                flashcards[4].printFront() 
            ]
        }
    ])
}
//function that shows front or back of flashcard

//function used to create flashcard
var createFlashCard = function() {
    if (flashCount < 5) {
        console.log("This is your " + (flashCount+1) + " flash card.");
        inquirer.prompt([
        {
            name: "front",
            message: "Please write Front Text for this Flashcard"
        },{
            name: "back",
            message: "Please write Back Text for this Flashcard"
        }
    ]).then(function(answers) {
        var newFlashCard = new MakeCard(answers.front, answers.back);
        flashcards.push(newFlashCard);
        console.log("This flashcard has been saved");
        flashCount++;
        makeMore();
    });
    }
}
selections();