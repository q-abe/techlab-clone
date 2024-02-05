import type { Meta, StoryObj } from "@storybook/react";

import { CalendarIcon } from "./CalendarIcon";

const meta = {
    title: "CalendarIcon",
    component: CalendarIcon,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof CalendarIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const calendar: Story = {
    args: {}
}