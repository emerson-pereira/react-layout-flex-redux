import React, { useState } from "react";
import FormStyles from "./styles/FormStyles";

const EventForm = ({ addEvent, showForm, toggleForm }) => {
  const [event, setEvent] = useState({
    title: "",
    description: "",
    location: "",
    fullDay: null,
    startTimeDate: "",
    startTimeTime: "",
    endTimeDate: "",
    endTimeTime: "",
  });

  const handleInput = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckbox = (e) => {
    setEvent({
      ...event,
      fullDay: e.target.checked,
    });
  };

  const handleDate = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

  const handleTime = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

  const getTimeStamp = (keyName, { hasHours } = {}) => {
    let date;

    const [year, month, day] = event[keyName + "Date"].split("-");

    if (hasHours) {
      const [hours, minutes] = event[keyName + "Time"].split(":");

      date = new Date(
        Number(year),
        Number(month - 1),
        Number(day),
        Number(hours),
        Number(minutes)
      );
    } else {
      date = new Date(Number(year), Number(month - 1), Number(day));
    }

    return date.getTime();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventObject = {
      title: event.title,
      description: event.description,
      location: event.location,
      fullDay: event.fullDay,
      startTime: getTimeStamp("startTime"),
    };
    if (event.fullDay) {
      addEvent(eventObject);
    } else {
      addEvent({
        ...eventObject,
        startTime: getTimeStamp("startTime", { hasHours: true }),
        endTime: getTimeStamp("endTime", { hasHours: true }),
      });
    }
    toggleForm(false);
  };

  const handleExit = (e) => {
    e.preventDefault();

    toggleForm(false);
  };

  return (
    <FormStyles hide={!showForm} onSubmit={handleSubmit}>
      <h3>Adicionar evento</h3>
      <label htmlFor="title">
        Título:
        <input type="text" name="title" id="title" onChange={handleInput} />
      </label>
      <label htmlFor="description">
        Descrição:
        <input
          type="text"
          name="description"
          id="description"
          onChange={handleInput}
        />
      </label>
      <label htmlFor="location">
        Localidade:
        <input
          type="text"
          name="location"
          id="location"
          onChange={handleInput}
        />
      </label>
      <label htmlFor="fullday">
        Dia todo:
        <input
          type="checkbox"
          name="fullday"
          id="fullday"
          onChange={handleCheckbox}
        />
      </label>
      <label htmlFor="startTimeDate">
        Começo data:
        <input
          type="date"
          name="startTimeDate"
          id="startTimeDate"
          onChange={handleDate}
        />
      </label>
      {!event.fullDay && (
        <>
          <label htmlFor="startTimeTime">
            Começo hora:
            <input
              type="time"
              name="startTimeTime"
              id="startTimeTime"
              onChange={handleTime}
            />
          </label>
          <label htmlFor="endTimeDate">
            Término data:
            <input
              type="date"
              name="endTimeDate"
              id="endTimeDate"
              onChange={handleDate}
            />
          </label>
          <label htmlFor="endTimeTime">
            Começo hora:
            <input
              type="time"
              name="endTimeTime"
              id="endTimeTime"
              onChange={handleTime}
            />
          </label>
        </>
      )}
      <button type="submit">Enviar</button>
      <button onClick={handleExit}>Cancelar</button>
    </FormStyles>
  );
};

export default EventForm;
