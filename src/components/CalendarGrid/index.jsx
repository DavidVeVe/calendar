import CalendarDay from "../CalendarDay";
import helper from "./calendarGridHelper";
import { DAYS_OF_THE_WEEK } from "../../constants";
import "./calendarGrid.scss";

const { getDaysForGrid } = helper;

/**
 * @param currentMonthDays {object}
 * @param calendarGridProps.prevMonthDays {object}
 * @param calendarGridProps.nextMonthDays {object}
 * @param calendarGridProps.prevMonthName {string}
 * @param calendarGridProps.nextMonthName {string}
 * @param calendarGridProps.currentMonthName {string}
 * @param calendarGridProps.activeDay {number}
 * @param calendarGridProps.presentDateObj {object}
 * @param calendarGridProps.calendarEvents {array}
 * @param calendarGridProps.handleSelectEvent {function}
 * @returns {JSX.Element}
 */
function CalendarGrid({ calendarGridProps }) {
  const { handleSelectEvent } = calendarGridProps;

  const daysForGrid = getDaysForGrid(calendarGridProps).map((day) => {
    const { dayNumber, dayName, isDayDisabled, monthName, isActive, events } =
      day;

    return (
      <CalendarDay
        key={dayName + Math.random()}
        dayNumber={dayNumber}
        dayName={dayName}
        isDayDisabled={isDayDisabled}
        monthName={monthName}
        isActive={isActive}
        events={events}
        handleSelectEvent={handleSelectEvent}
      />
    );
  });

  const daysLabels = DAYS_OF_THE_WEEK.map((day) => {
    return <span key={day} className="calendar-grid__labels__label">{day}</span>;
  });

  return (
    <section className="calendar-grid">
      <div className="calendar-grid__labels">{daysLabels}</div>
      <div className="calendar-grid__days">{daysForGrid}</div>
    </section>
  );
}

export default CalendarGrid;
