import React, { FC } from "react";
import { css } from "@emotion/react"
import { SearchIcon } from "../atoms/symbols/SearchIcon";

type SearchProps = {
    onClick: () => void
}

const formStyle = css`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
    max-width: 640px;
    align-items: center;
    border-bottom: 2px solid #FFFFFF;
    color: #FFFFFF;
`

const inputStyle = css`
    width: 100%;
    outline: none;
    background: transparent;
    color: #FFFFFF;
    font-size: 18px;
    margin: auto;
    height: 28px;
    border: none;
    padding: 0 8px 4px;

`

const searchStyle = css`
    width: 30px;
    stroke: #FFFFFF;
`

const buttonStyle = css`
    background-color: transparent;
    outline: none;
    border: none;

    :hover {
        transition: opacity .2s ease-in-out;
        opacity: 0.7;
    }
`

export const SearchBar: FC<SearchProps> = (props) => {
    const { onClick } = props
    return (
        <form css={formStyle}>
            <input css={inputStyle} type="text"/>
            <button css={buttonStyle} onClick={() => {
            }}>
                <SearchIcon css={searchStyle} onClick={() => {
                }}/>
            </button>
        </form>
    )
};