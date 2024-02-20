import React, { FC } from "react";

import { Header } from '../organisms/Header'
import { Footer } from '../organisms/Footer'
import { ArticleCard } from '../../components/organisms/ArticleCard'
import ArticlesCountMockData from "../../api/ArticlesCountMockData.json"
import tagMockData from "../../api/TagMockData.json"
import ArticlesMockDate from "../../api/ArticlesMockData.json"
import { css } from '@emotion/react'

export const Home: FC = (props) => {
    console.log("Home");
    return (
        <div css={topStyle}>
            <Header allTags={tagMockData}/>
            <main css={mainStyle}>
                <div css={gridContainer}>
                    <ul css={ulStyle}>
                        {ArticlesMockDate.map((ArticleDate, index) => {
                            return (
                                <li css={liStyle} key={ArticleDate.id}>
                                    <ArticleCard id={ArticleDate.id} date={`${ArticleDate.createdDate}`}
                                                 title={ArticleDate.title}
                                                 tags={ArticleDate.tags} key={ArticleDate.id}/>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <Footer allTags={tagMockData} articlesCount={ArticlesCountMockData}/>
            </main>
        </div>

    );
}

const topStyle = css`
    width: 100%;
`

const mainStyle = css`
    margin-top: 40px;
    justify-items: center;
    place-content: center;
`

const gridContainer = css`
    display: flex;
    justify-content: center;
`

const ulStyle = css`
    padding: 0;
    list-style: none;
    gap: 40px;
    display: grid;
    grid-template-columns: repeat(3, 300px);

    @media screen and (max-width: 1050px) {
        grid-template-columns: repeat(2, minmax(0px, 1fr));
        }

    @media screen and (max-width: 640px) {
        grid-template-columns: repeat(1, minmax(300px, auto) 1fr);
        }
`

const liStyle = css`
    list-style: none;
    margin: 0;
    padding: 0;
`
