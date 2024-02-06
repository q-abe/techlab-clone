import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "./Accordion";

const meta = {
    title: "Accordion",
    component: Accordion,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const accordion: Story = {}
