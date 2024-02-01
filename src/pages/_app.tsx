import { Global, css } from "@emotion/react";
import type { AppProps } from "next/app";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  const global = css`
    body {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif !important;
      color: white;
      background-color: red;
    }
    ,
    button {
    color: red;
    background-color: blue;
    }
  `;
  return <><Global styles={global} /><Component {...pageProps} /></>;
}
