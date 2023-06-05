import { IMG_ID_CDN } from "/constants";

const RestaurentCard = ({ 
    name, 
    cuisines, 
    cloudinaryImageId, 
    minDeliveryTime }) => {
    // console.log(props)
  
    // const {name, cuisines, cloudinaryImageId, minDeliveryTime} = restaurnt.data;
    return(
      <div className="card">
        <img src={
          // "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" 
          IMG_ID_CDN
        +cloudinaryImageId}/>
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        
        <h4>{minDeliveryTime} ETA </h4>
      </div>
    )
  };

  export default RestaurentCard;