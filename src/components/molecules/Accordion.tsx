import React, { FC, useState } from "react";
import { ArrowIcon } from "../atoms/symbols/ArrowIcon";
import { css } from "@emotion/react";

type AccordionProps = {};

export const Accordion: FC<AccordionProps> = (props) => {
    const {} = props;
    const [isOpen, setIsOpen] = useState(false)

    const toggleAccodion = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <dl>
                <dt css={a} onClick={toggleAccodion}>
                    <button css={accordionTitleStyle}>
                        2024年
                        <ArrowIcon direction={isOpen ? "upward" : "downward"} css={arrowStyle}/>
                    </button>
                </dt>
                <dd>
                    <ul>
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

const accordionTitleStyle = css`
    background: transparent;
    border: none;
    width: 560px;
    height: 37px;
    text-align: left;
    font-weight: bold;

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

const a = css`
    border-bottom: 1px solid #707070;
`