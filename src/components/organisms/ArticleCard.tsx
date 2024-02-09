import React, { FC } from "react";
import { ArticleCardDetail } from "../molecules/ArticleCardDetail";
import { ArticleCardThumbnail } from "../molecules/ArticleCardThumbnail";
import { ArticleContentsList } from "@/entity/ArticleContentType";

type ArticleCardProps = {
    articleEntity: ArticleContentsList
};

export const ArticleCard: FC<ArticleCardProps> = (props) => {
    const { articleEntity } = props;
    return (
        <div>
            {articleEntity.map((content, index) => {
                return (
                    <div key={content.id}>
                        <ArticleCardThumbnail articleTitle={content.title}
                                              index={content.id}/>
                        <ArticleCardDetail dateCreated={content.created_date}
                                           tags={content.tags}
                                           title={content.title}/>
                    </div>
                )
            })}
        </div>
    )
}
