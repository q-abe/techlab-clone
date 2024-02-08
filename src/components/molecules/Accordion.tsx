import React, { FC, useState } from "react";
import { ArrowIcon } from "../atoms/symbols/ArrowIcon";
import { css } from "@emotion/react";
import { ArticlesCounts } from "../../entity/ArticlesCountByMonthType"

type AccordionProps = {
    articlesCount: ArticlesCounts;
};

export const Accordion: FC<AccordionProps> = (props) => {
    const { articlesCount } = props;
    const [ isOpen, setIsOpen ] = useState({ 0: false })

    const toggleAccordion = (index: number) => {
        setIsOpen((prevState) => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };


    return (
        <div>
            {articlesCount.map((yearData, index) => {
                const yearKey = yearData.year;
                return (
                    <dl css={dlStyle} key={yearKey}>
                        <dt css={accordionStyle} onClick={() => toggleAccordion(index)}>
                            <button css={accordionHeaderStyle}>
                                {yearKey}年
                                <ArrowIcon direction={isOpen[index] ? "upward" : "downward"} css={arrowStyle}/>
                            </button>
                        </dt>
                        {isOpen[index] ? (<dd css={content}>
                            <ul css={listStyle}>
                                {yearData.data.map((monthData) => {
                                    const key = yearKey + monthData.month
                                    return (
                                        <li key={key}>
                                            <a href={`/articles/?month=${yearKey}-${monthData.month}`}>{monthData.month}月({monthData.post_count})</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </dd>) : undefined}

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
    max-height: 200px;
    transition: max-height .2s ease-in-out;
`
