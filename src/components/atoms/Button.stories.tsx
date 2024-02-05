import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
    title: "Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        // label: "PrimaryButton",
        label: "全記事一覧",
        onClick: () => {
        }
    },
};

export const Secondary: Story = {
    args: {
        label: "シリーズ連載一覧",
        onClick: () => {
        }
    },
};
