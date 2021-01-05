// function myFunc(theObject){
//     theObject.name = 'Toyota';

// }

// let myCar = {
//     name : 'Honda',
//     year :  1920,
//     model : 'executive'
// };

// let x , y;
// x = myCar.name;

// myFunc(myCar);
// console.log(myCar);

//Function Expressions
// Ex - 1
// const square = function(number){ return number * number};
// let x = square(4);
// console.log(x);

//Ex - 2

// const factorial = function fac(n) {return n < 2 ? 1 : n * fac(n - 1)}
// console.log(factorial(3));

//Ex - 3 

// const f = function(x){
//     return x * x * x;
// }
// function map(f,numbers){
//     result = [];

//     for(var i = 0 ; i < numbers.length ; i++){
//         result [i] = f(numbers[i]);
//     } 
//     return result;
// }

// let numbers  = [0,1,2,5,10];
// let cube  = map(f,numbers);




// console.log(cube);

//Ex - 4

// console.log(square);
// console.log(square(4));
// const square  = function(n){
//     return n * n;
// }

// Ex -5 Recursion

// function factorial(n){
//     if (n == 0 || n == 1 ){
//         return n;
//     }
//     else{
//         return (n * factorial(n - 1));
//     }

// }

// let a = factorial(4);
// console.log(a);

//Ex - 6 

// function foo(i) {
//     if (i < 0)
//       //debugger;
//       return;
//     console.log('begin: ' + i);
//     debugger;
//     foo(i - 1);
//     debugger;
//     console.log('end: ' + i);

//   }
//   foo(3);

//Nested functions and Closures

// Example 1

// function addSquares(a,b){
//   function square(x){
//     return x * x ;
//   }
//   return square(a) + square(b);
// }

// a = addSquares(5,4);
// console.log(a); 

// Example 2

// function d() {
//   function e() {
//       alert('E');
//   }
//   return e;
// }

// d()();

//Scope,Scope Chain and lexical environment

// function a(){
//   var b = 10;
//   c();
//   function c(){
//     console.log(b);    
//   }
// }

// a();
// let a = 10;

// const b;


// a=10;

// console.log(a);


// function z() {
//     var b = 900;
//     function x() {
//         var a = 7;
//         function y() {
//             console.log(a,b);
//         }
//         y();
//     }
//     x();
// }
// z();

// function x(){
//     var i = 1;
//     setTimeout( function() {
//         console.log(i);
//     },3000)

//     console.log("Hello World");
// }
// x();

// function add(x){
//     return function(y){
//       return x + y;
//     };
//   }
  
//   var addTwo = add(2)
//   console.log(addTwo);

//Closure with global Variable 

// function outest(){
//   var c = 20
//   function outer(b){

//     function inner(){
//       console.log(a,b,c);
//     }
//     let a = 10;
//     return inner;
//   }
//   return outer;
// }
// let a = 100;
// var close = outest()("Hello World");
// close();

//Closure with data hiding


// function counter() {
//   let  count = 0;
//   return function funcount(){
//     count++;
//     console.log(count);
//   }
// }

// var counter1 = counter();
// counter1();
// counter1();

// var counter2 = counter();
// counter2();
// counter2();

// CLosure with constructor function

// function Counter(){
//   var count = 0;
//   this.incrementCounter = function() {
//     count++;
//     console.log(count);
//   }
//   this.decrementCounter = function() {
//     count--;
//     console.log(count);
//   }
// }
// var counter1 = new Counter();

// counter1.incrementCounter();
// counter1.incrementCounter();

// counter1.decrementCounter();

//Smart garbage collector

// function a(){
//   var x = 0 , z=7;
//   return function zero(){
//     console.log(x);
//   }
// }

// var y = a();
// y();

//Function statment




// function a(){
//   console.log("a called");
// }


//Function expression

//  var b = function(){
//   console.log("b called");
// }

//Anonymous function

// function(){

// }

//Named function expression

// var b = function (param1){
//   return function(){

//   }
// }

// console.log(b());

//Nested function and closures mdn docs

// function addSquares(a,b){
//   function square(x){
//     return x * x;
//   }
//   return square(a) + square(b);
// }

// a = addSquares(3,5);
// console.log(a);

// function outside(x){
//   function inside(y){
//     return x + y;
//   }
//   return inside;
// }

// fu_inside = outside(3);
// result = fu_inside(5);
// result1 = outside(7)(5);
// console.log(result1);

//Name conflicts

// function outside(){
//   x =5;
//   function inside(x){
//     return x * 2;
//   }
//   return 'hello';
// }
// next = outside()(10);

// console.log(typeof(next));

// var pet  = function (name) {
//   var getName = function(){
//     console.log(name);
//   }
//   return getName;
// }

// myPet = pet('Tom');
// myPet();

// var createPet = function(name){

//   var sex;

//   return {
    
//     setName : function(newName){
//       name = newName;
//     },

//     getName:function(){
//       return name;
//     },  

//     getSex : function(){
//       return sex;
//     },

//     setSex :function(newSex){
//       if(typeof newSex === 'string' && (newSex.toLowerCase() === 'male' ||
//         newSex.toLowerCase() === 'female')) {
//         sex = newSex;
//       }
//     }
//   } 
// }

// var pet = createPet('Vivie');
// pet.getName();                  // Vivie

// pet.setName('Oliver')
// pet.setSex('male');
// pet.getSex();                   // male
// pet.getName();


function myConcat(separator){
  var result = '';
  var i;
  for(i =1 ;i < arguments.length ; i++){
    result += arguments[i] + separator;
  }
  return result;
}

var first = myConcat('j','red','black','green');
console.log(first);

