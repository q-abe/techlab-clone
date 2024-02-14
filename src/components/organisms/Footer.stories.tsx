import type { Meta, StoryObj } from "@storybook/react";

import { Footer } from "./Footer";
import ArticlesCount from "@/api/ArticlesCountMockData.json";

const meta = {
    title: "organisms/Footer",
    component: Footer,
    parameters: {
        layout: "centered",
    },
    tags: [ "autodocs" ],
    argTypes: {},
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const monthlyArchive: Story = {
    args: {}
}