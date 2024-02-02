import {css, SerializedStyles} from "@emotion/react";
import React, {FC} from "react";
import {ArrowIcon} from "./symbols/ArrowIcon";

type ButtonProps = {
    label: string;
    buttonStyle: string;
    onClick: () => void
};

export const Button: FC<ButtonProps> = (props) => {
    const {
        label,
        onClick,
    } = props;

    const buttonStyle: SerializedStyles = css`
        font-size: 13px;
        font-weight: bold;
        color: #666666;
        background-color: #DDDDDD;
        cursor: pointer;
        display: inline-block;
        padding: 8px 35px 8px 20px; //上右下左
        border: none;
        margin: 0 auto;
        position: relative;

        :hover {
            opacity: 0.7;
        }
    `;

    const ArrowStyle = css`
        top: 25px;
        right: 20px;
        position: absolute;
        transform: translateX(14px) translateY(-16px)
    `

    return (
        <div>
            <button css={buttonStyle} onClick={onClick}>
                {label}
                <ArrowIcon css={ArrowStyle}/>
            </button>
        </div>
    );
};
