import React from "react";

const Logo = () => (
  <div className="logo">
    <img
      className="logo-img"
      src="https://cdn1.iconfinder.com/data/icons/logos-and-brands-3/512/84_Dev_logo_logos-512.png"
      alt="Dev Logo"
    />
  </div>
);
const Search = () => (
  <div className="search-bar">
    <input placeholder="Type anything here" type="text" />
  </div>
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
  <div className="header-container">
    <Logo />
    <Search />
    <User />
  </div>
);
