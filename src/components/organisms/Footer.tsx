import React, { FC } from "react";
import { TagButton } from "../atoms/button/TagButton";
import { TagIcon } from "../atoms/symbols/TagIcon";
import { css } from "@emotion/react";
import { MonthlyArchive } from "../organisms/MonthlyArchive";
import { ArticlesCounts } from "../../entity/ArticlesCountByMonthType";
import ArticlesCount from "../../api/ArticlesCountMockData.json";
import { CalendarIcon } from "../atoms/symbols/CalendarIcon";
import { QImageLogo } from "../atoms/symbols/QImageLogo";
import tagMockData from "../../api/TagMockData.json"

type FooterProps = {
    articlesCount: ArticlesCounts;
    allTags: string[]
};

const articlesCount = ArticlesCount;
const cssColor = css`
    color: #666666;

    :hover {
        transition: .2s opacity ease-in-out;
        opacity: 0.7;
    }
`

export const Footer: FC<FooterProps> = (props) => {
    const {} = props;
    const allTags = tagMockData;

    return (
        <footer css={footerStyle}>
            <div css={divStyle}>
                <section css={sectionCategoryStyle}>
                    <h2 css={categoryStyle}><TagIcon/>カテゴリー</h2>

                    {allTags.map((tag, index, id) => {
                        return (
                            <ul css={ulTagStyle} key={allTags[index].id}>
                                <li css={liStyle}>
                                    <TagButton label={allTags[index].name} url={""} hoverAble={true}/>
                                </li>
                            </ul>
                        )
                    })}
                </section>
                <section css={sectionArchiveStyle}>
                    <h2 css={archiveStyle}><CalendarIcon/>月別アーカイブ</h2>
                    <MonthlyArchive articlesCount={articlesCount} color={"#666666"} cssColor={cssColor}/>
                </section>
                <section css={sectionCopyStyle}>
                    <h2 css={h2Style}>TechQLab(テックラボ)とは?</h2>
                    <p css={pStyle}>株式会社キューのWeb技術者によるWeb技術・ノウハウを発信するブログです。</p>
                </section>
            </div>
            <div css={footerFootStyle}>
                <picture css={qLogoStyle}>
                    <QImageLogo/>
                </picture>
                <nav>
                    <ul css={ulFooterStyle}>
                        <li>
                            <a target="_blank" href="https://www.q-co.jp/" css={footerMenuStyle}>Corporate Site</a>
                        </li>
                        <li>
                            <a target="_blank" href="https://cr.q-co.jp/" css={footerMenuStyle}>Creative Dept</a>
                        </li>
                        <li>
                            <a href="/contact/" css={footerMenuStyle}>Contact</a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.wantedly.com/companies/q-co"
                               css={footerMenuStyle}>Recruit</a>
                        </li>
                    </ul>
                </nav>
                <div css={underStyle}>
                    <div css={footerTextStyle}></div>
                    <p css={footerTextStyle}>
                        ©︎ Q co.,ltd.
                    </p>
                    <a css={footerPrivacyStyle} href="/privacy/">
                        {"> Privacy Policy"}
                    </a>
                </div>
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
    width: 95%;
    max-width: 1000px;
`

const sectionCategoryStyle = css`
    grid-area: category;
`

const sectionArchiveStyle = css`
    grid-area: archive;
`

const sectionCopyStyle = css`
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

const footerFootStyle = css`
    background-color: #DDDDDD;
    padding: 25px 0 0 0;
    gap: 16px 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    margin: 0;
`

const qLogoStyle = css`
    max-width: 100%;
`

const ulFooterStyle = css`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 0 11px;
`

const footerMenuStyle = css`
    text-decoration: none;
    color: #666666;
    font-size: 12px;

    :hover {
        transition: .2s opacity ease-in-out;
        opacity: 0.7;
    }
`

const underStyle = css`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding-bottom: 20px;
`

const footerTextStyle = css`
    margin: 0;
    text-decoration: none;
    color: #666666;
    font-size: 10px;
    text-align: center;
`

const footerPrivacyStyle = css`
    text-decoration: none;
    color: #666666;
    font-size: 10px;
    text-align: right;
    padding-right: 20px;

    :hover {
        transition: .2s opacity ease-in-out;
        opacity: 0.7;
    }
`
