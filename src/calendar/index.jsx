import CalendarNavigation from "../components/CalendarNavigation";
import CalendarGrid from "../components/CalendarGrid";
import EventModal from "../components/EventModal";
import { MONTHS } from "../constants";
import { useCalendar, useCalendarEvents } from "../hooks";

/**
 * Description: Calendar component
 * @param date - {object}
 * @returns {JSX.Element}
 * @constructor
 */
function Calendar({ date }) {
  const {
    showModal,
    toggleModal,
    calendarEvents,
    selectedEventObj,
    selectEvent,
  } = useCalendarEvents();

  const calendarHookProps = useCalendar(date);

  const { month, year, getToday, changeMonth } = calendarHookProps;

  const handleSelectEvent = (value) => {
    toggleModal();
    selectEvent(value);
  };

  const isNextMonth = true;

  return (
    <div className="calendar">
      <EventModal
        showModal={showModal}
        toggleModal={toggleModal}
        event={selectedEventObj}
      />
      <CalendarNavigation
        getNextMonth={changeMonth.bind(null, isNextMonth)}
        getPrevMonth={changeMonth.bind(null, !isNextMonth)}
        getToday={getToday}
        calendarTitle={`${MONTHS[month]} ${year}`}
      />
      <CalendarGrid
        calendarGridProps={{
          ...calendarHookProps,
          calendarEvents,
          handleSelectEvent,
        }}
      />
    </div>
  );
}

export default Calendar;
