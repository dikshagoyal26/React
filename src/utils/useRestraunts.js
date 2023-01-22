import { useState, useEffect } from "react";
import { FETCH_RESTRAUNTS_URL } from "../constant";
const useRestraunts = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  useEffect(() => {
    fetchRestraunts();
  }, []);

  async function fetchRestraunts() {
    try {
      const response = await fetch(FETCH_RESTRAUNTS_URL);
      const json = await response.json();
      setRestaurantData(json?.data?.cards[2]?.data?.data?.cards);
    } catch (e) {
      console.error(e);
      setRestaurantData([]);
    }
  }
  return restaurantData;
};
export default useRestraunts;
