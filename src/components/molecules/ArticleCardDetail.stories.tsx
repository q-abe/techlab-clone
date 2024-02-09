import type { Meta, StoryObj } from "@storybook/react";

import { ArticleCardDetail } from "./ArticleCardDetail";
import { string } from "prop-types";

const meta = {
    title: "molecules/ArticleCardDetail",
    component: ArticleCardDetail,
    parameters: {
        layout: "centered",
    },
    tags: [ "autodocs" ],
    argTypes: {},
} satisfies Meta<typeof ArticleCardDetail>;

export default meta;

type Story = StoryObj<typeof meta>;

export const card: Story = {
    args: {
        dateCreated: "2024.02.01[Tue]",
        title: "Shopify Flowでユーザーの購入総額によってユーザーにランクタグをつける方法。",
        tag: "Shopify"
    }
}