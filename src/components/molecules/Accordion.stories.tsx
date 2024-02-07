import type { Meta, StoryObj } from "@storybook/react";
import ArticlesCount from "../../api/ArticlesCountMockDate.json";

import { Accordion } from "./Accordion";

const meta = {
    title: "Accordion",
    component: Accordion,
    parameters: {
        layout: "centered",
    },
    tags: [ "autodocs" ],
    argTypes: {},
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;


type AccordionDataItem = {
    id: number;
    year: number;
    month: number;
    post_count: number;
};

export const accordion: Story = {
    args: {
        data: ArticlesCount.map((item: any) => ({
            id: item.id,
            year: item.year,
            month: item.month,
            post_count: item.count
        })) as AccordionDataItem[]
    }
}
