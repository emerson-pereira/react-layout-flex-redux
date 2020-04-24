import React from "react";
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

const getFormattedDate = (timestamp, { hasHours } = {}) => {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedDate = `${day}/${month}/${year}`;
  if (hasHours) {
    return `${formattedDate} às ${hours}:${minutes}`;
  }
  return formattedDate;
};

const FullDay = ({ event }) => (
  <>
    <p>
      <span>Dia todo:</span> {getFormattedDate(event.startTime)}
    </p>
  </>
);

const StartEnd = ({ event }) => (
  <>
    <p>
      <span>Começo:</span>{" "}
      {getFormattedDate(event.startTime, { hasHours: true })}
    </p>
    <p>
      <span>Término:</span>{" "}
      {getFormattedDate(event.endTime, { hasHours: true })}
    </p>
  </>
);

const EventList = ({ events, toggleForm }) => {
  return (
    <EventsStyled>
      <button onClick={() => toggleForm(true)}>Adicionar evento</button>
      <div className="events-list">
        {events.map((event) => (
          <div key={event.title}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>
              <span>Location:</span> {event.location}
            </p>
            {event.fullDay ? (
              <FullDay event={event} />
            ) : (
              <StartEnd event={event} />
            )}
          </div>
        ))}
      </div>
    </EventsStyled>
  );
};

export default EventList;
