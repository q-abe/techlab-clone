import {css, SerializedStyles} from "@emotion/react";
import React, {FC} from "react";
import {RightAllowIcon} from "./symbols/RightAllowIcon";

type ButtonProps = {
    label: string;
    buttonStyle: string;
    onClick: () => void
};

export const Button: FC<ButtonProps> = (props) => {
    const {
        label,
        buttonStyle,
        onClick,
    } = props;

    const PrimaryButton: SerializedStyles = css`
        font-size: 13px;
        font-weight: bold;
        color: #666666;
        background-color: #DDDDDD;
        cursor: pointer;
        display: inline-block;
        padding: 8px 35px 8px 20px; //上右下左
        border: none;
        margin: 0 auto;


        //&:after {
        //    content: '';
        //    background-image: url("./symbols/RightAllowIcon.tsx");
        //    mask: url("./symbols/RightAllowIcon.tsx");
        //    border: 0;
        //    display: inline-block;
        //    width: 1rem;
        //    height: 1rem;
        //    background-color: red;
        //    //矢印位置
        //    top: 25px;
        //    right: 20px;
        //    transform: translateX(20px) translateY(1px)
        //}

        :hover {
            opacity: 0.7;

            //&:after:hover {
            //    color: red;
            //    background-color: red;
            //}
        }
    `;

    const AllowStyle = css`
        background-color: red;
        top: 25px;
        right: 20px;
        transform: translateX(20px) translateY(1px)
    `

    // const buttonStylelist: SerializedStyles = {
    //     default: BaseButton,
    //     primary: PrimaryButton
    // }

    // const ButtonStyle = buttonStylelist[buttonStyle] || BaseButton]

    return (
        <div>
            <button css={PrimaryButton} onClick={onClick}>
                {label}
                <RightAllowIcon style={AllowStyle}/>
            </button>


        </div>
    );
};
