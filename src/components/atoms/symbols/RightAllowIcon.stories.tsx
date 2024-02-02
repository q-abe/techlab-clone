import type {Meta, StoryObj} from "@storybook/react";

import {RightAllowIcon} from "./RightAllowIcon";

const meta = {
    title: "RightAllowIcon",
    component: RightAllowIcon,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof RightAllowIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const RightAllow: Story = {
    args: {}
};