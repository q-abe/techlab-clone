import React, { FC } from "react";
import { css } from "@emotion/react";
import { SearchBar } from "../molecules/SearchBar";
import { CloseIcon } from "../atoms/symbols/CloseIcon";
import { Tags } from "../../entity/TagType";

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
    opacity: 1;
    transition: transform 0.4s ease-in-out 0s, opacity 0.3s ease-in-out 0s;
    transform: translateY(0);
`;

const modalHidden = css`
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
    margin: 0 auto;
    max-width: 640px;

    @media screen and (max-width: 750px) {
        max-width: 80%;
        }
`

const tagsStyle = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const ulStyle = css`
    line-height: 3;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    font-size: 16px;
    max-width: 640px;
    justify-items: center;
    align-items: center;
    margin: 0;
    padding: 20px 0 0 0;
    gap: 0 8px;

    @media screen and (max-width: 750px) {
        line-height: 3;
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        font-size: 12px;
        max-width: 80%;
        }
`

const tagStyle = css`
    color: white;

    :hover {
        opacity: 0.7;
        transition: .2s opacity ease-in-out;
        }
`
