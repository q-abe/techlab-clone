import React, { FC } from "react";
import { css } from "@emotion/react";

type TitleProps = {
    titleText: string;
};

export const ArticleTitleText: FC<TitleProps> = (props) => {
    const { titleText, } = props;

    const textStyle = css`
        color: #FFFFFF;
    `

    return (
        <div>
            <p css={textStyle}  {...props}>
                {titleText}
            </p>
        </div>
    );
};
