import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.header`
  background: #f2f2f2;
  display: flex;
  justify-content: space-between;
  height: 100px;
  .menu-button {
    display: flex;
    align-items: center;
    button {
      background-color: transparent;
      border: 0;
      font-size: 30px;
      margin: 0;
      padding: 0 20px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .user {
    display: flex;
    align-items: center;
    padding: 0 20px;
    p {
      padding: 0 20px 0 0;
      font-weight: 500;
    }
    img {
      border-radius: 100%;
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyles>
      <div className="menu-button">
        <button>&#9776;</button>
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
