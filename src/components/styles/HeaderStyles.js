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

export default HeaderStyles;
