// sesi ini mengenai spread operator yaitu untuk mengeluarkan isi value didalam object (array)

console.log(...[1,2,3]);

let first = [1,2,3];
let second = [4,5,6];

first.push(...second);

console.log(first);

function addThreeThings(a, b, c){
    let result = a + b + c;
    console.log(result);
}

addThreeThings(...first);