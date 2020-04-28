import styled from "styled-components";

const EventsStyled = styled.div`
  max-width: 1000px;
  @media (max-width: 1000px) {
    max-width: 600px;
  }
  margin: 0 auto;
  padding: 40px 0;
  button {
    background: #f2f2f2;
    border: 1px solid #ccc;
    padding: 10px;
    @media (max-width: 600px) {
      display: flex;
      margin: auto;
    }
  }
  .events-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin-top: 20px;
    @media (max-width: 600px) {
      justify-content: center;
    }
    h3 {
      margin: 0;
      padding: 10px 0 0 10px;
      font-weight: 500;
    }
    p {
      margin: 0;
      padding: 10px;
      span {
        font-weight: 500;
      }
    }
    & > div {
      border: 2px solid #ccc;
      padding: 20px;
      margin: 0 0 20px 0;
      width: 250px;
    }
  }
`;

export default EventsStyled;
