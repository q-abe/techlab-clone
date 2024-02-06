import type { Meta, StoryObj } from "@storybook/react";


import { SearchBar } from "./SearchBar";

const meta = {
    title: "molecules/SearchBar",
    component: SearchBar,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof SearchBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Input: Story = {
    args: {
        onClick: () => {
        }
    },
    parameters: {
        backgrounds: {
            default: "dark"
        }
    }
}
