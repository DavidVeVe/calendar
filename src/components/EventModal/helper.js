export const getButtonClassNames = (recorded) => {
    const initialClassName = "calendar__modal__body__content__bottom";
    const isRecordedClassName = ` calendar__modal__body__content__bottom${
        recorded ? "--recorded" : ""
    }`;
    return `${initialClassName}${isRecordedClassName}`;
};

export const getTextClassNames = (recorded) => {
    const initialClassnames = "calendar__modal__body__content--text";
    const isRecordedClassName = ` calendar__modal__body__content--text${
        recorded ? "--recorded" : ""
    }`;
    return `${initialClassnames}${isRecordedClassName}`;
};
