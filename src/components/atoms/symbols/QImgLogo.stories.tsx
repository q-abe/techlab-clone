import type { Meta, StoryObj } from "@storybook/react";

import { QImgLogo } from "./QImgLogo";

const meta = {
    title: "atoms/symbol/QImgLogo",
    component: QImgLogo,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof QImgLogo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const QLogo: Story = {
    args: {},
}
