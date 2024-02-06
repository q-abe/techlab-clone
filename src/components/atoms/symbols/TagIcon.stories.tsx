import type { Meta, StoryObj } from "@storybook/react";

import { TagIcon } from "./TagIcon";

const meta = {
    title: "atoms/symbol/TagIcon",
    component: TagIcon,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof TagIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Tag: Story = {};
