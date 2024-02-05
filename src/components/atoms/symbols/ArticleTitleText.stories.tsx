import type {Meta, StoryObj} from "@storybook/react";

import {ArticleTitleText} from "./ArticleTitleText";

const meta = {
    title: "SearchBar",
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
    args: {
        label: "記事タイトルのテキスト"
    },
};
