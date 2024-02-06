import type { Meta, StoryObj } from "@storybook/react";

import { CloseIcon } from "../symbols/CloseIcon";

const meta = {
    title: "atoms/symbol/CloseIcon",
    component: CloseIcon,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof CloseIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Cross: Story = {
    args: {}
}