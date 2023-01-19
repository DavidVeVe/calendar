import { MONTHS_NUMBERS } from "../../constants";
import helper from "../../helper";

const { setMonthName, createDate } = helper;

/**
 * Description: Adds isDayDisabled to day object structure
 * @param days - {array}
 * @returns {array}
 */
const disableDaysFromDiffMonth = (days) => {
  return days.map((day) => {
    return { ...day, isDayDisabled: true }; //Adds isFromPrevMonth property to handle styles
  });
};

const parseEventDate = (dateString) => {
  const splitDateString = dateString.replace(/\s/g, "-").split("-");
  const [zero, first, second, third] = splitDateString;
  const indexOne = first
    .replace("st", "")
    .replace("nd", "")
    .replace("rd", "")
    .replace("th", "");

  const parsedSplitDateString = [zero, indexOne, second, third];
  const testDayNumber = +parsedSplitDateString[1];
  const testMonthNumber = MONTHS_NUMBERS[parsedSplitDateString[2]];
  const testYearNumber = parsedSplitDateString[3];
  return new Date(+testYearNumber, testMonthNumber, testDayNumber);
};

/**
 * Description: Returns array with formatted days structure in current month, including days from prev month and days from next month
 * @param calendarGridProps.currentMonthDays - {object}
 * @param calendarGridProps.prevMonthDays - {object}
 * @param calendarGridProps.nextMonthDays - {object}
 * @param calendarGridProps.prevMonthName - {string}
 * @param calendarGridProps.nextMonthName - {string}
 * @param calendarGridProps.currentMonthName - {string}
 * @param calendarGridProps.activeDay - {number}
 * @param calendarGridProps.presentDateObj - {object}
 * @param calendarGridProps.calendarEvents - {array}
 * @returns {array}
 */
const getDaysForGrid = (calendarGridProps) => {
  const {
    currentMonthDays,
    prevMonthDays,
    nextMonthDays,
    prevMonthName,
    nextMonthName,
    currentMonthName,
    activeDay,
    presentDateObj,
    calendarEvents,
  } = calendarGridProps;

  let { firstDayIndex, lastDayIndex, days, monthName } = {
    ...currentMonthDays,
  };

  const { presentDayNumber, presentMonthNumber, presentYearNumber } =
    presentDateObj;

  const presentDate = createDate(
    presentYearNumber,
    presentMonthNumber,
    presentDayNumber
  );

  const daysWithActiveDay = days.map((day, index) => {
    const isActive =
      index === activeDay && monthName === setMonthName(presentDate) && true;
    return { ...day, isActive };
  });

  const prevMonthDaysCopy = { ...prevMonthDays };
  const nextMonthDaysCopy = { ...nextMonthDays };
  let nextMonthFirstDays =
    lastDayIndex === 7 ? [] : nextMonthDaysCopy.days.slice(0, lastDayIndex);

  const prevMonthLastDays =
    firstDayIndex === 0 ? [] : prevMonthDaysCopy.days.slice(-firstDayIndex);

  daysWithActiveDay[0].monthName = currentMonthName;

  if (firstDayIndex !== 0) {
    prevMonthLastDays.at(-1).monthName = prevMonthName;
  }

  if (lastDayIndex !== 7) {
    nextMonthFirstDays[0].monthName = nextMonthName;
  }

  const prevDays = disableDaysFromDiffMonth(prevMonthLastDays);
  const nextDays = disableDaysFromDiffMonth(nextMonthFirstDays);

  let daysToRenderWithEvents = [];

  calendarEvents.forEach((event) => {
    daysToRenderWithEvents = [
      ...prevDays,
      ...daysWithActiveDay,
      ...nextDays,
    ].map((day) => {
      if (parseEventDate(event.date).getTime() === day.fullDate.getTime()) {
        day.events = event.events;
      }
      return day;
    });
  });

  return daysToRenderWithEvents;
};

export default { getDaysForGrid };
