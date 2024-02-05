import type { Meta, StoryObj } from "@storybook/react";

import {　TagIcon　} from "./TagIcon";

const meta = {
    title: "SearchBar",
    component: TagIcon,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
    },
} satisfies Meta<typeof TagIcon>;

export default meta;

type Story = StoryObj<typeof meta>;