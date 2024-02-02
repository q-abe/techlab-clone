import React, { FC } from "react";
import { css } from "@emotion/react";

type ArrowIconProps = {
    direction: "right" | "left" | "upward" | "downward" | "custom";
    rotateNum: number;
}

export const ArrowIcon: FC<ArrowIconProps> = (props) => {
    const { direction, rotateNum } = props;
    const getDegree = (direction: string, rotateNum: number) => {
        switch (direction) {
            case "right":
                return 0;
            case "downward":
                return 90;
            case "left":
                return 180;
            case "upward":
                return 270;
            case "custom":
                return rotateNum
            default:
                return 0
        }
    }

    const degree = getDegree(direction, rotateNum);
    const arrowIconDirection = css`
        transform: rotate(${degree}deg);
    `

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9.699"
            height="17.976"
            viewBox="0 0 9.699 17.976"
            css={arrowIconDirection}
            {...props}
        >
            <path d="M312.549,431.386l8.639-8.637-8.633-8.632"
                  transform="translate(-312.195 -413.763)"
                  fill="none"
                  stroke="#666"
                  strokeMiterlimit="10"
                  strokeWidth="1">
            </path>
        </svg>
    );
};
