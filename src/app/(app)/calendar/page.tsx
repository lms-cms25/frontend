"use client";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
// import "./calendar.css";


const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Design Conference",
    start: new Date(2026, 4, 11),
    end: new Date(2026, 4, 13),
  },
];

export default function Page() {
  return (
    <div className="calendar-page">
      <h1>CALENDAR TEST</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 700 }}
      />
    </div>
  );
}
