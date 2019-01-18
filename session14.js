// sesi ini adalah tentang maps dan weakMaps

var myMap = new Map();

// API 
/*
set()
get()
size
clear()
has()
*/

myMap.set('foo', 'bar');
myMap.set('hello', 'world');
console.log(myMap.size);
console.log(myMap.has('foo')) // true

for(var key of myMap.keys()){
    console.log(key);
}

for(var key of myMap.values()){
    console.log(key);
}

for([key, value] of myMap.entries()){
    console.log(key + ' = ' + value);
}

var myObj = {};
var myFunc = function(){};

myMap.set(myObj, 'bar');
myMap.set(myFunc, 'world');

console.log(myObj);
console.log(myFunc);