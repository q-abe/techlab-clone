import React, { FC } from "react";
import { css } from "@emotion/react";

export const ArticleTitleText: FC<React.SVGProps<SVGElement>> = (props) => {

    const textStyle = css`
        color: #A0C5E8;
    `

    return (
        <div>
            <p css={textStyle}>記事タイトル文字</p>
        </div>
    );
};
