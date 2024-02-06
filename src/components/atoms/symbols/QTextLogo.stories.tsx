import type { Meta, StoryObj } from "@storybook/react";

import { QTextLogo } from "./QTextLogo";

const meta = {
    title: "atoms/symbol/QTextLogo",
    component: QTextLogo,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof QTextLogo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ThumbnailPicture: Story = {
    args: {},
};
