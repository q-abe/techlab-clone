import React, { FC } from "react";
import { css } from "@emotion/react";

type ArticleThumbnailProps = {
    pictureId: number
};

export const ArticleThumbnail: FC<ArticleThumbnailProps> = (props) => {
    const { pictureId } = props;

    const cardStyles = css`
        width: 100%;
        height: 100%;
        object-fit: cover;
    `
    return (
        <img src={`https://unsplash.it/781/400/?blur?image=${pictureId}`} alt={"Unsplashのランダム画像"}
             css={cardStyles} {...props}/>
    );
};


