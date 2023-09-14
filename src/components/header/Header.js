import React from "react";
import "./Header.css";
import tv from "../../assets/tv.png";
import search from "../../assets/Search.svg";
import menu from "../../assets/Menu.svg";
import { Link } from "react-router-dom";

const Header = ({
  handleSearch,
  searchResult,
  setSearchResult,
  setSearchQuery,
}) => {
  const handleChange = async (e) => {
    setSearchQuery(e.target.value);
    handleSearch();
  };

  return (
    <header className="px-[30px] md:px-[30px] lg:px-[70px]">
      <Link to="/" className="flex items-center gap-3">
        <img src={tv} alt="a tv icon" />
        <h3>MovieBox</h3>
      </Link>
      <div className="inputField">
        <input
          type="text"
          placeholder="what do you want to watch?"
          onChange={handleChange}
        />
        <img src={search} alt="a seacrh icon" onClick={handleSearch} />
      </div>
      <div>
        <a href="http://" className="text-white">
          Sign in
        </a>
        <a href="http://">
          <img src={menu} alt="a menu bar" />
        </a>
      </div>
    </header>
  );
};

export default Header;
