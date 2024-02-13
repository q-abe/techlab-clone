import React, { FC, useState } from "react";
import { QTextLogo } from "../atoms/symbols/QTextLogo";
import { SearchIcon } from "../atoms/symbols/SearchIcon";
import { HeaderModal } from "../organisms/HeaderModal";
import { css } from "@emotion/react";
import { allTags } from "../../entity/TagType";

type HeaderProps = {
    allTags: allTags
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
                    <li>
                        <QTextLogo/>
                    </li>
                    <li css={liStyle}>
                        <SearchIcon onClick={handleModal} css={SearchIconStyle}/>
                    </li>
                    <HeaderModal isOpen={isOpen} handleClick={handleModal} texts={allTags}/>
                </ul>
            </nav>
        </header>
    );
};

const SearchIconStyle = css`
    transform: translateX(300px);
`

const ulStyle = css`
    display: flex;
    list-style: none;
    cursor: pointer;
`

const liStyle = css`
    margin-left: auto;
    float: right;
`
