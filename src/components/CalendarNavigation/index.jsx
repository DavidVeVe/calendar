import "./calendarNavigation.scss";
import prevIcon from "../../assets/prev-icon.svg";
import nextIcon from "../../assets/next-icon.svg";


/**
 * Description: CalendarNavigation Component
 * @param getPrevMonth - {function}
 * @param getNextMonth - {function}
 * @param calendarTitle - {string}
 * @param getToday - {function}
 * @returns {JSX.Element}
 * @constructor
 */
function CalendarNavigation({ getPrevMonth, getNextMonth, calendarTitle, getToday }) {
  return (
    <section className="calendar__navigation">
      <span className="calendar__navigation__title">{calendarTitle}</span>

      <div className="calendar__navigation__arrows">
        <button onClick={getPrevMonth}>
          <img src={prevIcon} />
        </button>
        <button onClick={getNextMonth}>
          <img src={nextIcon} />
        </button>
      </div>

      <div className="calendar__navigation__buttons">
        <button className="calendar__navigation__buttons__today" onClick={getToday}>Today</button>
        <button>time zones</button>
      </div>
    </section>
  );
}

export default CalendarNavigation;
