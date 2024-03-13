/* 
*TOPICS TO BE DISCUSS* 
1)what are functions in javascript?
A function is a block of code that can be defined and then invoked or called to perform a particular task. Functions allow you to group together a set of statements to perform a specific action. They can accept input parameters (arguments), execute a series of statements, and optionally return a value.

Functions in JavaScript are first-class citizens, which means they can be assigned to variables, passed as arguments to other functions, returned from other functions, and stored in data structures. This flexibility makes functions incredibly powerful and versatile in JavaScript programming .
1) DECLARATION 
2) CALLLING 
Types of functions in javascript in detail 
Named function 
Anonymous function 
Arrow function
this in a function
parameters of a function 
return value of a function 
es4 ...parameters of a function
Rest and spread operator 
IIFE  function 
What is the difference between a different types of functions in details ?
Async and await function 
what is first-class function? 
Higher Order functions 
Generator function 
setTimeout function 
callback function 


    TYPES OF JAVASCRIPT FUNCTION 
    1) NAMED FUNCTION - IN WHICH A FUNCTION HAVE A NAME  are named functions 
    2) ANONYMOUS FUNCTION - IN WHICH A FUNCTION doesn't have  A NAME  are anonymous functions 
    3) ARROW FUNCTION
    4) IIFE FUNCTION  -  Immediately Invoked Function Expression 
    5)GENERATOR FUNCTION
    6) CALLBACK FUNCTION
*/
function sayhello(){ // delared  a function  , this is named function 
    console.log('hello  everyone')
}
const sayhello2 = function(name){ // declared  a function  , this is anonymous  function 
    console.log('hello  everyone', name)
}
const say = (name)=>  console.log('hey', name) 
const saybonjour = (name)=>{
 console.log('bonjour ', name );
}
const person = {
    firstName : 'John',
    lastName : 'Doe', 
    fullname :()=>{
        return console.log(this.firstName +' ' + this.lastName)
    }
}
const person2 = {
    firstName : 'John',
    lastName : 'Doe', 
    fullname :function(){
        return console.log(this.firstName +' ' + this.lastName)
    }
}
const addToCart = function(item1, item2, ...items) {
    let CardItems = item1 + item2;
    for (let i = 0; i < items.length; i++) {
        CardItems += items[i];
    }
    return console.log(CardItems)
}
const findMax = function(...numbers){ // rest operator
    
    return console.log((numbers)) // spread operator 
}
// const multiply = (function( x, y){
//   return console.log(x * y)  //  used when connect to db , fetch data from db  etc which need immediate evoked function 
// //   plus this   doesnt want variables to be polluted with global scope  
// })(2,3) // immediate evoked function 

function* generateNumbers(){
    let num = 1;
    while(true){
        yield num ;
        num++;
    }
}
// why functions are first-class citizens?
// Assigning a function to a variable
const greet = function(name, name2) {
    return name  + name2 + "  hello !";
};

// console.log(greet("Johnie " , " ritu")); // Output: Hello, John!

// Passing a function as an argument to another function
function sayHello(func) { // function  passes as a argument
    console.log(func("Alice" , " Paul")); // Output: Hello, Alice!
}
// sayHello(greet);
function sayBye(func1) { // function passes as
    console.log( " Bye to ",func1( "komal", 'rittu'))
}


// sayBye(greet)
// Returning a function from another function
// function createGreetingFunction() {
//     return function(name) {
//         return "Hola, " + name + "!";
//     };
// }

// const spanishGreet = createGreetingFunction();
// console.log(spanishGreet("Carlos")); // Output: Hola, Carlos!



// Execute an anonymous function after 3000 milliseconds (3 seconds)
// setTimeout(function() {
//     console.log('Delayed message');
// }, 6000);

function fetchdata(callback) {
    setTimeout(  function() {
        const data =  'This is fetched data from an  api'
        callback(data);
    }, 2000); }
    function processData(d){
       console.log(d)
  }
 fetchdata(processData)
 




























// const generatefunc = generateNumbers();
// console.log(generatefunc.next().value)
// console.log(generatefunc.next().value)
// console.log(generatefunc.next().value)
// console.log(generatefunc.next().value)
// console.log(generatefunc.next().value)
// console.log(generatefunc.next().value)
// console.log(generatefunc.next().value)

// findMax(1,2,3,4,5,6,7,8,9,1)
// sayhello(); // calling the function 
// sayhello2('komal') 
// saybonjour('raman')
// person2.fullname() // calling the function 
// addToCart(1,2,3,4,5,6,7,8,9,) // calling the function 
