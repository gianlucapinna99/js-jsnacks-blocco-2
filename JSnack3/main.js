"use strict"

let nomiInvitati = ["paolo", "Marco", "Gaetano", "Laura", "Francesca"];

let cognomiInvitati = ["Rossi", "Oldani", "Pennella", "Bisio", "Frascolla"];



for (let i=0; i < 3; i++){
    let nome = nomiInvitati[Math.floor(math.Random() * nomiInvitati.lenght)];
    let cognome = cognomiInvitati[Math.floor(math.Random() * cognomiInvitati)];
    invitati = (nome + "" + cognome);
}

console.log("lista invitati:")
console.log(invitati)