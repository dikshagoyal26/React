import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from '../assets/img/logo.png'
import UserContext from "../utils/UserContext";
import useOnline from "../utils/useOnline";

const Title = () => (
  <Link to="/">
    <img
      className="h-28 p-2"
      alt="food villa"
      data-testid="logo"
      src={Logo}
    />
  </Link>
);
const User = () => (
  <div className="user">
    <img
      className="user-img"
      src="https://ia801009.us.archive.org/13/items/HeaderIconUser/Header-Icon-User.png"
      alt="user"
    />
  </div>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useContext(UserContext);
  const isOnline = useOnline()
  const items = useSelector((state) => state.cart.items);
  console.log(items);
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-2">
            <Link to={"/offers"}>Offers</Link>
          </li>
          <li className="px-2">Restaurants</li>
          <li className="px-2">
            <Link to={"/cart"}>Cart - <span data-testid="cart-items">{items.length}</span></Link>
          </li>
          <li className="px-2">
            <Link to={"/instamart"}>Instamart</Link>
          </li>
        </ul>
      </div>
      <h1 data-testid="online-status">{isOnline? "Online" : "Offline"}</h1>
      {!isLoggedIn ? (
        <button
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          Login
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          Logout
        </button>
      )}
      <span> {user.name}</span>
    </div>
  );
};

export default Header;
