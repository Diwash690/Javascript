//1. ways to print in javascript 
// console.log("Hello world");
// alert("me");
// document.write("This is document wrie");
// console.warn("This is warning");
// console.error("This is error");



//2. Javascript console API //
// console.log("Hello world",9+10*5,"Anotherlog");
// console.warn("This is warning");
// console.error("This is error");

//3. Javascript Variables //
// Variables are containers to store data values // 
// var number1 = 30;
// var number2 = 60;
// console.log(number1+number2);


//4. Javascript Datatypes //
//Numbers(int)
// var num1 = 455;
// var num2 = 13.21; 

//String
// var str1 = "This is the string";
// var str2 = "This is also a string";

//objects 
// var marks= {
//     ravi:34,
//     shubham:78,
//     Diwash:98.99,
// }
// console.log(marks)


// Booleans
// var a = true;
// var b = false;
// console.log(a, b);

// var und = undefined;
// var und = undefined;
// console.log(und); 

// var n = null;
// var n = null;
// console.log(n);


/*

At a very high level, there are two types pf data types in javascript
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: Arrays and objects 

*/

// var arr = [1,2,"Bablu",4,5]
// console.log(arr)


// Operators in Javascript
// Arthmetic operators

// var a = 34;
// var b = 56;
// console.log("The value of a + b is", a+b);
// console.log("The value of a*b is", a*b);
// console.log("The value of a/b is", a/b);
// console.log("The value of a-b is", a-b);

// Assignment operators
// var c = b;
// c += 2;
// c -= 2;
// c *= 2;
// c /= 2;
// console.log(c); 

// Comparison operators(==), (>=) , < , >  
// var x = 20;
// var y = 30;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// Logical operators (and)
// console.log(true&&true);
// console.log(true&&false);
// console.log(false&&true);
// console.log(false&&false);

// logical operators (or)
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// logical operators (not)
// console.log(!false);
// console.log(!true);


// Javascript functions //
// DRY = Do not repeat yourself //

// function avg(a, b){
//     c = (a + b) /2 ;
//     return c;
// }
// c1 = avg(4,6);
// c2 = avg(8,16);
// console.log(c1,c2);

// // calculate total marks //

// function totalmarks(a,b,c,d){
//     e = (a + b + c +d) * 10;
//     return e;
// }
// marks1 = totalmarks(10,20,30,40);
// marks2 = totalmarks(20,34,123,23);
// marks3 = totalmarks(123,123,1231,32);
// marks4 = totalmarks(12,34,40,45);
// console.log("Pratik your final mark is :" ,marks1);
// console.log("Amit your final mark is : ", marks2);
// console.log("Diwash your final mark is :",marks3);
// console.log("Arika your final mark is :",marks4);

// Conditional in Javascript //

// var age = 20;
// if (age > 10, age = 20){
//     console.log('You are not a child');
// }
// else{
//     console.log('You are an adult');
// }
console.log("This is javascript function");
// let fname = "Diwash";

function boys(fname){
    console.log(fname + " is a good boy");
}
let fname1 = "Pratik";
let fname2 = "Amit";
let fname3 = "Ram";
let fname4 = "Sita";

boys(fname1);
boys(fname2);
boys(fname3);
boys(fname4);

// console.log(fname + " is a goodboy");
// console.log(fname1 + " is a bad boy");
// console.log(fname2 + " is a short boy");
// console.log(fname3 + " is very good at math");
// console.log(fname4 + "is very good at coding"); 



