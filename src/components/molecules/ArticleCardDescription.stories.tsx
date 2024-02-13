import type { Meta, StoryObj } from "@storybook/react";

import { ArticleCardDescription } from "./ArticleCardDescription";
import { string } from "prop-types";

const meta = {
    title: "molecules/ArticleCardDescription",
    component: ArticleCardDescription,
    parameters: {
        layout: "centered",
    },
    tags: [ "autodocs" ],
    argTypes: {},
} satisfies Meta<typeof ArticleCardDescription>;

export default meta;

type Story = StoryObj<typeof meta>;

export const card: Story = {
    args: {
        dateCreated: "2024.02.01[Tue]",
        title: "Shopify Flowでユーザーの購入総額によってユーザーにランクタグをつける方法。",
        tags: [ "Shopify", "Git", "パフォーマンス" ],
    }
}