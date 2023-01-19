import { getButtonClassNames, getTextClassNames } from "./helper";
import "./eventModal.scss";

/**
 * @param showModal - {boolean}
 * @param toggleModal - {function}
 * @param event - {object}
 * @returns {JSX.Element}
 * @constructor
 */
function EventModal({ showModal, toggleModal, event }) {
  const {
    userName,
    eventName,
    topic,
    date,
    duration,
    isFinished,
    recorded,
    material = [],
    startTimeInMinutes,
    avatar,
  } = event;

  const materialLinks = material.map((item, index) => {
    return (
      <a key={index} href={item.link} target="_blank">
        {item.name}
      </a>
    );
  });

  const modal = showModal && (
    <div>
      <div
        className="calendar__modal calendar__modal__overlay"
        onClick={toggleModal}
      />
      <section className="calendar__modal__body">
        <div className="calendar__modal__body__header">
          <div>
            <h1>{eventName}</h1>
            <span>{`Topic: ${topic}`}</span>
          </div>
          <div className="calendar__modal__body__header--right">
            <div className="calendar__modal__body__header__avatar">
              <img src={avatar} alt="user-avatar" />
            </div>
            <span className="calendar__modal__body__header__user-name">
              {userName}
            </span>
          </div>
        </div>
        <div className="calendar__modal__body__content">
          <div className="calendar__modal__body__content__top">
            <div>
              <p className="calendar__modal__body__content--subtitle">Date</p>
              <span className={getTextClassNames(recorded)}>{date}</span>
            </div>
            <div>
              <p className="calendar__modal__body__content--subtitle">Time</p>
              <span className={getTextClassNames(recorded)}>{startTimeInMinutes}</span>
            </div>
            <div>
              <p className="calendar__modal__body__content--subtitle">
                Duration
              </p>
              <span className={getTextClassNames(recorded)}>{duration}</span>
            </div>
          </div>
          <button className={getButtonClassNames(recorded)}>
            {recorded ? "Watch recording" : "Join"}
          </button>
        </div>
        <div className="calendar__modal__body__footer">
          <p>Material:</p>
          <div className="calendar__modal__body__footer__links">
            {materialLinks}
          </div>
        </div>
      </section>
    </div>
  );

  return modal;
}

export default EventModal;
