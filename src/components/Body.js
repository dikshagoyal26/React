import { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
import { filterData } from "../utils/helper";
import useRestraunts from "../utils/useRestraunts";
import useOnline from "../utils/useOnline";

const Body = () => {
  const restaurantData = useRestraunts()
  const [filteredData, setFilteredData] = useState(restaurantData);
  const [searchInput, setSearchInput] = useState("");

  useEffect(()=>{
    setFilteredData(restaurantData)
  }, [restaurantData])


  if (!restaurantData) return null;

  const isOnline = useOnline();

  if(!isOnline){
    return <h1>Offline, please check your internet connection!!</h1>
  }

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
            <Link
              to={`/restraunt/${restaurant.data.id}`}
              key={restaurant.data.id}
            >
              <RestrauntCard {...restaurant.data} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Body;
