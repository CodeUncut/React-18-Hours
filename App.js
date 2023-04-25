/*
*
 * Parcel has:
 * HMR (Hot Module Reload
 * File Watching Algorithm
 * Bundling
 * MINIFY
 * Cleaning our code(removes console.log)
 * Dev and production build
 * Super fast build algorithm
 * Image Optimizing
 * Caching while devlopement
 * Compression
 * Compatle with older version of browser
 * Https on dev
 * Port Number
 * hast algorithm
 * Zero Config 
 * Tree SHacking - Removes un-wanted/ Removes unuseful helper functions 
 * 
 * */



import React from "react"; // by using this we can use React.createElement();
// import {createElement} from "react"; // Using it we can remove React. from using React.createElement()
// import {createElement as ce} from "react"; //by using this we can write ce instead of createElement
import ReactDOM from "react-dom/client"; //It is used for dom
/*
const heading = ce(
    "h1",
    {
        id: "title",
        key: "h1",
    },
    null,
    [ce("h1", {}, "Home"),
    ce("h1", {}, "Home"),
    ce("h1", {}, "Home")],
  );*/
/*
  const heading1 = ce(
    "h1",
    {
        id: "title",
        key: "h1",
    },
    null,
    [ce("h1", {}, "Home"),
    ce("h1", {}, "Home"),
    ce("h1", {}, "Home")],
  );
*/
/*
const heading2 = React.createElement( 
  "h2", // This syntax is known as React Element
  {
    id: "title",
    key: "h2"  
  },
  "Heading 2 from Parcel"
);*/

// React.createElement ==> Object ==> HTML(DOM)

  //JSX ?? 
  //While this syntax is known as jsx expression
  // Now we will write code in JSX

  // What is React element at the end of the day:
  //It is an object
  /*const heading = (
  <h1 id  = "heading" key="h1" tabIndex="1"> 
    Namste React
    </h1>
);
*/
// if we want to render heading element inside react component, simply write {React_component} 

//This and below code are the same thing
/*
const HeaderComponent = () =>{
  return (
  <div>
    <h1 id  = "heading" key="h1" tabIndex="1"> 
    Namste React
    </h1>
    <h2>Namaste React functional component</h2>
    <h2>This is a H2 tag</h2>
    </div>
    );
}
*/
/*const HeaderComponent = () =>{
  return (
  <div>
    {heading} 
    <h2>Namaste React functional component</h2>
    <h2>This is a H2 tag</h2>
    </div>
    );
}*/

// if we make our Reacr element as component then, I have to use <Title /> or {Title()} instead of {heading}

const title = (
  <h1>Namate React from title React Element</h1>
);

//Now this is not a normal variable but a functional component
const Title = () =>(
  <h5>Namate React from Title Functional Component</h5>
);

// var data = api.getData(); 
//Cross Site Scripting Attack(XSS)

//JSX is very Secure

// var xyz =10; //JSX OP, in jsx use {} and inside curly braces you can write javascript in jsx
const HeaderComponent = () =>
{
  return (
    <div>
      {/* <Title /> */}
      {/* {Title()} */}
      {/* {100**2}  */}
      {/* {console.log("5+6")} */}
      {/* {data} JSX does sanitizaton */}
      
      {title}
      {Title()} {/*If i want to use component inside component, this is Known as Component composition or composite components*/}
      <Title />
      <h2>Namste in h2</h2>
      
    </div>
  );
}
// What is a React component at the end of the day:
//It is an function

/*
//This is an React element 
const heading5 = () => (
  <h1>
    Namaste React
  </h1>
);*/
    
 
  /*
  const heading2 = React.createElement(
    "h2",
    {
      id: "title",
      key: "h2"  
    },
    null,
    "Heading 2 from Parcel"
  );

  // console.log(heading2); ..It will return an Object
  const heading3 = React.createElement(
    "h3",
    {
      id: "title",
      key: "h3"  
    },
    null,
    "Heading 3 from Parcel"
  );*/

    /*<div class="header">
      <h1>Namaste React</h1>
      <ul>
        <li>Home</li>
        <li>Contact Us</li>
        <li>Support</li>
      </ul>
    </div>*/
  

    //Using React to do a epic shit and Creacting multiple li's using React.createElement but We can do the same thing using JSX.
    /*
  const container = React.createElement(
    "div", //Tag
    {
      id: "container", //attributes or props or properties
      hello: "world",
    },
    // If we have to pass Multiple Childrens then we have to pass them as an array
    [React.createElement(
      "h1",
      {
          id: "title",
          key: "h1",
      },
      null,
      "Heading 1 Parcel",
    ), 
    React.createElement("ul",{},[React.createElement("li", {}, "Home"), 
                                React.createElement("li", {}, "About Us"), 
                                React.createElement("li", {}, "Contact Us"),
                                React.createElement("li", {}, "Services")],
    )] //childern
  );*/
  console.log(heading);
  // heading.innerHTML = "Vaibhav Saxena here";
  const root = ReactDOM.createRoot(document.getElementById("root"));

  //Passing a react Element inside a root
  // root.render(container);
  root.render(<HeaderComponent />);
/*
  //For Production Ready app:
  1.Minify
  2. Optimization
  3. Caching
  4. Clean Console
  5. Bundle
  */

  //  **React Components **
      // Everything in React is a component

      /*there are two types of components:
      functional : it is new way of writing code 
      class based : old way

      IN this course we will use functional component,
      we will learn about class compo. too
      */

      // ** Functional Components **
        /*It is nothing but js functions that returns jsx or React.createElement*/
        //in Functional ccomponent name of component, or in any other component, Name starts with a capital letter. like HeaderComponent,it is not mandatroy by it is a good practice

      // const HeaderComponent = () =>{
      //     return <h1>Namaste React functional component</h1>;
      // }

      //The below four templates of code works the same

      //  const HeaderComponent = () =>{
      //   return <div><h1>Namaste React in React</h1><h2>H2 Tag</h2></div>;
      //  }

      
      //If we write the above code in one line we can skip the use of parentheses and apply a semicolon at the end of the code

      
      // For now we are using this
      /*const HeaderComponent = () =>{
        return (
        <div>
          <h1>Namaste React functional component</h1>
          <h2>This is a H2 tag</h2>
          </div>
          );
      }*/

      /*
      const HeaderComponent = function () =>{
        return (
        <div>
          <h1>Namaste React functional component</h1>
          <h2>This is a H2 tag</h2>
          </div>
          );
      }

      */
/* // Use this in production 
      const HeaderComponent = () => (
        <div>
          <h1>Namaste React functional component</h1>
          <h2>This is a H2 tag</h2>
          </div>
          );*/

          // for react element we use for, render:
          // root.render(heading);

          // but for react functional component we use below syntax, for render:
          //root.render(<HeaderComponent />);



/*Summary 
1. written scripts in package.json
2.installed a new plugin babel to remove console.log
3. browserlist
4. configered .babelrc file
5. Talked about keys, react recolinaltion
6. What is JSX
7. functional component
8. we can render/ use FC by using <HeaderComponent />
9. We can write Javascript in jsx by using {} curly braces
10. I can call a function inside JSX by using {}
11. We can skip, return i JSX 
12.  how to create package or library in react
*/