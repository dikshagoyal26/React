import { useState } from "react";
import { RESTAURANT_LIST } from "../constant";
import RestrauntCard from "./RestrauntCard";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState(RESTAURANT_LIST);
  const [searchInput, setSearchInput] = useState("");
  const filterData = (searchText, restaurants) => 
    restaurants.filter((restaurant)=> restaurant.data.name.toLowerCase().includes(searchText.trim().toLowerCase()) )
  ;
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search Restraunts"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchInput, RESTAURANT_LIST);
            setRestaurantData(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurantData.map((restaurant) => (
          <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
        ))}
      </div>
    </>
  );
};

export default Body;
