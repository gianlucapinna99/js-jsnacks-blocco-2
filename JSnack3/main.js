"use strict"

let nomiInvitati = ["paolo", "Marco", "Gaetano", "Laura", "Francesca"];

let cognomiInvitati = ["Rossi", "Oldani", "Pennella", "Bisio", "Frascolla"];

let invitati = [];

console.log("LISTA INVITATI:");

for (let i=0; i < 3; i++){
    let nome = nomiInvitati[Math.floor(Math.random() * nomiInvitati.length)];
    let cognome = cognomiInvitati[Math.floor(Math.random() * cognomiInvitati.length)];
    invitati = (nome + " " + cognome);
    console.log(invitati);
}

