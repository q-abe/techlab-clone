import type { Meta, StoryObj } from "@storybook/react";

import { SearchBar } from "./SearchBar";

const meta = {
    title: "SearchBar",
    component: SearchBar,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
    },
} satisfies Meta<typeof SearchBar>;

export default meta;

type Story = StoryObj<typeof meta>;
