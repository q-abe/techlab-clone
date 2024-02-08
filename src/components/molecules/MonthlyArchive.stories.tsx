import type { Meta, StoryObj } from "@storybook/react";
import ArticlesCount from "../../api/ArticlesCountMockDate.json";

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


type AccordionDataItem = {
    id: number;
    month: number;
    post_count: number;
};

export const accordion: Story = {
    args: {
        articlesCount: ArticlesCount,
    }
}
