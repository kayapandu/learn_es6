//sesi ini mengenai object enhancements dari sebuah variabel

var color = "red";
var speed = 10;

var car = {color, speed};

console.log(car.color);
console.log(car.speed);

var color = "red";
var speed = 10;
var drive = "gobs";

var car = {
    color, 
    speed, 
    go(){
    console.log("vroom");
    },
    [drive]: function(){
        console.log("vsssroom");
    }
};

car.gobs();