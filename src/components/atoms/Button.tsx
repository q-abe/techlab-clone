import { css, SerializedStyles } from "@emotion/react";
import React, { FC } from "react";
import { ArrowIcon } from "./symbols/ArrowIcon";

type ButtonProps = {
    label: string;
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
        padding: 8px 10px 8px 20px; //上右下左
        border: none;
        margin: 0 auto;
        outline: none;

        :hover {
            opacity: 0.7;
            transition: opacity 500ms;
        }
    `;

    const arrowStyle = css`
        margin-left: 30px;
        margin-right: 0;
        vertical-align: sub
    `
    return (
        <div>
            <button css={buttonStyle} onClick={onClick}>
                {label}
                <ArrowIcon css={arrowStyle} direction={"right"} rotateNum={0}/>
            </button>
        </div>
    );
};
