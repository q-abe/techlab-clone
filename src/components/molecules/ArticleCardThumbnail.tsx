import React, { FC } from "react";
import { ArticleThumbnail } from "../atoms/symbols/ArticleThumbnail"
import { css } from "@emotion/react";
import { ArticleTitleText } from "../atoms/symbols/ArticleTitleText";

type ArticleCardProps = {
    index: number;
    articleTitle: string;
};

export const ArticleCardThumbnail: FC<ArticleCardProps> = (props) => {
    const { index, articleTitle } = props;

    return (
        <div css={pictureStyle}>
            <ArticleThumbnail pictureId={index}/>
            <ArticleTitleText css={textStyle} titleText={articleTitle}/>
        </div>
    )
};

const pictureStyle = css`
    height: 168px;
    margin: 0;
    padding: 0;
    position: relative;
`

const textStyle = css`
    min-height: 84px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    inline-size: 250px;
    overflow: hidden;
    overflow-wrap: break-word;
    //タイトルが短いと中央、長いと左寄せ。
    margin-inline: auto;
    max-inline-size: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
`
