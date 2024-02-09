import type { Meta, StoryObj } from "@storybook/react";

import { ArticleCard } from "./ArticleCard";
import ArticleContentsList from "../../api/ArticlesMockDate.json";

const meta = {
    title: "organisms/ArticleCard",
    component: ArticleCard,
    parameters: {
        layout: "centered",
    },
    tags: [ "autodocs" ],
    argTypes: {},
} satisfies Meta<typeof ArticleCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const card: Story = {
    args: {
        articleEntity: ArticleContentsList
    }
}