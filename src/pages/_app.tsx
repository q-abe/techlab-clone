import type { AppProps } from "next/app";
import React from "react";
//書かなくて良くなるtsconfig

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
