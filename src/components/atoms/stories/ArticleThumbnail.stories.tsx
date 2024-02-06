import type { Meta, StoryObj } from "@storybook/react";

import { ArticleThumbnail } from "../symbols/ArticleThumbnail";

const meta = {
    title: "atoms/symbol/ArticleThumbnail",
    component: ArticleThumbnail,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof ArticleThumbnail>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ThumbnailPicture: Story = {
    args: {
        label: "サムネイル画像"
    },
};
