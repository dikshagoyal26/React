import { restrautList } from "./constant";

const RestrauntCard = ({
  name,
  cuisines,
  lastMileTravelString,
  cloudinaryImageId,
}) => (
  <div className="card">
    {console.log("list card")}
    <img
      src={
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
        cloudinaryImageId
      }
      alt=""
    />
    <h2>{name}</h2>
    <h3>{cuisines?.join(", ")}</h3>
    <h4>{lastMileTravelString} minutes</h4>
  </div>
);

export const Body = () => (
  <div className="restaurant-list">
    {restrautList.map((restaurant) => (
      <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
    ))}
  </div>
);

