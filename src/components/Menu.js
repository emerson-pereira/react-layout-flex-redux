import React from "react";
import styled, { css } from "styled-components";

const MenuStyles = styled.section`
  background: #ccc;
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 300px;
  width: 100%;
  position: absolute;
  top: 0;
  ${(props) => css`
    left: ${props.hide ? "-320px" : "0"};
  `}
  transition: all 300ms;
  .title {
    border-bottom: 2px solid #333;
    height: 98px;
    display: flex;
    justify-content: space-between;
    h1 {
      margin: 0 20px;
      align-self: center;
      text-transform: uppercase;
      font-weight: 500;
    }
  }
  ul {
    list-style: none;
    margin: 20px 0;
    padding: 0;
    li {
      padding: 15px 20px;
      cursor: pointer;
      &.active,
      &:hover {
        font-weight: 500;
        background-color: #e6e6e6;
        transition: background-color 100ms linear;
      }
    }
  }
  .close {
    background: transparent;
    border: 0;
    font-size: 20px;
    margin: 0 20px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Menu = ({ showMenu, toggleMenu }) => {
  return (
    <MenuStyles hide={!showMenu}>
      <div className="title">
        <h1>Mosyle test</h1>
        <button className="close" onClick={() => toggleMenu(false)}>
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
