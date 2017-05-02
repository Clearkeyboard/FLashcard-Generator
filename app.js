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
            name: 'pickflashcard',
            message: 'Select a FlashCard from below',
            choices: [
                '1',
                '2',
                '3',
                '4',
                '5',
                'back'
            ]
        }
    ]).then(function(flash) {
        switch (flash.pickflashcard){
            case '1':
            if (flashcards[0]) {
                flashcards[0].printFront()
                inquirer.prompt([
                    {
                        type: 'confirm',
                        name: 'back',
                        message: "Are you ready to view the Back?"
                    }
                ]).then(function(pick){
                    if (pick.back){
                        flashcards[0].printBack();
                        selectFlashCard();
                    }else{selectFlashCard();}
                })
            }else {console.log("There is not a flashcard in this slot")}
            break;

            case '2':
            if (flashcards[1]) {
                flashcards[1].printFront()
                 inquirer.prompt([
                    {
                        type: 'confirm',
                        name: 'back',
                        message: "Are you ready to view the Back?"
                    }
                ]).then(function(pick){
                    if (pick.back){
                        flashcards[1].printBack();
                        selectFlashCard();
                    }else{selectFlashCard();}
                })
            }else {console.log("There is not a flashcard in this slot")}
            break;

            case '3':
            if (flashcards[2]) {
                flashcards[2].printFront()
                 inquirer.prompt([
                    {
                        type: 'confirm',
                        name: 'back',
                        message: "Are you ready to view the Back?"
                    }
                ]).then(function(pick){
                    if (pick.back){
                        flashcards[2].printBack();
                        selectFlashCard();
                    }else{selectFlashCard();}
                })
            }else {console.log("There is not a flashcard in this slot")}
            break;

            case '4':
            if (flashcards[3]) {
                flashcards[3].printFront()
                 inquirer.prompt([
                    {
                        type: 'confirm',
                        name: 'back',
                        message: "Are you ready to view the Back?"
                    }
                ]).then(function(pick){
                    if (pick.back){
                        flashcards[3].printBack();
                        selectFlashCard();
                    }else{selectFlashCard();}
                })
            }else {console.log("There is not a flashcard in this slot")}
            break;

            case '5':
            if (flashcards[4]) {
                flashcards[4].printFront()
                 inquirer.prompt([
                    {
                        type: 'confirm',
                        name: 'back',
                        message: "Are you ready to view the Back?"
                    }
                ]).then(function(pick){
                    if (pick.back){
                        flashcards[4].printBack();
                    }else{selectFlashCard();}
                })
            }else {console.log("There is not a flashcard in this slot")}
            break;  

            case 'back':
            selections();
            break;          
        }
    });
}
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