import type { Meta, StoryObj } from "@storybook/react";
import ArticlesCount from "../../api/ArticlesCountMockData.json";

import { Accordion } from "./Accordion";


const meta = {
    title: "SingleAccordion",
    component: Accordion,
    parameters: {
        layout: "centered",
    },
    tags: [ "autodocs" ],
    argTypes: {},
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const singleAccordion: Story = {
    args: {
        articlesCount: [ ...ArticlesCount ][0],
    }
}
