
import React from "react"; 
import ReactDOM from "react-dom/client"; //It is used for dom

//App Layout
/**Header
        -> Logo (Title)
        -> Nav Bar/ Nav Items(Right Side)
        -> Cart
    *Body*
        ->SearchBar
        ->Restaurant List
          ->Restaurany Card (Many)
            -> Image
            ->Name
            ->Rating
            ->Cusinines
    *Footer
      -> Links
      ->CopyRight */
// const title = (
//   <h1>Food Villa</h1>
// );

//Now this is not a normal variable but a functional component
const Title = () =>(
  <a href="/">
  <img className = "logo" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMREhUQExEVFRUWFxgVFxgWFRUYFxYYFRUWFhUVFRgZHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygvLisBCgoKDg0OGxAQGy0lICUtLy0tLS0tLSstLi8tLS8tLS8tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwQFBgECB//EAEsQAAEDAgIFCAUGCgkFAAAAAAEAAgMEERIhBTFBUWEGEzJxgZGh0RQiUrHBQpKistLwFTNTVGJyc4KD4SMkNENVk8Li8QdFY7PT/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECBAMFBv/EADoRAAEDAgIGBwYFBAMAAAAAAAEAAhEDITFBBBJRcYGREyJhobHB0SMyQlLh8AUUU3LSQ2KC8TNzkv/aAAwDAQACEQMRAD8A/cURERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERVaytZELuPUNp6lV72saXOMAZqQCTAVlZ1XpiKPLFiO5ufedSzrz1W3m4vf8Aa9yt09JTw5lzSd7iCewbF550qpVE0wGt+Z9p3NseJgLQKTW+/JOweZyVV+mJ35xw2G83PjkF8ugrn/3jWcLt+AK0TIZiA24jBuXai62YA2gXzvwVauoKP+8EQO/Fhd84G6p0LnDWdUJH7tQcIBtx3KweAYDQOGse8qi/RukNlS35x+wq8rdKRC4cyQDPXH8Q0+Kl5zmj/Q6SGH2ZwJAOp9wbdqv6P/pSDJVxzW1MiwtZfYSMRc7tNuCMo0yYa50/9k+Z8J7FLnuAkgR+36eawHctqint6XRuaPaaC3uxXB+cui0Nynpqqwjks72HjC/sB19l1ZrKaUglkgd+hI1pY7hkAR15rnn8m6WqDnMZ6PK02e1trNdxZqtuItddpr0zqg63Y607iPAhU9k8SRHaL9x8l2aLjaWuqqIiOoBli1B+s9jjr6nZrqqWpbK0PYbg/ex3FdqOlMqktwcMWmxHqO0LnUpFl8RkRgrCIi0rkiIi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1dOjd855N/iqlwPwjv8AVUo6qQ64HD96P7SsMeTraR1kfAqVFYNIzJ5eQCqSiIiuoREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREX//2Q==" alt="Vab Foods" />
  </a>
);

//Composing Components:
const HeaderComponent = () =>
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

//Dynamic Restaurent Card
const guruKripa =
{
  image:"https://www.daysoftheyear.com/wp-content/uploads/national-fast-food-day.jpg",
  name : "GuruKripa",
  cuisines: ["Thali", "Indian"],
  rating: "4.6"
};

// RestaurantList is JSON Data for displaying cards
const restaurentList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "74453",
      name: "Domino's Pizza",
      uuid: "87727dbd-7f2b-4857-9763-359624165845",
      city: "21",
      area: "Athwa",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "bz9zkh2aqywjhpankb07",
      cuisines: ["Pizzas"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 45,
      minDeliveryTime: 45,
      maxDeliveryTime: 45,
      slaString: "45 MINS",
      lastMileTravel: 0,
      slugs: {
        restaurant: "dominos-pizza-majura-nondh-test_surat",
        city: "surat",
      },
      cityState: "21",
      address:
        "Shop 32 To 35, Sheetal Shopping Square,Near Lb Turning Point, Bhatar Road,MAJURA NONDH, Surat,GUJARAT-395001",
      locality: "Bhatar Road",
      parentId: 2456,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "74453",
        deliveryTime: 45,
        minDeliveryTime: 45,
        maxDeliveryTime: 45,
        lastMileTravel: 0,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "410476",
      name: "The Brooklyn Creamery - Healthy Ice Cream",
      uuid: "82e23b48-b6bd-4ee0-9746-06737ec062b0",
      city: "21",
      area: "althan bhatar",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "ldtibwymvzehvmdwl8la",
      cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: "30-40 MINS",
      lastMileTravel: 6.300000190734863,
      slugs: {
        restaurant: "the-brooklyn-creamery-low-cal-ice-cream-adajan-fc-adajan",
        city: "surat",
      },
      cityState: "21",
      address:
        "C paiki, Chalta no. 23, Guru Ashish Building, Ground Floor, Opp Kotyark Nagar, Rander Road, Surat 395005",
      locality: "Adajan FC",
      parentId: 236673,
      unserviceable: true,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "410476",
        deliveryTime: 31,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        lastMileTravel: 6.300000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.4",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "81094",
      name: "Richie Rich Juices & Shakes",
      uuid: "40b0b55b-e9af-43e7-aeae-be1b012d0b1d",
      city: "21",
      area: "Athwa",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "nyp7yrzwc1dc2xqfkydk",
      cuisines: ["Ice Cream"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 30,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: "30-40 MINS",
      lastMileTravel: 5.599999904632568,
      slugs: {
        restaurant: "juices-shakes-by-richie-rich-athwa-athwa",
        city: "surat",
      },
      cityState: "21",
      address:
        "Richie Rich Building , Opposite Golden Square Complex, Parle Point, Athwa, Surat",
      locality: "Parle Point",
      parentId: 771,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "5.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "81094",
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        lastMileTravel: 5.599999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.9",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "311443",
      name: "Siddhi Icecream & Thick Shake",
      uuid: "1ca3e8c2-e5da-4b59-8f7e-868991cb40b7",
      city: "21",
      area: "Nanpura",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "spd3y5gok3vvwqulgmda",
      cuisines: ["Ice Cream", "Juices", "Desserts", "Beverages"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 30,
      minDeliveryTime: 25,
      maxDeliveryTime: 35,
      slaString: "25-35 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "siddhi-icecream-athwa-athwa",
        city: "surat",
      },
      cityState: "21",
      address:
        "siddhi icecream, Kadampally Society, Timaliawad, Nanpura, Surat, Gujarat, India",
      locality: "Athwa",
      parentId: 387846,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "311443",
        deliveryTime: 30,
        minDeliveryTime: 25,
        maxDeliveryTime: 35,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.5",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "307070",
      name: "Pizza Pie",
      uuid: "68598bcb-7460-4466-a8b2-113158c6cf8c",
      city: "21",
      area: "Nanpura",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "bvr70adr30ejyr5ua79k",
      cuisines: ["Pizzas"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 37,
      minDeliveryTime: 35,
      maxDeliveryTime: 45,
      slaString: "35-45 MINS",
      lastMileTravel: 4,
      slugs: {
        restaurant: "pizza-pie-athwa-athwa",
        city: "surat",
      },
      cityState: "21",
      address:
        "1/704 Sarang building, Nanpura New Rd, opposite river palace, near Ramji Mandir, Nanpura, Surat, Gujarat",
      locality: "Nanpura",
      parentId: 158854,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "307070",
        deliveryTime: 37,
        minDeliveryTime: 35,
        maxDeliveryTime: 45,
        lastMileTravel: 4,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "76858",
      name: "Feeling Hungry",
      uuid: "45f9ea54-f3cf-4f6b-8d85-e3468657fe51",
      city: "21",
      area: "Athwa",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "oxsb5mr1xsmhnxhunjsc",
      cuisines: ["Chinese", "North Indian", "Biryani"],
      tags: [],
      costForTwo: 2000,
      costForTwoString: "₹20 FOR TWO",
      deliveryTime: 35,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: "30-40 MINS",
      lastMileTravel: 3.700000047683716,
      slugs: {
        restaurant: "feeling-hungry-adajan-gam-adajan",
        city: "surat",
      },
      cityState: "21",
      address:
        "GF shop no 1, Babubhai Chambers, Beside Sardar Bridge , Athwagate, surat",
      locality: "Royal Residency, Adajan Gam",
      parentId: 79237,
      unserviceable: true,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "76858",
        deliveryTime: 35,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        lastMileTravel: 3.700000047683716,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.2",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "617279",
      name: "Malaxmi Fast Food",
      uuid: "4848cb1b-b1c4-4a6e-9a6d-f96b781357db",
      city: "21",
      area: "Adajan",
      totalRatingsString: "20+ ratings",
      cloudinaryImageId: "agkm7cflq72tkualhstb",
      cuisines: ["Fast Food", "Pizzas", "Snacks", "Beverages"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 44,
      minDeliveryTime: 40,
      maxDeliveryTime: 50,
      slaString: "40-50 MINS",
      lastMileTravel: 9.100000381469727,
      slugs: {
        restaurant: "mahalaxmi-fast-food-adajan-adajan-2",
        city: "surat",
      },
      cityState: "21",
      address: "shop no 15,palanpur food zone,opp.sai trith,pal gam suart",
      locality: "Palanpur Food Zone",
      parentId: 373635,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "9.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "617279",
        deliveryTime: 44,
        minDeliveryTime: 40,
        maxDeliveryTime: 50,
        lastMileTravel: 9.100000381469727,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 20,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "469264",
      name: "Dessert House",
      uuid: "7a320917-c577-49cb-875a-1e585a3adbc1",
      city: "21",
      area: "Piplod",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "jegpumsjcmomksbr2sxr",
      cuisines: ["Desserts", "Ice Cream"],
      tags: [],
      costForTwo: 15000,
      costForTwoString: "₹150 FOR TWO",
      deliveryTime: 27,
      minDeliveryTime: 25,
      maxDeliveryTime: 35,
      slaString: "25-35 MINS",
      lastMileTravel: 6.199999809265137,
      slugs: {
        restaurant: "dessert-house-piplod-piplod",
        city: "surat",
      },
      cityState: "21",
      address:
        "SHOP NO 2, MARVELLA CORRIDOR OPP. C B PATEL HEALTH CLUB V.I.P ROAD, VESU",
      locality: "Piplod",
      parentId: 71430,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "469264",
        deliveryTime: 27,
        minDeliveryTime: 25,
        maxDeliveryTime: 35,
        lastMileTravel: 6.199999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.5",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "395204",
      name: "McDonald's Gourmet Burger Collection",
      uuid: "55c33a9b-bb51-4b9d-8c94-708d48b08ebd",
      city: "21",
      area: "Piplod",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "wzbo5xivr8hstl0vxzcm",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: "30-40 MINS",
      lastMileTravel: 8.199999809265137,
      slugs: {
        restaurant:
          "mcdonalds-gourmet-burger-collection-valentine-cinema-piplod",
        city: "surat",
      },
      cityState: "21",
      address:
        "MC Donalds Family Restaurant Valentine Mall Valentine Cine Vision Surat , Dhumas Road, Nr Govardhan Haveli, Surat 395007",
      locality: "Valentine Cinema",
      parentId: 10761,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "8.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "395204",
        deliveryTime: 31,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        lastMileTravel: 8.199999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "193541",
      name: "Behrouz Biryani",
      uuid: "abc2e9d1-df00-4449-bde3-4c35982d0ef3",
      city: "21",
      area: "Adajan Patiya",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "craozjakzx7sll2uracb",
      cuisines: [
        "Biryani",
        "Mughlai",
        "Lucknowi",
        "Hyderabadi",
        "Kebabs",
        "North Indian",
        "Persian",
        "Desserts",
      ],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 49,
      minDeliveryTime: 45,
      maxDeliveryTime: 55,
      slaString: "45-55 MINS",
      lastMileTravel: 6.400000095367432,
      slugs: {
        restaurant: "behrouz-biryani-adajan-adajan",
        city: "surat",
      },
      cityState: "21",
      address:
        "Chalta no 23, Ground Floor, Guru Ashish Building, Below Stallon Gym, Opp Kotyark Nagar, Near Navyug College, Adajan, Surat 395005",
      locality: "Nr Navyug College, Rander Road",
      parentId: 1803,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "193541",
        deliveryTime: 49,
        minDeliveryTime: 45,
        maxDeliveryTime: 55,
        lastMileTravel: 6.400000095367432,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.3",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "475510",
      name: "Momos House",
      uuid: "34320d9a-ffa7-450c-ad61-d50485306626",
      city: "21",
      area: "Piplod",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "vmold2zualdrrypxcvue",
      cuisines: ["Fast Food"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: "30-40 MINS",
      lastMileTravel: 6.199999809265137,
      slugs: {
        restaurant: "momo’s-house-piplod-piplod",
        city: "surat",
      },
      cityState: "21",
      address:
        "SHOP NO - 2, MARVELLA CORRIDOR, OPP. C B PATEL HEALTH CLUB, V.I.P. ROAD, Surat,, Vesu , Surat Municipal Corporation, Surat Municipal Corporation, Gujarat - 395007",
      locality: "Vesu",
      parentId: 15884,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "475510",
        deliveryTime: 31,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        lastMileTravel: 6.199999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "127596",
      name: "Sabir Chicken",
      uuid: "f0f49821-52ed-4435-9014-c845e964a3d8",
      city: "21",
      area: "Chowk Bazar",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "kilrdjqt8chduasii5ni",
      cuisines: ["North Indian", "Biryani"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 30,
      minDeliveryTime: 25,
      maxDeliveryTime: 35,
      slaString: "25-35 MINS",
      lastMileTravel: 4.300000190734863,
      slugs: {
        restaurant: "sabir-chicken-athwa-athwa",
        city: "surat",
      },
      cityState: "21",
      address:
        "Nehru Bridge, Behind Nagin Chand Hall, Chowk Bazar, Surat, Gujarat 395003",
      locality: "Chowk Bazar",
      parentId: 173978,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "127596",
        deliveryTime: 30,
        minDeliveryTime: 25,
        maxDeliveryTime: 35,
        lastMileTravel: 4.300000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "64656",
      name: "Mahesh Pav Bhaji",
      uuid: "ccfda4b9-82b1-4f22-9567-eb98c448b267",
      city: "21",
      area: "Adajan",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "84d3bea985f13bd980dc39c9c73bc87f",
      cuisines: ["Desserts", "Chinese", "South Indian", "Ice Cream", "Pizzas"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 36,
      minDeliveryTime: 35,
      maxDeliveryTime: 45,
      slaString: "35-45 MINS",
      lastMileTravel: 6.900000095367432,
      slugs: {
        restaurant: "mahesh-pav-bhaji-adajan-gam-adajan",
        city: "surat",
      },
      cityState: "21",
      address:
        "Shop 12, Garden View Apartment, Honey Park Road, Adajan Gam, Surat",
      locality: "Adajan Gam",
      parentId: 6553,
      unserviceable: true,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "30% off",
        shortDescriptionList: [
          {
            meta: "30% off | Use JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "30% off up to ₹150 on orders above ₹400 | Use code JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "30% OFF",
        shortDescriptionList: [
          {
            meta: "Use JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "30% off up to ₹150 on orders above ₹400 | Use code JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.9 kms",
      hasSurge: false,
      sla: {
        restaurantId: "64656",
        deliveryTime: 36,
        minDeliveryTime: 35,
        maxDeliveryTime: 45,
        lastMileTravel: 6.900000095367432,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "255204",
      name: "The Dango Cake Shop",
      uuid: "dbfd3f3c-77a6-4979-96c4-ce9863e54cdc",
      city: "21",
      area: "Galaxy Circle",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "mnvfpsoealkflze4e5qi",
      cuisines: ["Bakery"],
      tags: [],
      costForTwo: 27000,
      costForTwoString: "₹270 FOR TWO",
      deliveryTime: 34,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: "30-40 MINS",
      lastMileTravel: 7.699999809265137,
      slugs: {
        restaurant: "twisted-cake-live-cake-adajan-adajan",
        city: "surat",
      },
      cityState: "21",
      address: "44 La Victoria, galaxy circle pal Surat",
      locality: "Galaxy Circle",
      parentId: 207513,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "7.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "255204",
        deliveryTime: 34,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        lastMileTravel: 7.699999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "664656",
      name: "Cheezylicious Cafe",
      uuid: "5880e561-10ed-4f96-990b-2251e2f09c82",
      city: "21",
      area: "Piplod",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "fda9ad56b9d62070fec105cd93693129",
      cuisines: [
        "Cafe",
        "Fast Food",
        "Chinese",
        "Snacks",
        "Italian",
        "Mexican",
      ],
      tags: [],
      costForTwo: 15000,
      costForTwoString: "₹150 FOR TWO",
      deliveryTime: 38,
      minDeliveryTime: 35,
      maxDeliveryTime: 45,
      slaString: "35-45 MINS",
      lastMileTravel: 7.599999904632568,
      slugs: {
        restaurant: "cheezylicious-cafe-piplod-piplod-2",
        city: "surat",
      },
      cityState: "21",
      address:
        "Shop no G10 ground floor, aagam square B/S Dream heritage, Canal road, Vesu",
      locality: "Dream heritage",
      parentId: 59292,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "7.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "664656",
        deliveryTime: 38,
        minDeliveryTime: 35,
        maxDeliveryTime: 45,
        lastMileTravel: 7.599999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.9",
      totalRatings: 0,
      new: true,
    },
    subtype: "basic",
  },
];
//Config UI Down?//
/*
//Config driven ui or Dynamic Ui
//carausal

const config = [
  {
    type : "carousel",
    cards: [
      {
        offerName : "Free Delivery"
      },
      {
        offerName: "50% Off"
      }
    ]
  },

  {
    type : "restaurent",
    cards: [
      {
        image:"https://www.daysoftheyear.com/wp-content/uploads/national-fast-food-day.jpg",
        name : "GuruKripa",
        cusines: ["Thali", "Indian"],
        rating: "4.6"
      },
      {
        image:"https://www.daysoftheyear.com/wp-content/uploads/national-fast-food-day.jpg",
        name : "Vishu & Sharma",
        cuisines: ["Thali", "Indian"],
        rating: "4.6"
      }
    ]
  }
]
*/

//Making Restaurant Card
// const RestaurentCard = (props) => {
  const RestaurentCard = ({ 
  name, 
  cuisines, 
  cloudinaryImageId, 
  minDeliveryTime }) => {
  // console.log(props)

  // const {name, cuisines, cloudinaryImageId, minDeliveryTime} = restaurnt.data;
  return(
    <div className="card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" 
      +cloudinaryImageId}/>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      
      <h4>{minDeliveryTime} ETA </h4>
    </div>
  )
};

//props -> Propertiez

// no key << index key[ONLY Use only if there is no unique key] << unique key[best Practice] (this is very imp to provide key)

//Composing Body
const Body = () =>{
  return(
    <div className ="restaurent-list">
      
      {/*We can use .map to render all the restaurants all at once instead of rendering one by one */}

      {/* {RestaurentCard(restaurentList[0])} */}

      {
        restaurentList.map((resturant, index )=> {
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
  )
};

const Footer = () =>{
  return <h1>Footer</h1>
}

const AppLayout = () =>{
  return(
    
      <>
      <HeaderComponent/>
      <Body/>
      <Footer/>
      </>
  )
  };
// As we know JSX component can only have 1 parent
//React.Fragment == <> </>

/*const StyleObj = {
  border: "1px solid red",
}

const jsx = (
<div style = {{backgroundColor: "red"}}>

  <h1>JSX1</h1>
  <h1>JSX2</h1>
</div>
);*/
  const root = ReactDOM.createRoot(document.getElementById("root"));


  root.render(<AppLayout />);
