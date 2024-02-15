import React, { FC, useState } from "react";
import { ArrowIcon } from "../atoms/symbols/ArrowIcon";
import { css } from "@emotion/react";
import { ArticlesCountOfYear } from "../../entity/ArticlesCountByMonthType"

type SAccordionProps = {
    articlesCount: ArticlesCountOfYear;
};

export const Accordion: FC<SAccordionProps> = (props) => {
    const { articlesCount } = props;
    const [ isOpen, setIsOpen ] = useState(false)
    console.log("articlesCount", articlesCount)

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    }


    return (
        <dl css={dlStyle}>
            <dt css={accordionStyle} onClick={() => toggleAccordion()}>
                <button css={accordionHeaderStyle}>
                    {articlesCount.year}年
                    <ArrowIcon direction={isOpen ? "upward" : "downward"} css={arrowStyle}/>
                </button>
            </dt>
            <dd css={isOpen ? contentOpenStyle : contentStyle}>
                <ul css={listStyle}>
                    {articlesCount.data.map((monthData) => {
                        const key = articlesCount.year + monthData.month
                        return (
                            <li key={key}>
                                <a css={[ linkStyle, cssColor ]}
                                   href={`/articles/?month=${articlesCount.year}-${monthData.month}`}>{monthData.month}月({monthData.postCount})</a>
                            </li>
                        )
                    })}
                </ul>
            </dd>
        </dl>
    )
}

const dlStyle = css`
    margin: 0;
    padding: 0;
`

const accordionStyle = css`
    border-bottom: 1px solid #707070;
    width: 100%;
    display: inline-block;
    vertical-align: top;
`

const accordionHeaderStyle = css`
    padding: 5px 10px;
    background: transparent;
    border: none;
    width: 100%;
    text-align: left;
    font-weight: bold;
    cursor: pointer;
    font-size: 14px;
    align-items: center;
    position: relative;
    display: flex;
    justify-content: space-between;

    :hover {
        transition: opacity .2s ease-in-out;
        opacity: 0.7;
    }
`

const arrowStyle = css`
    margin-right: 5px;
    margin-top: 1px;
`

const listStyle = css`
    max-width: 560px;
    margin: 0 0 0 3px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 12px 14px;
    padding: 14px 8px 12px;
    font-size: 12px;
`

const contentStyle = css`
    margin: 0;
    overflow: hidden;
    max-height: 0;
    transition: max-height .100000s ease-in-out;
`
const contentOpenStyle = css`
    margin: 0;
    max-height: 200px;
    transition: max-height .100000s ease-in-out;
`
