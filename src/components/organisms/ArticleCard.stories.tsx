import type { Meta, StoryObj } from "@storybook/react";

import { ArticleCard } from "./ArticleCard";

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
        id: 1,
        date: "2024-02-03[Sat]",
        tags: [ "Git", "React", "パフォーマンス" ],
        title: "Reactチュートリアル",

    }
}