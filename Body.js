import { restaurentList } from "/constants";
import RestaurentCard from "/RestaurantCard";

//Where do we get use state from ?
//Ans. We will get it from react and import it as a named export

import { useState } from "react";

// Body Component

// What is state?

//What is Hooks?
//Ans. At the end of the day hook is a normal js function

// What is useState?
// Ans. to create state variables

function filterData(searchText, restaurants) {
  // return restaurants.filter((restaurant) => restaurant.data.name.includes(searchText))
  const filterData = restaurants.filter((resturant) => 
    resturant.data.name.includes(searchText)
  );

  return filterData;
}


const Body = () =>{

    // const searchTxt = "PaniPuri"; // In JS
    const [restaurants, setRestaurants] = useState(restaurentList);
    // searchText is a local state variable
    const [searchText, setSearchText] = useState(""); // used to create state variable   // IN React
    //It returns an array in the form of [variable name, function to be updated]

    //Let's create a searchClicked Variable
    // const searchClicked = false; //In Js

    // const [searchClicked , setSearchClicked] = useState("false");
    


    return(
    <>
      <div className="search-container">
        <input 
        type="text" 
        className="search-input" 
        placeholder="Search here" 
        value= {searchText} 
        onChange ={(e) =>
        {
          // e.target.value -> whatever we change in input field
            // searchText = e.target.value;
            setSearchText(e.target.value)
        }} />
        
        {/* <h1>{searchClicked}</h1> */}
        <button className="search-btn" onClick={() =>{
       
          // need to Filter out Data
          const data = filterData(searchText, restaurants);

          //update the state -> restaurants
          setRestaurants(data);

             // if(searchClicked === "true"){
          //   setSearchClicked("false");
          // }
          // else{
          //   setSearchClicked("true")
          // }
          }}
          >
            Search</button> 
      </div>
      <div className ="restaurent-list">
        
        {/* We can use .map to render all the restaurants all at once instead of rendering one by one */}
  
        {/* {RestaurentCard(restaurentList[0])} */}
  
        {
          restaurants.map((resturant)=> {
            return <RestaurentCard {...resturant.data} key={resturant.data.id} />
          })}
  
        {/*<RestaurentCard {...restaurentList[0].data}/>
        <RestaurentCard {...restaurentList[1].data}/>
        <RestaurentCard {...restaurentList[2].data}/>
        <RestaurentCard {...restaurentList[3].data}/>
        <RestaurentCard {...restaurentList[4].data} />
        <RestaurentCard {...restaurentList[5].data} />
        <RestaurentCard {...restaurentList[6].data} />
        <RestaurentCard {...restaurentList[7].data} />
        <RestaurentCard {...restaurentList[8].data} />
        <RestaurentCard {...restaurentList[9].data} />
        <RestaurentCard {...restaurentList[10].data} />
        <RestaurentCard {...restaurentList[11].data} />
        */}
        {/* <RestaurentCard name = {restaurentList[2].data.name} cuisines = {restaurentList[2].data.cuisines}/> */}
        {/* <RestaurentCard restaurnt = {restaurentList[3]} />
        <RestaurentCard restaurnt {...restaurentList[4]} />
        <RestaurentCard restaurnt = {restaurentList[5]} />
        <RestaurentCard restaurnt = {restaurentList[6]} />
        <RestaurentCard restaurnt = {restaurentList[7]} />
        <RestaurentCard restaurnt = {restaurentList[8]} />
        <RestaurentCard restaurnt = {restaurentList[9]} />
        <RestaurentCard restaurnt = {restaurentList[10]} />
        <RestaurentCard restaurnt = {restaurentList[11]} /> */}
      </div>
      </>
    )
  };

export default Body;