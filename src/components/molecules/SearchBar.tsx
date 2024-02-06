import React, { FC } from "react";
import { css } from "@emotion/react"
import { SearchIcon } from "../atoms/symbols/SearchIcon";

type SearchProps = {
    onClick: () => void
}

const a = css`
    background-color: red;
`

const formStyle = css`
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 8px 4px;
    width: 100%;
    max-width: 640px;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
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
    margin: 0 0 0 10px;
    height: 28px;
    border: none;
`

const searchStyle = css`
    width: 14.59px;
    height: 19.83px;
    stroke: #FFFFFF;
    margin-top: 3px;
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
        <div css={a}>
            <form css={formStyle}>
                <input css={inputStyle} type="text"/>
                <button css={buttonStyle} onClick={() => {
                }}>
                    <SearchIcon css={searchStyle} onClick={() => {
                    }}/>
                </button>
            </form>
        </div>
    )
};