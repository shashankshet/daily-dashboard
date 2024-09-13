import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default styling

const CalendarWidget = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="card calendar-widget">
      <h3>Calendar</h3>
      <Calendar
        onChange={handleDateChange}
        value={date}
        tileClassName={({ date, view }) => {
          // Highlight today's date
          if (date.toDateString() === new Date().toDateString()) {
            return 'highlight-today';
          }
        }}
      />
    </div>
  );
};

export default CalendarWidget;
