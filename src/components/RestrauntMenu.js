import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constant";
import { addToCart } from "../utils/cartSlice";
import useRestraunt from "../utils/useRestraunt";
import Shimmer from "./Shimmer";

const RestrauntMenu = () => {
  const { resId } = useParams();
  const restraunt = useRestraunt(resId);

  const dispatch = useDispatch();

  const handleAddToCart = (menuItem) => {
    dispatch(addToCart(menuItem))
  };

  return !restraunt || Object.keys(restraunt).length == 0 ? (
    <Shimmer />
  ) : (
    <div className="menu" >
      <div>
        <img src={IMG_CDN_URL + restraunt?.cloudinaryImageId} />
        <h1>Restraunt : {restraunt?.name}</h1>
        <h1>{restraunt?.name}</h1>
        <h1>{restraunt?.area}</h1>
        <h1>{restraunt?.city}</h1>
        <h1>{restraunt?.avgRating} stars</h1>
        <h1>{restraunt?.costForTwoMsg}</h1>
      </div>
      <div>
        <h1>Menu Items</h1>
        <ul data-testid="menu">
          {Object.values(restraunt?.menu?.items ?? {}).map((menuItem) => (
            <li key={menuItem.id}>
              {menuItem.name}
              <button
                className="p-1 m-0.5 border border-green-500"
                onClick={()=>handleAddToCart(menuItem)}
                data-testid="add-btn"
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestrauntMenu;
