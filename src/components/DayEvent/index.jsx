/**
 * @param event - {object}
 * @param handleSelectEvent - {function}
 * @returns {JSX.Element}
 * @constructor
 */
function DayEvent({ event, handleSelectEvent }) {
  const { eventTime, eventName } = event;
  return (
    <button
      className="calendar-day__events__event"
      onClick={() => {
        handleSelectEvent(event);
      }}
    >
      <span className="calendar-day__events__event__event-time">
        {eventTime}
      </span>
      <span className="calendar-day__events__event__event-name">
        {eventName}
      </span>
    </button>
  );
}

export default DayEvent;
