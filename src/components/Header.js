import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../actions";
import HeaderStyles from "./styles/HeaderStyles";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <HeaderStyles>
      <div className="menu-button">
        <button onClick={() => dispatch(toggleMenu())}>&#9776;</button>
      </div>
      <div className="user">
        <p>Emerson Pereira</p>
        <img
          src="https://secure.gravatar.com/avatar/1e7bab935d3e724a07874ce45fd22d4b?s=64"
          alt="Emerson Pereira"
        />
      </div>
    </HeaderStyles>
  );
};

export default Header;
