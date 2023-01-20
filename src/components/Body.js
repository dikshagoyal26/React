import { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";

const filterData = (searchText, restaurants) =>
  restaurants.filter((restaurant) =>
    restaurant?.data?.name
      ?.toLowerCase()
      ?.includes(searchText?.trim().toLowerCase())
  );

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetchRestraunts();
  }, []);

  async function fetchRestraunts() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6625055&lng=77.2106953&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      setRestaurantData(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredData(json?.data?.cards[2]?.data?.data?.cards);
    } catch (e) {
      console.error(e);
      setRestaurantData([]);
    }
  }

  // not render component (Early return)
  if (!restaurantData) return null;

  return restaurantData.length == 0 ? (
    <Shimmer />
  ) : (
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
            const data = filterData(searchInput, restaurantData);
            setFilteredData(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredData?.length === 0 ? (
          
          <h1>No Restraunts found</h1>
        ) : (
          filteredData.map((restaurant) => (
            <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
          ))
        )}
      </div>
    </>
  );
};

export default Body;
