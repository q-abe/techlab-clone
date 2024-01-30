import React from "react";

import { Global as EmotionGlobal, css } from "@emotion/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

const GlobalStyles = () => (
  <EmotionGlobal
    styles={css`
      body {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      }
    `}
  />
);

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
  }),
];
