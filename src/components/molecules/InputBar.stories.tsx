import type { Meta, StoryObj } from "@storybook/react";


import { InputBar } from "./InputBar";

const meta = {
    title: "InputBar",
    component: InputBar,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof InputBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Input: Story = {
    args: {
        onClick: () => {
        }
    },
}
