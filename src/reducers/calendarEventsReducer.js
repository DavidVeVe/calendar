import { CALENDAR_EVENTS } from "../constants";
const { TOGGLE_MODAL, SELECT_EVENT } = CALENDAR_EVENTS;

/**
 * Description: Calendar events reducer
 * @param state - {object}
 * @param action - {object}
 * @returns {(*&{selectedEventObj})|(*&{showModal})}
 */
export const calendarEventsReducer = (state, action) => {
  const { type, showModal, selectedEventObj } = action;
  switch (type) {
    case TOGGLE_MODAL:
      return { ...state, showModal: showModal };
    case SELECT_EVENT:
      return { ...state, selectedEventObj: selectedEventObj };
  }
};
