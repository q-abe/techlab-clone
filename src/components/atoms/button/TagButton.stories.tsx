import type { Meta, StoryObj } from "@storybook/react";

import { TagButton } from "./TagButton";

const meta = {
    title: "atoms/TagButton",
    component: TagButton,
    parameters: {
        layout: "centered",
    },
    tags: [ "autodocs" ],
    argTypes: {},
} satisfies Meta<typeof TagButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const tagButton: Story = {
    args: {
        tagUrl: "",
        label: "パフォーマンス",
    },
}

