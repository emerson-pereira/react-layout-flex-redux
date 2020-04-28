import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../actions";
import MenuStyles from "./styles/MenuStyles";

const Menu = () => {
  const isMenuOpen = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  return (
    <MenuStyles hide={!isMenuOpen}>
      <div className="title">
        <h1>Layout example with Redux</h1>
        <button className="close" onClick={() => dispatch(toggleMenu())}>
          X
        </button>
      </div>
      <ul>
        <li>Dashboard</li>
        <li className="active">Events</li>
      </ul>
    </MenuStyles>
  );
};

export default Menu;
