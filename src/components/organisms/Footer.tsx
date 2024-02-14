import React, { FC } from "react";
import { TagButton } from "../atoms/button/TagButton";
import { TagIcon } from "../atoms/symbols/TagIcon";
import { css } from "@emotion/react";
import { MonthlyArchive } from "../organisms/MonthlyArchive";
import { ArticlesCounts } from "../../entity/ArticlesCountByMonthType";
import ArticlesCount from "../../api/ArticlesCountMockData.json";
import { CalendarIcon } from "../atoms/symbols/CalendarIcon";


type FooterProps = {
    articlesCount: ArticlesCounts;
    allTags: string[]
};

const articlesCount = ArticlesCount;

export const Footer: FC<FooterProps> = (props) => {
    const {} = props;
    const allTags = [ "HTML",
        "JavaScript",
        "Node.js",
        "Next.js",
        "React",
        "TypeScript",
        "パフォーマンス",
        "Shopify",
        "NewRelic",
        "Docker",
        "CI/CD",
        "Git",
        "Strapi",
        "Jest",
        "テスト",
        "Database",
        "AWS" ]
    return (
        <footer css={footerStyle}>
            <div css={divStyle}>

                <section>
                    <h2 css={categoryStyle}><TagIcon/>カテゴリー</h2>

                    {allTags.map((tag, index) => {
                        return (
                            <ul css={ulStyle} key={index}>
                                <li css={liStyle}>
                                    <TagButton css={tagButtonStyle} label={allTags[index]} url={""}/>
                                </li>
                            </ul>
                        )
                    })}
                </section>

                <section>
                    <h2 css={archiveStyle}><CalendarIcon css={IconStyle}/>月別アーカイブ</h2>
                    <MonthlyArchive articlesCount={articlesCount}/>
                </section>

                <section>
                    <h2 css={h2Style}>TechQLab(テックラボ)とは?</h2>
                    <p css={pStyle}>株式会社キューのWeb技術者によるWeb技術・ノウハウを発信するブログです。</p>
                </section>

            </div>
        </footer>

    );
};

const footerStyle = css`
    color: rgb(102, 102, 102);
`

const divStyle = css`
    display: grid;
    grid-template-areas:
        "category archive"
        "copy archive";
    gap: 48px 30px;
`

const archiveStyle = css`
    display: block;
    margin-bottom: 10px;
    font-size: 18px;
`

const categoryStyle = css`
    display: flex;
    margin-bottom: 10px;
    font-size: 18px;
    max-width: 500px;
`

const ulStyle = css`
    margin: 0;
    padding: 0;
    display: inline-block;
`

const liStyle = css`
    padding: 0 10px 0 0;
    list-style: none;
`

const IconStyle = css`

`

const tagButtonStyle = css`
    display: block;
`

const h2Style = css`
    font-size: 14px;
`

const pStyle = css`
    font-size: 12px;
`