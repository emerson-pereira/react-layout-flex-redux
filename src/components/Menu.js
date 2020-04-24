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
    border-bottom: 1px solid #333;
    height: 100px;
    display: flex;
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
`;

const Menu = () => {
  return (
    <MenuStyles hide>
      <div className="title">
        <h1>Mosyle test</h1>
      </div>
      <ul>
        <li>Dashboard</li>
        <li className="active">Events</li>
      </ul>
    </MenuStyles>
  );
};

export default Menu;
