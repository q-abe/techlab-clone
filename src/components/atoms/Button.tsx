import { css } from "@emotion/react";
import React, { FC } from "react";

type ButtonProps = {
  onClick?: () => void;
  backgroundColor?: string;
  primary?: boolean;
  label: string;
  color: string;
};

export const Button: FC<ButtonProps> = (props) => {
  const {
    onClick,
    backgroundColor,
    primary,
    label,
    color,
  } = props;

  const buttonStyle = css`
    background-color: red;
    color: "pink"
    backgroundolor: backgroundColor
  `;

  return (
    <div>
      <button>Button Text</button>
      <p>文字</p>
    </div>
  );
};
