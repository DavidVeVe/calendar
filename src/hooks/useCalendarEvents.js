import { useReducer } from "react";
import { calendarEventsReducer } from "../reducers/calendarEventsReducer";
import { CALENDAR_EVENTS } from "../constants";
import { calendarEventsMock } from "../mocks/calendarEventsMock";

const { TOGGLE_MODAL, SELECT_EVENT } = CALENDAR_EVENTS;

/**
 * Description Calendar Events hook
 * @returns {{calendarEvents, selectEvent: selectEvent, selectedEventObj, showModal, toggleModal: toggleModal}}
 */
export const useCalendarEvents = () => {
  const [{ showModal, calendarEvents, selectedEventObj }, dispatch] = useReducer(
    calendarEventsReducer,
    {
      showModal: false,
      calendarEvents: calendarEventsMock,
      selectedEventObj: {},
    }
  );

  const toggleModal = () => {
    dispatch({ type: TOGGLE_MODAL, showModal: !showModal });
  };

  const selectEvent = (selectedEvent) => {
    dispatch({type: SELECT_EVENT, selectedEventObj: selectedEvent })
  }

  return {
    showModal,
    toggleModal,
    calendarEvents,
    selectedEventObj,
    selectEvent
  };
};
