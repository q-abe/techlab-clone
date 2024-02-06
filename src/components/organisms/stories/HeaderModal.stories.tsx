import type { Meta, StoryObj } from "@storybook/react";

import { HeaderModal } from "../HeaderModal";

const meta = {
    title: "SearchBar",
    component: HeaderModal,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof HeaderModal>;

export default meta;

type Story = StoryObj<typeof meta>;