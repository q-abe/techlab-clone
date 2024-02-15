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
                <section css={section1Style}>
                    <h2 css={categoryStyle}><TagIcon/>カテゴリー</h2>

                    {allTags.map((tag, index) => {
                        return (
                            <ul css={ulTagStyle} key={index}>
                                <li css={liStyle}>
                                    <TagButton label={allTags[index]} url={""}/>
                                </li>
                            </ul>
                        )
                    })}
                </section>
                <section css={section2Style}>
                    <h2 css={archiveStyle}><CalendarIcon/>月別アーカイブ</h2>
                    <MonthlyArchive articlesCount={articlesCount} color={"#666666"} cssColor={cssColor}/>
                </section>
                <section css={section3Style}>
                    <h2 css={h2Style}>TechQLab(テックラボ)とは?</h2>
                    <p css={pStyle}>株式会社キューのWeb技術者によるWeb技術・ノウハウを発信するブログです。</p>
                </section>

            </div>
        </footer>
    );
};

const footerStyle = css`
    color: #666666;
    display: block;
    width: 100%;
`

const divStyle = css`
    display: grid;
    grid-template-areas:
        "category archive"
        "copy archive";
    gap: 48px 30px;
    margin: 0 auto;
    padding: 80px 0;
    width: 95%;`

const section1Style = css`
    grid-area: category;
`

const section2Style = css`
    grid-area: archive;
`

const section3Style = css`
    grid-area: copy;
    border-top: 1px solid #666666;
    padding: 24px 0 0;
`

const archiveStyle = css`
    font-size: 18px;
    display: flex;
    gap: 10px;

`

const categoryStyle = css`
    margin-bottom: 10px;
    font-size: 18px;
    max-width: 500px;
    display: flex;
    gap: 10px;
`

const ulTagStyle = css`
    margin: 0;
    padding: 0;
    display: inline-block;
    list-style: none;
`

const liStyle = css`
    padding: 2px 5px;
`

const h2Style = css`
    font-size: 14px;
`

const pStyle = css`
    font-size: 12px;
`