import React from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameDay, isSameMonth } from "date-fns";

const Calendar = ({ events, onDateClick }) => {
  const currentMonth = new Date();

  const renderDays = () => {
    const startMonth = startOfMonth(currentMonth);
    const endMonth = endOfMonth(currentMonth);
    const startDate = startOfWeek(startMonth);
    const endDate = endOfWeek(endMonth);

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const dayEvents = events.filter(event => isSameDay(new Date(event.date), day));

        console.log("Day being rendered:", day);
        console.log("Events for this day:", dayEvents); // Debug log

        days.push(
          <div
            key={day}
            className={`p-2 border rounded-lg cursor-pointer ${isSameMonth(day, currentMonth) ? 'bg-white' : 'bg-gray-200'}`}
            onClick={() => onDateClick(day)}
          >
            <div className="text-center">{format(day, 'd')}</div>
            {dayEvents.length > 0 && (
              <ul className="mt-2">
                {dayEvents.map((event, idx) => (
                  <li key={idx} className={`text-sm p-1 rounded`} style={{ backgroundColor: event.eventColor }}>
                    {event.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(<div key={day} className="grid grid-cols-7 gap-4">{days}</div>);
      days = [];
    }

    return rows;
  };

  return (
    <div className="calendar grid gap-4">
      {renderDays()}
    </div>
  );
};

export default Calendar;
