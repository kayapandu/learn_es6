// sesi ini adalah bagaimana cara mengolah object dan variabel yang ada didalam objectsdf

var obj = {
    color: "blue"
}

console.log(obj.color);

var {colour, position, name} = {
    colour: "blue",
    name: "John",
    state: "New York",
    position: "Forward"
}

console.log(colour);
console.log(name);

function generateObj(){
    return {
        nick: "fury",
        team: "shield"
    }
}

var {nick: nickname, team: teamname} = generateObj();
console.log(`${nickname} on ${teamname}`);

var [first,,,,fifth] = ["red", "yellow", "green", "blue", "orange"];

console.log(first);
console.log(fifth);

var people = [
    {
      "firstName": "Skyler",
      "lastName": "Carroll",
      "phone": "1-429-754-5027",
      "email": "Cras.vehicula.alique@diamProin.ca",
      "address": "P.O. Box 171, 1135 Feugiat St."
    },
    {
      "firstName": "Kylynn",
      "lastName": "Madden",
      "phone": "1-637-627-2810",
      "email": "mollis.Duis@ante.co.uk",
      "address": "993-6353 Aliquet, Street"
    },
  ]

  people.forEach(({firstName}) => console.log(firstName));

  var [,Kylynn] = people;

  function logEmail({email}){
      console.log(email);
  }

  logEmail(Kylynn);


