import React, { FC } from "react";

type DateTextProps = {
    dateText: string;
};

export const DateText: FC<DateTextProps> = (props) => {
    const { dateText } = props;
    return (
        <span>{dateText}</span>
    );
};
