import React, { FC, SVGProps } from "react";
import { css } from "@emotion/react";

type TitleProps = {
    onClick?: () => {};
};

export const ArticleTitleText: FC<TitleProps> = (props) => {
    const { onClick, } = props;

    const textStyle = css`
        color: #A0C5E8;
    `

    return (
        <div>
            <p
                css={textStyle} onClick={onClick} {...props}>
                記事タイトル文字</p>
        </div>
    );
};
