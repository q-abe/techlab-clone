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
    color: red;
  `;

  return (
    <div>
      <button css={buttonStyle}>
        {/* {label} */}
        aaaaaaaa
      </button>
    </div>
  );
};
