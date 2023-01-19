import { MONTHS_SHORT } from "../../constants";
import { getClassNames, parseEventTime, time_convert } from "./helper";
import DayEvent from "../DayEvent";
import "./calendarDay.scss";

/**
 * Description: CalendarDay Component
 * @param dayNumber - {number}
 * @param dayName - {string}
 * @param isDayDisabled - {boolean}
 * @param monthName - {string}
 * @param isActive - {boolean}
 * @param events - {array}
 * @param handleSelectEvent - {function}
 * @returns {JSX.Element}
 * @constructor
 */
function CalendarDay({
  dayNumber,
  dayName,
  isDayDisabled,
  monthName,
  isActive,
  events,
  handleSelectEvent,
}) {
  const { elementClassName, blockClassName } = getClassNames(
    isDayDisabled,
    isActive
  );

  const dayText = monthName
    ? `${dayNumber} ${MONTHS_SHORT[monthName]}`
    : dayNumber;

  const dayEvents = events.map((event) => {
    const { eventName, startTimeInMinutes, endTimeInMinutes } = event;
    const parsedEvent = {
      ...event,
      eventTime: parseEventTime(startTimeInMinutes, endTimeInMinutes),
      startTimeInMinutes: time_convert(startTimeInMinutes),
    };
    return (
      <DayEvent
        key={eventName}
        event={parsedEvent}
        handleSelectEvent={handleSelectEvent}
      />
    );
  });

  return (
    <div className={elementClassName}>
      <div className={blockClassName}>
        <span>{dayText}</span>
      </div>
      <div className="calendar-day__events">{dayEvents}</div>
    </div>
  );
}

export default CalendarDay;
