import React, { FC } from "react";
import { css } from "@emotion/react";
import { TagButton } from "../atoms/button/TagButton";

type ArticleCardProps = {
    dateCreated: string;
    title: string;
    tags: string[]
};

export const ArticleCardDetail: FC<ArticleCardProps> = (props) => {
    const { dateCreated, title, tags } = props;

    return (
        <div css={detailStyle}>
            <p css={dateStyle}>{dateCreated}</p>
            <h2 css={titleStyle}>{title}</h2>
            <ul css={tagStyle}>

                {tags.map((tag, index) => (
                    <li css={liStyle} key={tag}>
                    <span>
                    <TagButton label={tags[index]} url={""}/>
                    </span>
                    </li>
                ))}
            </ul>
        </div>
    )
};

const detailStyle = css`
    width: 300px;
    height: 156px;
    background-color: #F5F5F5;
`

const dateStyle = css`
    font-size: 13px;
    color: #666666;
    padding: 1rem 1rem 0 1rem;
    align-items: center;
    justify-content: center;

    :after {
        content: "";
        width: 100%;
        height: 1px;
        margin: 0 0 0 1rem;
        background-color: #ADADAD;
    }
`

const titleStyle = css`
    word-break: break-all;
    height: 44px;
    padding: 0 1rem;
    overflow: hidden;
    color: #333333;
    font-size: 16px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
`

const tagStyle = css`
    display: flex;
    display: -webkit-flex;
    list-style: none;
    padding: 6px 0 0 16px;
`

const liStyle = css`
    margin-right: 10px;
`
