import React from "react";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="food villa"
      src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0"
    />
  </a>
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

export const Header = () => (
  <div className="header">
    <Title />
    <div className="nav-items">
      <ul>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
        <li>User</li>
      </ul>
    </div>
  </div>
);
