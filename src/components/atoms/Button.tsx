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
    color
  } = props;
  const buttonStyle = css`
    color: rgba(217, 33, 33, 1);
  `;

  return (
    <div>
      <button css={buttonStyle}>
        {label}
        <style jsx>{`
          button {
            background-color: ${backgroundColor};
          }
        `}</style>
      </button>
    </div>
  );
};
