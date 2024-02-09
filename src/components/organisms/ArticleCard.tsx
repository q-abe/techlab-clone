import React, { FC } from "react";
import { ArticleCardDetail } from "../molecules/ArticleCardDetail";
import { ArticleCardThumbnail } from "../molecules/ArticleCardThumbnail";
import { ArticleContentsList } from "@/entity/ArticleContentType";
import { css } from "@emotion/react";

type ArticleCardProps = {
    articleEntity: ArticleContentsList
};

export const ArticleCard: FC<ArticleCardProps> = (props) => {
    const { articleEntity } = props;
    return (
        <ul css={ulStyle}>
            {articleEntity.map((content, index) => {
                return (
                    <li key={content.id}>
                        <a href={`${index}`}>
                            <ArticleCardThumbnail articleTitle={content.title}
                                                  index={content.id}/>
                            <ArticleCardDetail dateCreated={content.created_date}
                                               tags={content.tags}
                                               title={content.title}/>
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

const ulStyle = css`
    list-style: none;
`