import React, {FC} from "react";
import {css} from "@emotion/react";

type ArticleTitleTextProps = {};

export const ArticleTitleText: FC<ArticleTitleTextProps> = (props) => {
    const {} = props;

    const textStyle = css`
        color: #A0C5E8;
    `

    return (
        <div>
            <p css={textStyle}>記事タイトル文字</p>
        </div>
    );
};
