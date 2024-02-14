import React, { FC } from "react";
import { css } from "@emotion/react";
import { SearchBar } from "../molecules/SearchBar";
import { CloseIcon } from "../atoms/symbols/CloseIcon";
import { allTags } from "../../entity/TagType";

type HeaderModalProps = {
    isOpen: boolean
    handleClick: () => {}
    texts: Tags
};

export const HeaderModal: FC<HeaderModalProps> = (props) => {
    const { isOpen, handleClick, texts } = props;

    return (
        <div>
            <div css={isOpen ? modalVisible : modalHidden}>
                <div css={content}>
                    <div>
                        <CloseIcon css={closeStyle} onClick={handleClick}/>
                    </div>
                    <div css={searchStyle}>
                        <SearchBar onClick={() => {
                        }}/>
                    </div>
                    <div css={tagsStyle}>
                        <ul css={ulStyle}>
                            {texts.map((text, index) => {
                                return (
                                    <li key={text.id}>
                                        <a css={tagStyle}
                                           href={`https://techlab.q-co.jp/articles/category/${text.name}/`}
                                           key={text.id}>
                                            {text.name}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

const modalVisible = css`
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    transition: transform 0.4s ease-in-out 0s, opacity 0.3s ease-in-out 0s;
    transform: translateY(0);
`;

const modalHidden = css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: transform 0.4s ease-in-out 0s, opacity 0.3s ease-in-out 0s;
    transform: translateY(-100%);
`;

const content = css`
    z-index: 2;
    width: 100%;
    padding: 90px 20px;
    background: rgb(215, 0, 15);
    position: fixed;
    top: 0;
`

const closeStyle = css`
    :hover {
        opacity: 0.7;
        transition: .2s opacity ease-in-out;
    }
`

const searchStyle = css`
    margin-left: auto;
    padding: 0 50px 0 50px;
`

const tagsStyle = css`
    padding: 10px 180px 10px 10px;
`

const tagStyle = css`
    color: white;
    padding-left: 15px;

    :hover {
        opacity: 0.7;
        transition: .2s opacity ease-in-out;
    }
`

const ulStyle = css`
    line-height: 3;
    padding-right: 100px;
    padding-left: 100px;
    padding-inline-start: 60px;
    display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: start;
    justify-content: flex-start;
    list-style: none;
    width: 100%;
    max-width: 640px;
`
