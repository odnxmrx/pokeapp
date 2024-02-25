import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {

  return (
    <div className={style.navContainer}>
      <ul>
        <li className={style.myLogo}>
          <Link to="/home">PokéApp</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to='/create'>Create</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar;