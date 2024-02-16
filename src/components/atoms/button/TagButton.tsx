import { css } from "@emotion/react";
import React, { FC } from "react";

type TagButtonProps = {
    url: string;
    label: string;
    hoverable: boolean;
};

export const TagButton: FC<TagButtonProps> = (props) => {
    const { url, label, hoverable } = props;

    return (
        <a href={url} css={hoverable ? [ tagStyle, tagHover ] : tagStyle}>
            {label}
        </a>
    );
};

const tagStyle = css`
    display: inline-block;
    background: #999999;
    color: #FFFFFF;
    padding: 0 7px;
    text-decoration: none;
    border: 1px solid #999999;
    font-size: 11px;
    transition: .3s all ease;
`

const tagHover = css`
    :hover {
        background: #FFFFFF;
        color: #999999;
        transition: .3s all ease;
        }
`