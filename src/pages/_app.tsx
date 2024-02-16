import { Global, css } from "@emotion/react";
import type { AppProps } from "next/app";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
    const global = css`
        body {
            overflow: auto;
            background-color: rgb(255, 255, 255);
            color: rgb(102, 102, 102);
            font-family: 游ゴシック, "Yu Gothic", 游ゴシック体, YuGothic, sans-serif;
            font-size: 13px;
            min-height: 100vh;
            text-rendering: optimizeSpeed;
            line-height: 1.5;
            }

    ,
    button {
        }
    `;
    return <><Global styles={global}/><Component {...pageProps} /></>;
}
