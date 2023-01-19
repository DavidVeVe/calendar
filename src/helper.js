import { DAYS_OF_THE_WEEK_OBJ, DAYS_IN_A_WEEK } from "./constants";

/**
 * Description: updates dayIndex to slice days array with the correct dayIndex
 * @param dayIndex - {number}
 * @returns {number}
 */
const getFirstDayInMonthIndex = (dayIndex) => {
  if (dayIndex === 0) {
    dayIndex = 6;
  } else {
    dayIndex = dayIndex - 1;
  }
  return dayIndex;
};

const createDate = (y, m, d) => new Date(y, m, d);

/**
 * Description: Returns month name passed in date as string
 * @param date
 * @returns {string}
 */
const setMonthName = (date) =>
  date.toLocaleString("default", { month: "long" });

/**
 * Description: Returns quantity of days in the requested month
 * @param y
 * @param m
 * @returns {number}
 */
const getDaysInMonth = (y, m) => {
  return new Date(y, m + 1, 0).getDate();
};

/**
 * Description: Returns an object with the formatted days structure of the requested month, current month firstDayIndex and lastDayIndex
 * @param daysInCurrentMonth - {number}
 * @param y - {number} year
 * @param m - {number} month
 * @returns {{lastDayIndex: number, days: {dayName: *, dayNumber}[], firstDayIndex: number}}
 */
const getFormattedMonthConfig = (daysInCurrentMonth, y, m) => {
  return {
    days: [...Array(daysInCurrentMonth).keys()].map((day) => {
      const dayName =
        DAYS_OF_THE_WEEK_OBJ[
          new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
            createDate(y, m, day + 1)
          )
        ];
      return {
        dayNumber: day + 1,
        dayName,
        fullDate: createDate(y, m, day + 1),
        events: [],
      };
    }),
    firstDayIndex: getFirstDayInMonthIndex(createDate(y, m, 1).getDay()),
    lastDayIndex: DAYS_IN_A_WEEK - createDate(y, m + 1, 0).getDay(),
    monthName: setMonthName(createDate(y, m, 1)),
  };
};

/**
 * Description: Returns an object with the conditions met by isNextMonth boolean
 * @param month - {number}
 * @param isNextMonth - {boolean}
 * @returns {{newYear: {(*), (*)}, monthToGetNextMonthDays: *, condition: boolean, monthToGetPrevMonthDays: (*|number), newMonth: {(*), (*)}, newMonthReset: number, monthToGetCurrentDays: (*|number)}}
 */
const getNewMonthValues = (year, month, isNextMonth) => {
  return {
    condition: isNextMonth ? month < 11 : month > 0,
    newMonthReset: isNextMonth ? 0 : 11,
    newYear: isNextMonth ? year + 1 : year - 1,
    newMonth: isNextMonth ? month + 1 : month - 1,
    monthToGetCurrentDays: isNextMonth ? month + 1 : month - 1,
    monthToGetPrevMonthDays: isNextMonth ? month : month - 2,
    monthToGetNextMonthDays: isNextMonth ? month + 2 : month,
  };
};

/**
 * Description: Updates previous, current and next month information when next or previous month event is triggered.
 * @param month - {number}
 * @param year - {number}
 * @param monthSetter - {function}
 * @param yearSetter - {function}
 * @param currentMonthDaysSetter - {function}
 * @param prevMonthDaysSetter - {function}
 * @param nextMonthDaysSetter - {function}
 * @param isNextMonth - {boolean}
 */
const setNewMonth = ({
  month,
  year,
  monthSetter,
  yearSetter,
  currentMonthDaysSetter,
  prevMonthDaysSetter,
  nextMonthDaysSetter,
  isNextMonth,
}) => {
  const {
    condition,
    newMonthReset,
    newYear,
    newMonth,
    monthToGetCurrentDays,
    monthToGetPrevMonthDays,
    monthToGetNextMonthDays,
  } = getNewMonthValues(year, month, isNextMonth);

  if (condition) {
    monthSetter(newMonth);
    currentMonthDaysSetter(getDaysInMonth(year, monthToGetCurrentDays));
    prevMonthDaysSetter(getDaysInMonth(year, monthToGetPrevMonthDays));
    nextMonthDaysSetter(getDaysInMonth(year, monthToGetNextMonthDays));
  } else {
    yearSetter(newYear);
    monthSetter(newMonthReset);
    currentMonthDaysSetter(getDaysInMonth(year, monthToGetCurrentDays));
    prevMonthDaysSetter(getDaysInMonth(year, monthToGetPrevMonthDays));
    nextMonthDaysSetter(getDaysInMonth(year, monthToGetNextMonthDays));
  }
};

export default {
  createDate,
  setMonthName,
  getDaysInMonth,
  getFormattedMonthConfig,
  setNewMonth,
};
