import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
  <Link to="/">
    <img
      className="logo"
      alt="food villa"
      src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0"
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

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li><Link to={"/offers"}>Offers</Link></li>
          <li>Restaurants</li>
          <li>Cart</li>
          <li><Link to={"/instamart"}>Instamart</Link></li>
        </ul>
      </div>
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
    </div>
  );
};

export default Header;
