import type { Meta, StoryObj } from "@storybook/react";

import { SearchIcon } from "./SearchIcon";

const meta = {
    title: "SearchIcon",
    component: SearchIcon,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof SearchIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Search: Story = {}