/**
 * Description: Get classnames for calendar day
 * @param prevMonthCondition {boolean}
 * @param isActive {boolean}
 * @returns {{elementClassName: (string|string), blockClassName: (string|string)}}
 */
export const getClassNames = (prevMonthCondition, isActive) => {
  const initialElementClassName = `calendar-day`;
  const initialBlockClassName = `calendar-day__number`;

  const elementClassWithPrevMonthCondition = prevMonthCondition
    ? `${initialElementClassName} ${initialElementClassName}--is-from-prev-month`
    : initialElementClassName;
  const blockClassWithPrevMonthCondition = prevMonthCondition
    ? ` ${initialBlockClassName} ${initialBlockClassName}--is-from-prev-month`
    : initialBlockClassName;

  const elementClassNameActiveDay = isActive
    ? ` ${initialElementClassName}--is-active`
    : "";
  const blockClassNameActiveDay = isActive
    ? ` ${initialBlockClassName}--is-active`
    : "";

  return {
    elementClassName: `${elementClassWithPrevMonthCondition}${elementClassNameActiveDay}`,
    blockClassName: `${blockClassWithPrevMonthCondition}${blockClassNameActiveDay}`,
  };
};

/**
 * Description: Converts a given number (total minutes) to hours and minutes
 * @param num - {number}
 * @returns {string}
 */
export function time_convert(num) {
  const hours = Math.floor(num / 60);
  const minutes = num % 60;
  const parsedMinutes = minutes === 0 ? '00' : minutes
  return `${hours}:${parsedMinutes}`;
}

/**
 * Description: Parses start and end time to string used in event
 * @param startTimeInMinutes - {number}
 * @param endTimeInMinutes - {number}
 * @returns {string}
 */
export const parseEventTime = (startTimeInMinutes, endTimeInMinutes) => {
  return `${time_convert(startTimeInMinutes)} - ${time_convert(endTimeInMinutes)}`
};
