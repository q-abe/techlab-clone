import type { Meta, StoryObj } from "@storybook/react";

import { DateText } from "./DateText";

const meta = {
    title: "atoms/DateText",
    component: DateText,
    parameters: {
        layout: "centered"
    },
    tags: [ "autodocs" ],
    argTypes: {}
} satisfies Meta<typeof DateText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const dateText: Story = {
    args: {
        dateText: "2024.03.01[Fri]"
    }
};
