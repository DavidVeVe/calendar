import { CALENDAR_REDUCER } from "../constants";

const {
  GET_TODAY,
  MONTH_SETTER,
  YEAR_SETTER,
  CURRENT_MONTH_DAYS_SETTER,
  PREV_MONTH_DAYS_SETTER,
  NEXT_MONTH_DAYS_SETTER,
  CHANGE_MONTH,
} = CALENDAR_REDUCER;

export const calendarReducer = (state, action) => {
  const {
    type,
    month,
    year,
    activeDay,
    currentMonthDays,
    prevMonthDays,
    nextMonthDays,
    prevMonthName,
    nextMonthName,
    currentMonthName,
  } = action;

  switch (type) {
    case GET_TODAY:
      return {
        ...state,
        month,
        year,
        activeDay,
        prevMonthName,
        nextMonthName,
        currentMonthName,
        currentMonthDays,
        prevMonthDays,
        nextMonthDays,
      };
    case MONTH_SETTER:
      return { ...state, month };
    case YEAR_SETTER:
      return { ...state, year };
    case CURRENT_MONTH_DAYS_SETTER:
      return { ...state, currentMonthDays };
    case PREV_MONTH_DAYS_SETTER:
      return { ...state, prevMonthDays };
    case NEXT_MONTH_DAYS_SETTER:
      return { ...state, nextMonthDays };
    case CHANGE_MONTH:
      return {
        ...state,
        prevMonthName,
        nextMonthName,
        currentMonthName,
        currentMonthDays,
        prevMonthDays,
        nextMonthDays,
      };
  }
};
