import type { Meta, StoryObj } from "@storybook/react";

import { ArticleTitleText } from "../symbols/ArticleTitleText";

const meta = {
    title: "atoms/symbol/SearchBar",
    component: ArticleTitleText,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof ArticleTitleText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
    args: {},
};
