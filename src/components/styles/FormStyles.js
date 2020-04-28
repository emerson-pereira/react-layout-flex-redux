import styled, { css } from "styled-components";

const FormStyles = styled.form`
  max-width: 800px;
  border: 2px solid #ccc;
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 10rem;
  right: 0;
  left: 0;
  ${(props) => css`
    visibility: ${props.hide ? "hidden" : "visible"};
  `}
  margin: 0 auto;
  background: #fff;
  width: 600px;
  @media (max-width: 600px) {
    width: 80vw;
  }
  h3 {
    margin: 20px 0;
    font-weight: 500;
  }
  & > label {
    padding: 10px 0;
    max-width: 250px;
    width: 100%;
    input:not([type="checkbox"]) {
      max-width: 250px;
      width: 100%;
    }
  }
  button {
    width: 100px;
    margin: 20px 0;
  }
`;

export default FormStyles;
