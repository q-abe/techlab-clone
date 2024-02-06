import type { Meta, StoryObj } from "@storybook/react";

import { ArrowIcon } from "../symbols/ArrowIcon";

const meta = {
    title: "atoms/symbol/ArrowIcon",
    component: ArrowIcon,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof ArrowIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const RightArrow: Story = {
    args: {
        direction: "right",
    }
};

export const leftArrow: Story = {
    args: {
        direction: "left",
    }
};

export const upwardArrow: Story = {
    args: {
        direction: "upward",
    }
};

export const downwardArrow: Story = {
    args: {
        direction: "downward",
    }
};

export const customArrow: Story = {
    args: {
        direction: "custom",
        rotateNum: 60,
    }
};