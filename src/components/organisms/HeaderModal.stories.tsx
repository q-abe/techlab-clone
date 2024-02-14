import type { Meta, StoryObj } from "@storybook/react";

import { HeaderModal } from "./HeaderModal";
import TagMockDate from "../../api/TagMockData.json"

const meta = {
    title: "organisms/HeaderModal",
    component: HeaderModal,
    parameters: {
        layout: "centered",
    },
    tags: [ "autodocs" ],
    argTypes: {},
} satisfies Meta<typeof HeaderModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const headerModal: Story = {
    args: {
        isOpen: true,
        handleClick: () => {
        },
        texts: TagMockDate
    }
}