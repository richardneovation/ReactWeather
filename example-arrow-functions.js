// var names = ['Andrew','Julie','Jen'];
//
// //names.forEach((name) => console.log('forEach', name));
//
// //var returnMe = (name) => name + '!';
// //console.log('returnMe', returnMe('Richard'));
//
// var person = {
//   name: 'Andrew',
//   greet: function() {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// }
//
//
// person.greet();

// Challenge Area
function add (a, b) {
  return a + b;
}

var addStatement = (a,b) => {return a + b;};
var addExpression = (a,b) => a + b;

console.log(add(1,3));
console.log(add(9,0));

console.log(addStatement(1,3));
console.log(addStatement(9,0));

console.log(addExpression(1,3));
console.log(addExpression(9,0));
