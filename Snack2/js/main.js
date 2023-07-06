//Snack2
//Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari.
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let sum = 0;
for (let x = 0; x < numbers.length; x++) {
  //console.log(numbers[x]);
  if (numbers[x] % 2 !== 0) {
    console.log(numbers[x])
    //Stampa la lista dei numeri con indice dispari
    sum = sum + numbers[x];
  }
}
console.log("This is the sum of the elements with odd index:" + " " + sum);