import type {Meta, StoryObj} from "@storybook/react";

import {QTextLogo} from "./QTextLogo";

const meta = {
    title: "QTextLogo",
    component: QTextLogo,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: {control: 'color'}
    },
} satisfies Meta<typeof QTextLogo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ThumbnailPicture: Story = {
    args: {
        backgroundColor: "white"
    },
};
