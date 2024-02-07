import React, { FC, useState } from "react";
import { ArrowIcon } from "../atoms/symbols/ArrowIcon";
import { css } from "@emotion/react";
import { ArticlesCounts } from "../../entity/ArticlesCountByMonthType"

type AccordionProps = {
    articlesCount: ArticlesCounts;
};

export const Accordion: FC<AccordionProps> = (props) => {
    const { articlesCount } = props;
    const [ isOpen, setIsOpen ] = useState(false)

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            {articlesCount.map((yearData) => {
                const yearKey = yearData.year;
                return (
                    <dl css={dlStyle} key={yearKey}>
                        <dt css={accordionStyle} onClick={toggleAccordion}>
                            <button css={accordionHeaderStyle}>
                                {yearKey}年
                                <ArrowIcon direction={isOpen ? "upward" : "downward"} css={arrowStyle}/>
                            </button>
                        </dt>
                        <dd css={isOpen ? contentOpen : content}>
                            <ul css={listStyle}>
                                {yearData.data.map((monthData) => {
                                    console.log("item", monthData);
                                    const key = yearKey + monthData.month
                                    return (
                                        <li key={key}>
                                            <a href={`/articles/?month=${yearKey}-${monthData.month}`}>{monthData.month}月({monthData.post_count})</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </dd>
                    </dl>
                )
            })}
        </div>
    )
}

const dlStyle = css`
    margin: 0;
    padding: 0;
`

const accordionStyle = css`
    border-bottom: 1px solid #707070;
    width: 560px;
    margin: 0;
    padding: 0;
    display: inline-block;
    vertical-align: top;
`

const accordionHeaderStyle = css`
    margin: 0;
    padding: 5px 10px;
    background: transparent;
    border: none;
    width: 560px;
    height: 37px;
    text-align: left;
    font-weight: bold;
    cursor: pointer;
    font-size: 14px;
    align-items: center;

    :hover {
        transition: opacity .2s ease-in-out;
        opacity: 0.7;
    }
`

const arrowStyle = css`
    float: right;
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

const content = css`
    margin: 0;
    overflow: hidden;
    max-height: 0;
    transition: max-height .2s ease-in-out;
`

const contentOpen = css`
    margin: 0;
    max-height: 200px;
    transition: max-height .2s ease-in-out;
`
