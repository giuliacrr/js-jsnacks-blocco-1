//Snack1
//Generatore di “nomi cognomi” casuali:
//il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.
//Surnames           0        1        2        3       4        5         6           7            8            9          10
const surnames = ["Leone", "Linza", "Bono", "Pazi", "Glorian", "Giuri", "Collura", "Carluccio", "Filograna", "Isabelli", "Porrega"];
//Names           0        1           2            3           4          5         6          7        8           9          10
const names = ["Padre", "Corrado", "Pasquale", "Salvatore", "Giulia", "Pietro", "Riccardo", "Elisa", "Matteo", "Vittoria", "Paola"];

console.log(surnames);
console.log(names);

const rngSurnames = Math.floor(Math.random() * surnames.length);
const rngNames = Math.floor(Math.random() * names.length);
//rng Name and Surnames console print
console.log(rngSurnames);
console.log(rngNames);

// Guest list
for (let x = 0; x < 20; x++) {
  const rngSurnames = Math.floor(Math.random() * surnames.length);
  const rngNames = Math.floor(Math.random() * names.length);
  //rng Name and Surnames console print
  console.log(names[rngNames] + " " + surnames[rngSurnames]);
  //Come faccio a far uscire tutti nomi diversi??

}

