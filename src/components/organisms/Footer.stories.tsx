import type { Meta, StoryObj } from "@storybook/react";

import { Footer } from "./Footer";

const meta = {
    title: "SearchBar",
    component: Footer,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
    },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;