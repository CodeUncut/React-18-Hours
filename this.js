// console.log(this); //return window object
/*
const obj = {
    fn: function (){
        console.log(this);
    },
    fn2: () =>
    {
        console.log(this);
    }
}

obj.fn(); // returns obj fn function 
obj.fn2(); //returns window object // here this referneces to it's parent's this

*/
/*
function x(){
    console.log(this);
    function y(){
        console.log(this);
        function z(){
            console.log(this);
        }
        z(); //returns Window Object
    }
    y(); //returns Window Object
}

x(); //returns Window Object
*/
// y() {
//     console.log(this);
// }

const Person = {
    name: "Vaibhav",
    print: function ()
{
    console.log(this);
}
}

const Person2 ={
    name: "Rohan"
}



// x();  x.call(this); //This Both are same returns Window object
// x.call(Person); // returns "Vaibhav"
// x.call(Person2); //returns "Rohan"
// x.call(Person, Person2);

Person.print();
Person.print.call();
Person.print.call(this);
Person.print(Person2);
Person.print.call(Person2);