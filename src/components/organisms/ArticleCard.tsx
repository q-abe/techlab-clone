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
            <li>
                <a href={`${id}`} css={a}>
                    <ArticleCardThumbnail articleTitle={title}
                                          index={id}/>
                    <ArticleCardDescription dateCreated={date}
                                            tags={tags}
                                            title={title}/>
                </a>
            </li>

        </ul>
    );
};

const ulStyle = css`
    list-style: none;
`

const a = css`
    text-decoration: none;
`