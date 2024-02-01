import type { Meta, StoryObj } from "@storybook/react";

import { ArticleCard } from "./ArticleCard";

const meta = {
    title: "SearchBar",
    component: ArticleCard,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
    },
} satisfies Meta<typeof ArticleCard>;

export default meta;

type Story = StoryObj<typeof meta>;