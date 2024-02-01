import {css, SerializedStyles} from "@emotion/react";
import React, { FC } from "react";

type ButtonProps = {
  label: string;
};

export const Button: FC<ButtonProps> = (props) => {
  const {
    label,
  } = props;

  const buttonStyle:SerializedStyles = css`
    font-size: 13px;
    font-weight: bold;
    color: #666666;
    background-color: #DDDDDD;
    display: inline-block;
    padding: 8px 35px 8px 20px; //上右下左
    border: none;
    margin: 0 auto;
    &:after{
      content: '';
      border: 0;
      border-top: solid 1px #666666;
      border-right: solid 1px #666666;
      display: inline-block;
      width: 11px;
      height: 11px;
      //矢印位置
      top: 25px;
      right: 20px;
      transform: translateX(20px) translateY(1px) rotate(45deg); //rotate()で回転
      }
    :hover {
      color: #909090;
      background: #e4e4e4;
      cursor: pointer;
        ::after {
          border-color: #909090;

        }
    }
  `;

  return (
    <div >
      <button css={buttonStyle}>{label}</button>
    </div>
  );
};
