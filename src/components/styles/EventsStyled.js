import styled from "styled-components";

const EventsStyled = styled.div`
  max-width: calc(750px + 186px);
  @media (max-width: calc(750px + 186px)) {
    max-width: 600px;
  }
  margin: 0 auto;
  padding: 40px 20px;
  button {
    background: #fff;
    border: 1px solid #ccc;
    padding: 10px;
    display: flex;
    @media (max-width: 600px) {
      margin: auto;
    }
    &:hover {
      cursor: pointer;
    }
  }
  .events-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin-top: 20px;
    /* border: 1px solid #000; */
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
      background: #fff;
      border: 1px solid #ccc;
      padding: 20px;
      margin: 10px 0;
      width: 250px;
      &.spacer {
        border: 0;
        margin-top: 0;
        margin-bottom: 0;
        padding-top: 0;
        padding-bottom: 0;
      }
    }
  }
`;

export default EventsStyled;
