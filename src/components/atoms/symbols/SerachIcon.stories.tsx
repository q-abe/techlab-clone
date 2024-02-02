import type { Meta, StoryObj } from "@storybook/react";

import { SerachIcon } from "./SerachIcon";

const meta = {
    title: "SerachIcon",
    component: SerachIcon,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof SerachIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Serach: Story = {}