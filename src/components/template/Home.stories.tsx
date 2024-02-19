import type { Meta, StoryObj } from "@storybook/react";
import ArticlesCount from "../../api/ArticlesCountMockData.json";

import { Home } from "./Home";

const meta = {
    title: "template/Home",
    component: Home,
    parameters: {
        layout: "centered"
    },
    tags: [ "autodocs" ],
    argTypes: {}
} satisfies Meta<typeof Home>;

export default meta;

type Story = StoryObj<typeof meta>;

export const home: Story = {
    args: {
        articlesCount: ArticlesCount
    }
}
