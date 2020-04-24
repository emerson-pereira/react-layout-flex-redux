import React from "react";
import EventsList from "./EventsList";
import EventForm from "./EventForm";

const Dashboard = () => {
  return (
    <main>
      <EventsList />
      <EventForm />
    </main>
  );
};

export default Dashboard;
