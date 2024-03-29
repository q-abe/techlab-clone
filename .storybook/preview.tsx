import React from "react";

import { Global as EmotionGlobal, css } from "@emotion/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

const GlobalStyles = () => (
    //TODO；要修正(デフォルトスタイルにフォントが負けていて効いていない)
  <EmotionGlobal
    styles={css`
        body {
            font-family: "游ゴシック","Yu Gothic","游ゴシック体",YuGothic,sans-serif;
        }
    `}
  />
);

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
  }),
];
