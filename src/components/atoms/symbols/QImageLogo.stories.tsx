import type { Meta, StoryObj } from "@storybook/react";

import { QImageLogo } from "./QImageLogo";

const meta = {
    title: "atoms/symbol/QImageLogo",
    component: QImageLogo,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof QImageLogo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const QLogo: Story = {
    args: {},
}
