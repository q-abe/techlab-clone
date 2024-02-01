import type { Meta, StoryObj } from "@storybook/react";

import {　ArticleThumbnail　} from "./ArticleThumbnail";

const meta = {
    title: "SearchBar",
    component: ArticleThumbnail,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
    },
} satisfies Meta<typeof ArticleThumbnail>;

export default meta;

type Story = StoryObj<typeof meta>;
