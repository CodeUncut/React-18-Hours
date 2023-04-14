//Arrow Functions

//Revising Javascript

// function keyword is present in javascript

function x(){
    const a = 10; //local variable
}

var xyz = 30; //hoisting

x(); //functional execuation context is created

var x = function (){
    console.log("I am an anonymous function");
}

// datastructure used for memory allocation is Memory Heap
console.log("Vaibhav");
x();

function test(x){
    return function(){
        console.log("Vaibhav saxena");
    }
}
// => this arrow is known as fat arrow
const fn = () =>{
    console.log("Radhe Radhe");
}

fn();

