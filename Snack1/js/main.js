//Snack1
//Generatore di “nomi cognomi” casuali:
//il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.
//Surnames           0        1        2        3       4        5         6           7            8            9          10
const surnames = ["Leone", "Linza", "Bono", "Pazi", "Glorian", "Giuri", "Collura", "Carluccio", "Filograna", "Isabelli", "Porrega"];
//Names           0        1           2            3           4          5         6          7        8           9          10
const names = ["Padre", "Corrado", "Pasquale", "Salvatore", "Giulia", "Pietro", "Riccardo", "Elisa", "Matteo", "Michele", "Paola"];

console.log(surnames);
console.log(names);

const rngSurnames = Math.floor(Math.random() * surnames.length);
const rngNames = Math.floor(Math.random() * names.length);
//rng Name and Surnames console print
console.log(rngSurnames);
console.log(rngNames);
// Guest list
for (let x = 0; x < 11; x++) {
  const rngSurnames = Math.floor(Math.random() * surnames.length);
  const rngNames = Math.floor(Math.random() * names.length);
  //rng Name and Surnames console print
  const list = names[rngNames] + " " + surnames[rngSurnames];
  const listContainer = document.getElementById("list");
  console.log(list);
  //Print Guest list
  let singleGuest = document.createElement("div");
  singleGuest.classList.add("single-guest", "text-center");
  //singleGuest.innerHtml = list.toString();
  singleGuest.append(list);
  listContainer.append(singleGuest);
  //Come faccio a far uscire tutti nomi diversi??
}

