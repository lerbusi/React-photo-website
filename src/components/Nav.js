import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">照片搜尋</Link>
        </li>
        <li>
          <Link to="/about">關於此站</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
