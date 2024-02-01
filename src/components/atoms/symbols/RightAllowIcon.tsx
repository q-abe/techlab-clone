import React, {FC} from "react";
import {css} from "@emotion/react";

type RightAllowIconProps = {};

export const RightAllowIcon: FC<RightAllowIconProps> = (props) => {
    const {} = props;

    const Allow = css`
        width: 20px;
        height: 20px;
        vertical-align: sub;
        margin-left: 16px;
        margin-right: 6px;
    `

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="9.699" height="17.976" viewBox="0 0 9.699 17.976"
             css={Allow}>
            <path id="パス_258" data-name="パス 258" d="M312.549,431.386l8.639-8.637-8.633-8.632"
                  transform="translate(-312.195 -413.763)" fill="none" stroke="#666" strokeMiterlimit="10"
                  strokeWidth="1">
            </path>
        </svg>
    );
};