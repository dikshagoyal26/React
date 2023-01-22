import { useState, useEffect } from "react";
import { FETCH_RESTRAUNT_URL } from "../constant";

const useRestraunt = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    fetchRestraunt();
  }, []);

  async function fetchRestraunt() {
    const url = FETCH_RESTRAUNT_URL + resId;
    console.log(url);
    const response = await fetch(FETCH_RESTRAUNT_URL + resId);
    const json = await response.json();
    console.dir(json);
    setRestaurant(json.data);
  }

  return restaurant;
};
export default useRestraunt;
