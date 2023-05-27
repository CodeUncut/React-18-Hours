
import React from "react"; 
import ReactDOM from "react-dom/client"; //It is used for dom

//App Layout
/**Header
        -> Logo
        -> Nav Bar/ Nav Items(Right Side)
        -> Cart
    *Body*
        ->SearchBar
        ->Restaurant List
          ->Restauranr Card
            -> Image
            ->Name
            ->Rating
            ->Cusinines
    *Footer
      -> Links
      ->CopyRight */
const title = (
  <h1>Food Villa</h1>
);

//Now this is not a normal variable but a functional component
const Title = () =>(
  <h1>Food Villa</h1>
);

//Composing Components:
const HeaderComponent = () =>
{
  return (
    <div>
    
      
      {title}
      {console.log("Mera Naam vaibhav")}

      <Title />
      <h2>Namste in h2</h2>
      
    </div>
  );
};

const AppLayout = () =>{
  return(
    {

    }
  )
}

  const root = ReactDOM.createRoot(document.getElementById("root"));


  root.render(<HeaderComponent />);
