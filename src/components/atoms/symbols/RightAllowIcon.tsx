import React, {FC} from "react";
import {css} from "@emotion/react";


export const RightAllowIcon: FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const AllowStyle = ({props}: { props: string }) => css`
        width: 20px;
        height: 20px;
        ${props} //    top: 25px;
                //    right: 20px;
                //    transform: translateX(20px) translateY(1px)
                //color: blue;
                //background-color: blue;
    `

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9.699"
            height="17.976"
            viewBox="0 0 9.699 17.976"
            css={AllowStyle}
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