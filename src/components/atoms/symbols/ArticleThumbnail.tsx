import React, { FC } from "react";
import {css} from "@emotion/react";

type ArticleThumbnailProps = {
};

export const ArticleThumbnail: FC<ArticleThumbnailProps> = (props) => {
    const {
    } = props;

    const cardStyles = css`
        width: 1000px;
        height: 562px;
        object-fit: cover;
        display: block;
    `
    return (
        <div>
            <img src={"https://source.unsplash.com/random"} alt={"Unsplashのランダム画像"} css={cardStyles}/>
        </div>
    );
};
