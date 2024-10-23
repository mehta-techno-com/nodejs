//---Direct function call 
// function test(){
//     console.log('test function run');
// }

const { Console } = require("console");
const { connected } = require("process");

// test();

//--Function expression 
// const f_test = function(l_arg){
// console.log('Function expression:',l_arg);
// }

// f_test('p');

//--Arrow function
// const f_test = (l_arg) => {
//     console.log('Arrow function call:',l_arg);
// } 
// f_test('p');

//----call back function
// function fetchdata(callback)
// {
//     const data1 = 'abc';
//     const data2 = 'xyz';
//     callback(data1,data2);
//     //console.log(callback);

// }

// fetchdata( function data(data,data1){
// console.log(data,data1);
// });

// fetchdata((data,data1) => 
// {
//     console.log(data,data1);
// });
    

//-------other example for anonymous function and call back function------------
// const add = function(a,b)
// {
//     return(a+b);
// }

// const ComplexCal = function(add1)
// {
//     console.log(add1(2,3));
// }

// ComplexCal(function(a,b)
// {
//     return(a+b);
// });

// ComplexCal((a,b) =>
// {
//     return(a+b);
// });

//------------------------------------

//---method in objct--
// const person = {
//     firstName: "Pappu",
//     lastName: "kumar",
//     getFullName: function() {
//       return `${this.firstName} ${this.lastName}`;
//     }
//   };
  
//   console.log(person.getFullName()); // Output: John Doe

//------call and apply---
function greet(message) {
    console.log(`${message}, ${this.name}!`);
  }
  
  const person = { name: "Pappu" };
  const class1 = 'MCA';
  
  //greet(person,"Good Morning");
  greet.call(person, "Good morning"); // Output: Good morning, Pappu!
  //greet.apply(person, ["Good evening"]); // Output: Good evening, Pappu!