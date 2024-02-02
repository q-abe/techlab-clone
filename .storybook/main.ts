import type {StorybookConfig} from "@storybook/nextjs";
import * as path from 'path';

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
        "@storybook/addon-themes",
        "@storybook/themes"
    ],
    webpackFinal: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@/': path.resolve(__dirname, '../src'),
        }
        return config;
    },
    framework: {
        name: "@storybook/nextjs",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
};
export default config;
