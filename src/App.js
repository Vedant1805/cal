import React, { useState } from "react";
import Calendar from "./Components/Calendar";
import EventModal from "./Components/EventModal";
import eventsData from "./DataApi";

const App = () => {
  const [events, setEvents] = useState(eventsData);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedDate(null);
    setShowModal(false);
  };

  const handleCreateEvent = (newEvent) => {
    const updatedEvents = [...events, newEvent]; 
    setEvents(updatedEvents);
    const eventForSelectedDate = updatedEvents.filter(event => 
      new Date(event.date).toDateString() === selectedDate.toDateString()
    );

    // Log the details of events on the selected date
    console.log("Events on Selected Date (" + selectedDate.toDateString() + "):", eventForSelectedDate);

    handleCloseModal();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">Custom Calendar</h1>
      <Calendar events={events} onDateClick={handleDateClick} />
      {showModal && (
        <EventModal
          selectedDate={selectedDate}
          onClose={handleCloseModal}
          onSubmit={handleCreateEvent}
        />
      )}
    </div>
  );
};

export default App;
