// sesi ini adalah

// function* greet(){
//     console.log(`You called 'next()'`);
//     yield "hello";
//     console.log(`Generators are "lazy"`);
//     yield "How";
//     console.log(`I'm not called until the second next`);
//     yield "are";
//     console.log(`Call me before "you?"`);
//     yield "you?";
//     console.log(`Called when "done"`);
// }

// let greeter = greet();
// console.log(greeter);
// let next = greeter.next();
// console.log(next);
// let done = greeter.next();
// console.log(done);

// console.log(greeter.next().value);


// for(let word of greeter) {
//     console.log(word);  // Generators are "lazy"
//                         // How  
//                         // I'm not called until the second next
//                         // are
//                         // Call me before "you?"
//                         // you?
//                         // Called when "done"
//   }

function* greet(){
    let friendly = yield "How";
    friendly =  yield friendly + "are";
    yield friendly + "you?";
}

var greeter = greet();
console.log(greeter.next("first").value); // TypeError: Sent value to newborn generator
console.log(greeter.next("first").value); // TypeError: Sent value to newborn generator

function* graph(){
    let x = 0;
    let y = 0;
    while(true){
      yield  {x:x, y:y}
      x += 2;
      y += 1; 
    }
  }
  
  var graphGenerator = graph();
  console.log(graphGenerator.next().value);
  console.log(graphGenerator.next().value);
  console.log(graphGenerator.next().value);
  console.log(graphGenerator.next().value);
  console.log(graphGenerator.next().value);
  console.log(graphGenerator.next().value);
  console.log(graphGenerator.next().value);
  console.log(graphGenerator.next().value);
  console.log(graphGenerator.next().value);
  console.log(graphGenerator.next().value);
  console.log(graphGenerator.next().value);