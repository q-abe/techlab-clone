import { css } from "@emotion/react";
import React, { FC } from "react";

type TagButtonProps = {
    url: string;
    label: string;
};

export const TagButton: FC<TagButtonProps> = (props) => {
    const {
        url,
        label,
    } = props;

    return (
        <a href={url} css={tagStyle}>
            {label}
        </a>
    );
};

const tagStyle = css`
    background: #999999;
    color: #FFFFFF;
    padding: 4px 7px;
    text-decoration: none;
    border: 1px solid #999999;
    font-size: 12px;
    transition: .3s all ease;

    :hover {
        background: #FFFFFF;
        color: #999999;
    }
`