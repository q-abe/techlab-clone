import React, { FC, useState } from "react";
import { ArrowIcon } from "../atoms/symbols/ArrowIcon";
import { css } from "@emotion/react";

type AccordionProps = {};

export const Accordion: FC<AccordionProps> = (props) => {
    const {} = props;
    const [isOpen, setIsOpen] = useState(true)

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <dl>
                <dt css={accordionStyle} onClick={toggleAccordion}>
                    <button css={accordionHeaderStyle}>
                        2024年
                        <ArrowIcon direction={isOpen ? "upward" : "downward"} css={arrowStyle}/>
                    </button>
                </dt>
                <dd css={isOpen ? contentOpen : content}>
                    <ul css={listStyle}>
                        <li>
                            <a href="/articles/?month=2024-2">2月(1)</a>
                        </li>
                        <li>
                            <a href="/articles/?month=2024-1">1月(3)</a>
                        </li>
                    </ul>
                </dd>
            </dl>
        </div>

    )
}

const accordionStyle = css`
    margin: 0;
    border-bottom: 1px solid #707070;
`

const accordionHeaderStyle = css`
    margin: 0 0 0 5px;
    background: transparent;
    border: none;
    width: 560px;
    height: 37px;
    text-align: left;
    font-weight: bold;
    cursor: pointer;
    font-size: 14px;

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
    margin: 0 0 0 3px;
    list-style: none;
    display: flex;
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
