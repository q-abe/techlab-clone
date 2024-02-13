import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "./Header";
import TagMockDate from "../../api/TagMockDate.json";

const meta = {
    title: "organisms/Header",
    component: Header,
    parameters: {
        layout: "centered",
    },
    tags: [ "autodocs" ],
    argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const header: Story = {
    args: {
        allTags: TagMockDate
    }
}