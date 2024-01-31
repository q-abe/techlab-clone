import React from "react";

import '../src/assets/reset.css';
import { Global as EmotionGlobal, css } from "@emotion/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

const GlobalStyles = () => (
  <EmotionGlobal
    styles={css`
        body {
            font-family: "游ゴシック","Yu Gothic","游ゴシック体",YuGothic,sans-serif !important;
        }
    `}
  />
);

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
  }),
];
