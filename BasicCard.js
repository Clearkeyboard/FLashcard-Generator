var MakeCard = function(front, back) {
    this.front = front;
    this.back = back;
}

MakeCard.prototype.printInfo = function() {
    console.log("-----------------------------------------");
    console.log("Card Front: " + this.front + "\nCard Back: " + this.back);
    console.log("-----------------------------------------\n");
}
MakeCard.prototype.printFront = function() {
    console.log("-----------------------------------------");
    console.log("Card Front: " + this.front);
    console.log("-----------------------------------------\n");
}
MakeCard.prototype.printBack = function() {
    console.log("-----------------------------------------");
    console.log("Card Front: " + this.back);
    console.log("-----------------------------------------\n");
}
module.exports = MakeCard;
