import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "./Header";

const meta = {
    title: "SearchBar",
    component: Header,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
    },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;