import React from "react";
import EventsStyled from "./styles/EventsStyled";

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
        {[null, null]
          .slice(events.length % 3 === 1 ? 0 : events.length % 3 === 2 ? 1 : 2)
          .map(() => (
            <div className="spacer"></div>
          ))}
      </div>
    </EventsStyled>
  );
};

export default EventList;
