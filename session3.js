//sesi ini tentang membuat isi default dari variabel masukan pada fungsi
console.log("hello session 3");

function greet(greeting, name = "John"){
    console.log(greeting + ", " + name);
}

greet("hello", "Don");

function receive(complete = () => console.log("Complete")){
    complete();
}

receive();