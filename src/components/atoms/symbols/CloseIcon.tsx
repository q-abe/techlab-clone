import React, { FC } from "react";
import { css } from "@emotion/react";

type CloseProps = {
    onClick?: () => {}
}

const crossButton = css`
    cursor: pointer;
    position: absolute;
    right: 60px;
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
    color: red;

    ::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 20px;
        height: 40px;
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
        width: 20px;
        height: 40px;
        display: block;
        border-right: 1px solid #FFFFFF;
        transform-origin: right top;
        transform: rotate(45deg);
    }
`

export const CloseIcon: FC<CloseProps> = (props) => {
    const { onClick } = props;
    return (
        <div>
            <button css={crossButton} onClick={() => {
            }} {...props}>
                ×
            </button>
        </div>
    );
}