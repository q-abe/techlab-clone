import type { Meta, StoryObj } from "@storybook/react";
import ArticlesCount from "../../api/ArticlesCountMockData.json";

import { MonthlyArchive } from "./MonthlyArchive";

const meta = {
    title: "Accordion",
    component: MonthlyArchive,
    parameters: {
        layout: "centered",
    },
    tags: [ "autodocs" ],
    argTypes: {},
} satisfies Meta<typeof MonthlyArchive>;

export default meta;

type Story = StoryObj<typeof meta>;

export const accordion: Story = {
    args: {
        articlesCount: ArticlesCount,
    }
}
