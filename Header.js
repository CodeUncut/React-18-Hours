export const Title = () =>(
    <a href ="/">
        <img
            className ="logo"
            alt="logo"
            src = "https://www.daysoftheyear.com/wp-content/uploads/national-fast-food-day.jpg" 
        />
    </a>
);

// export const Header = () =>

const Header = () =>
{
  return (
    <div className="header">       
      <Title />
      <div className="nav-items">
      <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Cart</li>
      </ul>
      </div>
    </div>
  );
};

export default Header;