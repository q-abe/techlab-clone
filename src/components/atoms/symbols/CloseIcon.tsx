import React, { FC } from "react";
import { css } from "@emotion/react";


const crossButton = css`
    cursor: pointer;
    position: absolute;
    right: 18px;
    top: 24px;
    display: block;
    padding: 0;
    border: none;
    outline: none;
    width: 20px;
    height: 20px;
    background: transparent;
    overflow: hidden;
    transition: .2s opacity ease-in-out;

    ::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 140%;
        width: 100%;
        display: block;
        border-left: 1px solid #FFFFFF;
        transform-origin: left top;
        transform: rotate(-45deg);
    }

    ::after {
        content: "";
        position: absolute;
        right: 0;
        top: 0;
        height: 140%;
        width: 100%;
        display: block;
        border-right: 1px solid #FFFFFF;
        transform-origin: right top;
        transform: rotate(45deg);
    }
`

export const CloseIcon: FC<React.SVGProps<SVGElement>> = (props) => {
    return (
        <div>
            <button css={crossButton}>
                ×
            </button>
        </div>
    );
}