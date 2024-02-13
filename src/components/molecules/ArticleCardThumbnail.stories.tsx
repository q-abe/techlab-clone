import type { Meta, StoryObj } from "@storybook/react";

import { ArticleCardThumbnail } from "./ArticleCardThumbnail";

const meta = {
    title: "molecules/ArticleCardThumbnail",
    component: ArticleCardThumbnail,
    parameters: {
        layout: "centered",
    },
    tags: [ "autodocs" ],
    argTypes: {},
} satisfies Meta<typeof ArticleCardThumbnail>;

export default meta;

type Story = StoryObj<typeof meta>;

export const card: Story = {
    args: {
        index: 0,
        articleTitle: "記事タイトルが入ります。",
    }
}