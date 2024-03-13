// var , let and const 
var str ='sonu';
let number = 90;
const str2 = 'komal';
// console.log('the string is ',str);
document.write(str,str2);
// window.alert('Hello i am alerting');
// window.print()
/*
Data type in javascript
Primitive data types: Basic, immutable(unchangeable) data types provided by the programming language. They include numbers, strings, booleans, null, undefined, and symbols.
Non-primitive data types: Objects created by the programmer, stored as references in memory. They include objects, arrays, functions, and more complex data structures.
1>Number  
2> string 
3>Array  - non-primitive data type 
4>object - non-primitive data type 
5> boolean
6> Null
7> Undefined 
8>Big Int 
9> Symbol 
let sym = Symbol("foo"); // Symbol
const bigInt = BigInt('892378236543645663418')*/














// let number2 = 90;
// const str23 = 'komal';
// let arr = ['apple', 'banana', 'civi'];
// const obj = {'apple':12, 'samsumg':23, 'Redme':34};
//  bool = true ;
// console.log(obj)

// Arithematic operator  = +-*/ 
// Assisgment operator = += , -=,*=,/=
// comparision operator = ==, ===, <,>,>=,<=, !=  , True or false it returned 
// logical opearor = and , or  , not 
//Ternary operator = used to specific condition 
// Unary operator  = 
// let num = 10;
// let a = 10;
// console.log(num+34, num-34, num*34, num/34);
// num *= 32
// console.log(num); // 42
// console.log(num!=a);

// //control statements  -- if , while and for loop 
// const x = 10 ;
// //if -else statement 
// if(x===12){
//     console.log('THe value of x is ', a)
// }
// else if(x==10){
//  console.log('X is equal to ', x)
// }
// else{
//     console.log("Not equal")
// }

// while loop 
let i ;
while(i<=2){
    alert('Hello ....')
    i++;
}
console.log('hello...');
console.log('hello...');

// for(i=0;i<=11;i++){
//     document.write('<br><h1>@komalWebdeveloper</h1>');
// }
// let num = 5;
// //  Switch statements in js 
// switch (num) {
//     case 0:
//         console.log("Number is zero.");
//         break;
//     case 1:
//         console.log("Nuber is one.");
//         break;
//     case 2:
//         console.log("Number is two.");
//         break;
//     default:
//         console.log("Number is greater than 2.");
// };

// // ternary operator 
// num==5 ? console.log('Yes it is five') : console.log('Its not five ');

//function in javascript 
// Named function , anonymous function & arrow function 
// const func = function(){
//     const a = 12;
//     const b = 24 ;
//     console.log("The sum of a and b is ",a+b)
// }
// function say(){
//     alert("You are on main page")
// }
// const naame = document.getElementById('name')
// const arr = ()=>{
//     const a = 12;
//     const b = 24 ;
//     console.log("The subtraction  of a and b is ",a-b);

// }
// arr()
// func();
// say()
 array = ['apple', 'banana', 'pineapple', 'mango' ]
// alert(array.length)
// To convert a array to string of array  array.toString()
// alert(array.at(0)) // to get specific elements 
// alert(array.join('&&'));
// array.push('civi');
// array.pop('civi');
array.shift()
array.unshift('lemon')

// console.log(array)

// events in javascript 
// let btn = document.getElementById('btn');
// let main = document.getElementsByTagName('main')[0];
// btn.addEventListener('click', ()=>{
//    main.style.background = 'red';
// })
// btn.addEventListener('dblclick', ()=>{
//     main.style.background = 'yellow';
//  })
//  btn.addEventListener("mouseout", ()=>{
//     main.style.background = 'white';
//  })
//  //try and catch 
//  try {
//     alert('welcome');
// } catch(err) {
//     console.log(err.message);
// } finally {
//     console.log('Learn');
// }
