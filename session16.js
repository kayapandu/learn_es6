//sesi ini adalah

function myFunc(){
    console.log(arguments.length);
}

myFunc(1,2,3,4);

// function myFunc2() {
//     arguments.forEach(function(v, i, a){
//       console.log(v); // TypeError: arguments.forEach is not a function
//     })
//   }
  
//   myFunc2(1, 2, 3);

  function Store() {
      var aisle = {
          fruit: [],
          vegetable: []
      }
      return {
          add: function(category, ...items){
              //var items = [].splice.call(arguments, 1);
              console.log(items);
              items.forEach(function(value, index, array){
                console.log(value + ", " + index + ", " + array);  
                aisle[category].push(value);
              });
          },
          aisle: aisle

      }
  }

var myGroceryStore = new Store();

myGroceryStore.add('fruit', 'apples', 'oranges');
myGroceryStore.add('vegetable', 'carrots', 'goku');
console.log(myGroceryStore.aisle);