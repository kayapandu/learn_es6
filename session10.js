
//sesi ini tentang bagaimana menggunakan import/require dari variabel maupun fungsi external untuk digunakan

var _ = require('lodash');
//var users = require('./array/users.js');
var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];

console.log("hello");
console.log(users);
//console.log(_);
console.log(_.findIndex(users, { 'user': 'fred', 'active': false }));
