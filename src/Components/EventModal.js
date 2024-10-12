import React, { useState } from "react";

const EventModal = ({ selectedDate, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [eventColor, setEventColor] = useState("#FFEB3B");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Convert input times to Date objects
    const startDateTime = new Date(selectedDate);
    startDateTime.setHours(startTime.split(":")[0], startTime.split(":")[1]);

    const endDateTime = new Date(selectedDate);
    endDateTime.setHours(endTime.split(":")[0], endTime.split(":")[1]);

    // Check if end time is greater than start time
    if (endDateTime <= startDateTime) {
      alert("End time must be later than start time.");
      return; // Prevent submission
    }

    const newEvent = {
      title,
      description,
      startTime,
      endTime,
      date: selectedDate.toISOString(), // Ensure the date is ISO format
      eventColor, // Ensure this is included
    };
    onSubmit(newEvent); // Send new event to App
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4 text-center">Create Event on {selectedDate.toDateString()}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Event Title</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded-lg"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              className="w-full border border-gray-300 p-2 rounded-lg"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-2">
            <div>
              <label className="block mb-1 font-medium">Start Time</label>
              <input
                type="time"
                className="w-full border border-gray-300 p-2 rounded-lg"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">End Time</label>
              <input
                type="time"
                className="w-full border border-gray-300 p-2 rounded-lg"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Event Color</label>
            <input
              type="color"
              className="w-full border border-gray-300 p-2 rounded-lg"
              value={eventColor}
              onChange={(e) => setEventColor(e.target.value)}
            />
          </div>
          <div className="flex justify-between">
            <button type="button" className="px-4 py-2 bg-gray-300 rounded-lg" onClick={onClose}>Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventModal;
