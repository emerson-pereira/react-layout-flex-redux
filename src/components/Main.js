import React, { useState } from "react";
import EventsList from "./EventsList";
import EventForm from "./EventForm";

const Main = () => {
  const [events, setEvent] = useState([
    {
      title: "Conferência de negócios",
      description: "Uma reuinão de networking e oportunidades",
      location: "Hotel Plaza",
      fullDay: false,
      // 31 jul 2020 14:30
      startTime: new Date(2020, 6, 31, 14, 30).getTime(),
      // 31 jul 2020 18:30
      endTime: new Date(2020, 6, 31, 18, 30).getTime(),
    },
  ]);

  const addEvent = (location) => {
    setEvent([...events, location]);
  };

  const removeEvent = () => {};
  return (
    <main>
      <EventsList
        events={events}
        addEvent={addEvent}
        removeEvent={removeEvent}
      />
      <EventForm addEvent={addEvent} />
    </main>
  );
};

export default Main;
