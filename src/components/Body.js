import { useEffect, useState, useContext } from "react";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useRestraunts from "../utils/useRestraunts";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const restaurantData = useRestraunts();
  const [filteredData, setFilteredData] = useState(restaurantData);
  const [searchInput, setSearchInput] = useState("");

  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    setFilteredData(restaurantData);
  }, [restaurantData]);

  if (!restaurantData) return null;

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Offline, please check your internet connection!!</h1>;
  }

  return restaurantData.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-5 bg-pink-50 my-5">
        <input
          type="text"
          className="focus:bg-green-200 p-2 m-2"
          placeholder="Search Restraunts"
          value={searchInput}
          data-testid="search-input"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="p-2 m-2 bg-purple-900 hover:bg-purple-500 text-white rounded-md"
          data-testid="search-btn"
          onClick={() => {
            const data = filterData(searchInput, restaurantData);
            setFilteredData(data);
          }}
        >
          Search
        </button>

        <input
          type="text"
          className="focus:bg-green-200 p-2 m-2"
          placeholder="User Name"
          value={user.name}
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }}
        />
        
        <input
          type="text"
          className="focus:bg-green-200 p-2 m-2"
          placeholder="User Email"
          value={user.email}
          onChange={(e) => {
            setUser({
              ...user,
              email: e.target.value,
            });
          }}
        />
      </div>
      <div className="flex flex-wrap" data-testid="restaurant-list">
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
