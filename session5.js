//sesi ini mengenai construct dan destructuring object pada variabel

let firstName = "John";
let lastName = "Lindquist";

let person = {firstName, lastName};

console.log(person);

let mascot = "Moose";
let team = {person, mascot};

console.log(team);