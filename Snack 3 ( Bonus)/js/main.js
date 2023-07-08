//Bonus 3 - Traccia
//Crea due array che hanno un numero di elementi diversi. CHECK
//Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

let firstArray = [];
let secondArray = [];

//random numbers that will decide arrays lenght
let randomOne = Math.floor(Math.random() * 15) + 1;//First array
console.log("Here it is the length of the first array:");
console.log(randomOne);
let randomTwo = Math.floor(Math.random() * 15) + 1;// Second array
console.log("Here it is the length of the second array:")
console.log(randomTwo);

//Cycle to push i elements into the first array
for (i = 0; i < randomOne; i++) {
    const element = 1;
    firstArray.push(element);
}
console.log("First array of" + " " + randomOne + " " + "elements");
console.log(firstArray);

//cycle to push x elements into the second array
for (x = 0; x < randomTwo; x++) {
    const elementSecond = 2;
    secondArray.push(elementSecond);
}
console.log("Second array of" + " " + randomTwo + " " + "elements");
console.log(secondArray);

//Essendo generati randomicamente, la maggior parte dei casi uno dei due array avrà una quantità minore di element.
// Io, però, voglio che siano di lunghezze uguali. Come faccio?
//Innanzitutto, controllo la loro lunghezza.

//If firstArray > secondArray
if (firstArray.length > secondArray.length) {
    let diffFirst = firstArray.length - secondArray.length;
    console.log("firstArray > secondArray and their difference is of:")
    console.log(diffFirst + " " + "elements.");
    console.log("We want them to be the same length.");

    //Cycle to push the difference of elements in the secondArray
    console.log("Let's push the missing elements in the secondArray:")
    for (let f = 0; f < diffFirst; f++) {
        secondArray.push(2);
    }//Check if now secondArray = firstArray
    console.log("The length of the secondArray is now:" + " " + secondArray.length);
    console.log(secondArray);
    console.log("Which is the same as the firstArray:" + " " + firstArray.length);
    console.log(firstArray);
    console.log("Now they have the same length. :)");

    //If secondArray > firstArray
} else if (secondArray.length > firstArray.length) {
    let diffSecond = secondArray.length - firstArray.length;
    console.log("secondArray > firstArray and their difference is of:")
    console.log(diffSecond + " " + "elements.");
    console.log("We want them to be the same length.");

    //cycle to push the difference of elements in the firstArray
    console.log("Let's push the missing elements in the firstArray:")
    for (let f = 0; f < diffSecond; f++) {
        firstArray.push(1);
    }//Check if now firstArray = secondArray
    console.log("The length of the firstArray is now:" + " " + firstArray.length);
    console.log(firstArray);
    console.log("Which is the same as the secondArray:" + " " + secondArray.length);
    console.log(secondArray);
    console.log("Now they have the same length. :)");


    //if firstArray = secondArray
} else if (firstArray.length === secondArray.length) {
    console.log("The arrays have the same lenght. No need to push anything.");
}




