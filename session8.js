// sesi ini tentang manimulasi string dimana bisa menyisipkan variabel maupun function didalam string

var salutation = "Hello";
var greeting = `${salutation}, World`;

console.log(greeting);

var salutation2 = "Hai";
var yum = "Yum";

var greeting2 = `${salutation2},
        yeah ${yum}`;

console.log(greeting2);

var x = 1;
var y = 2;
var equation = `${ x } + ${ y } = ${ x + y}`;
console.log(equation);

// var message = `Its ${new Date().getHours()} Im sleepy`;

// console.log(message);

var message2 = tag`Its ${new Date().getHours()} Im ${""}`;

function tag(strings, ...values){

    if(values[0] < 20){
        values[1] = "awake";
    }

    return `${strings[0]}${values[0]}${strings[1]}${values[1]}`;
}

console.log(message2);

