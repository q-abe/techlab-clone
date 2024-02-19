import React, { FC, useState } from "react";
import { QTextLogo } from "../atoms/symbols/QTextLogo";
import { SearchIcon } from "../atoms/symbols/SearchIcon";
import { HeaderModal } from "../organisms/HeaderModal";
import { css } from "@emotion/react";
import { Tags } from "../../entity/TagType";

type HeaderProps = {
    allTags: Tags
};

export const Header: FC<HeaderProps> = (props) => {
    const { allTags } = props;
    const [ isOpen, setIsOpen ] = useState(false)

    const handleModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header>
            <nav>
                <ul css={ulStyle}>
                    <li css={blankStyle}></li>
                    <li>
                        <QTextLogo css={textLogoStyle}/>
                    </li>
                    <li>
                        <SearchIcon css={searchStyle} onClick={handleModal}/>
                    </li>
                </ul>
            </nav>
            <aside>
                <HeaderModal isOpen={isOpen} handleClick={handleModal} texts={allTags}/>

                <div css={isOpen ? overlayVisible : overlayHidden}>
                </div>
            </aside>
        </header>
    );
};

const ulStyle = css`
    list-style: none;
    cursor: pointer;
    width: 100%;
    display: grid;
    grid-template-areas:
        "blank textLogo searchIcon";
    justify-content: space-between;
    margin-top: 20px;
    padding: 0px;
`

const blankStyle = css`
    grid-area: blank;
    width: 40px;
`

const textLogoStyle = css`
    grid-area: textLogo;
`

const searchStyle = css`
    grid-area: searchIcon;
    padding-right: 20px;

    :hover {
        opacity: 0.7;
        transition: .2s opacity ease-in-out;
        }
`

const overlayVisible = css`
    z-index: 1;
    visibility: visible;
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(30, 30, 30);
    opacity: 0.6;
    transition: visibility 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s;
`

const overlayHidden = css`
    opacity: 0;
`
