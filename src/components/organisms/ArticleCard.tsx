import React, { FC } from "react";
import { ArticleCardDescription } from "../molecules/ArticleCardDescription";
import { ArticleCardThumbnail } from "../molecules/ArticleCardThumbnail";
import { css } from "@emotion/react";

type ArticleCardProps = {
    id: number;
    date: string;
    tags: string[]
    title: string;
};

export const ArticleCard: FC<ArticleCardProps> = (props) => {
    const { id, date, tags, title } = props;
    return (
        <ul css={ulStyle}>
            <li css={liStyle}>
                <a href={`${id}`} css={aStyle}>
                    <div css={gridStyle}>
                        <ArticleCardThumbnail articleTitle={title}
                                              index={id}/>
                        <ArticleCardDescription dateCreated={date}
                                                tags={tags}
                                                title={title}/>
                    </div>
                </a>
            </li>
        </ul>
    );
};

const ulStyle = css`
    list-style: none;
    padding: 0;
    height: 100%;
`

const liStyle = css`
    height: 100%;
`

const aStyle = css`
    text-decoration: none;
`

const gridStyle = css`
    display: grid;
    height: 100%;
    grid-template-rows: minmax(50px, auto) 1fr;
`