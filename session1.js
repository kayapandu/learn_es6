//Sesi ini belajar penggunaan arrow dalam function serta perbedaan let dan var
var createGreeting = function(message, name){
    return message + name;
}

function greetingCreate(message, name){

    return message + name;
}

var arrowGreeting = (message, name) => message + name;
var arrowGreeting2 = message => "hello" + message;
var squared = x => x * x;


console.log(createGreeting("saya adalah", "saya 1"));
console.log(greetingCreate("saya adalah", "saya 2"));
console.log(arrowGreeting("saya adalah", "saya 3"));
console.log(arrowGreeting2("saya adalah"));
console.log(squared(9));

var deliveryBoy = {
    name: "John",
  
    handleMessage: function (message, handler) {
      handler(message);
    },
  
    receive: function () {
      this.handleMessage("Hello, ", message => console.log(message + this.name));
    }
  }

deliveryBoy.receive();


// var fs = [];
//   for(let i = 0; i < 10; i++){
//       fs.push(function (){
//           console.log(i);
//       });
//   }

// fs.forEach(function (f){
//     f();
// });

function varFunc(){
    var previous = 0;
    var current = 1;
    var i;
    var temp;

    for(i = 0; i < 10; i+=1){
        temp = previous;
        previous = current;
        current = temp + current;
        console.log(current);
    }
}

varFunc();

function letFunc(){
    let previous = 0;
    let current = 1;
    
    for(let i = 0; i < 10; i+=1){
        let temp = previous;
        previous = current;
        current = temp + current;

        console.log(current);
    }
}

letFunc();
