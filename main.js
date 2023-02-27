let number = prompt("inserisci un qualsiasi numero:");

if(isNaN(number)) {
  console.log("L'input inserito non è un numero!");
} else {
  if(number % 2 == 0) {
    number = Number(number);
    console.log(number);
  } else {
    number = Number(number);
    number += 1;
    console.log(number);
  }
}