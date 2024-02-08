import type { Meta, StoryObj } from "@storybook/react";

import { ArticleCardThumbnail } from "./ArticleCardThumbnail";
import ArticlesCount from "@/api/ArticlesCountMockDate.json";

const meta = {
    title: "organisms/ArticleCardThumbnail",
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
        ArticleUrl: "URLが入ります。",
        index: 0,
        articleTitle: "記事タイトルが入ります。",
    }
}