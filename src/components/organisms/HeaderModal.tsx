import React, { FC } from "react";
import { css } from "@emotion/react";
import { SearchBar } from "../molecules/SearchBar";
import { CloseIcon } from "../atoms/symbols/CloseIcon";
import { allTags } from "../../entity/TagType";

type HeaderModalProps = {
    isOpen: boolean
    fun: any
    texts: allTags

};

export const HeaderModal: FC<HeaderModalProps> = (props) => {
    const { isOpen, fun, texts } = props;


    return (
        isOpen ? <div css={overlay}>
            <div css={content}>
                <div>
                    <CloseIcon/>

                </div>
                <SearchBar onClick={() => {
                }}/>
                <ul css={ulStyle}>
                    {texts.map((text, index) => {
                        return (
                            <li key={text.id}>
                                <a css={tagStyle} href="https://techlab.q-co.jp/articles/category/HTML/" key={text.id}>
                                    {text.name}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div> : undefined


    );
};

const overlay = css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`

const content = css`
    z-index: 2;
    width: 100%;
    padding: 90px 20px;
    background: rgb(215, 0, 15);
    position: fixed;
    top: 0;
`

const tagStyle = css`
    color: white;
    padding-left: 15px;
`

const ulStyle = css`
    line-height: 3;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 60px;
    display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: start;
    justify-content: flex-start;
    list-style: none;
    width: 100%;
    max-width: 640px;
`
