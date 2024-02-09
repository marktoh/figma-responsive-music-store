import type { Meta, StoryObj } from "@storybook/react";
import { Hero } from ".";
import store from "../../../store";

const meta = {
  title: "Section/Hero",
  component: Hero,
  tags: ["autodocs"],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

const { hero } = store;
export const Primary: Story = {
  args: { ...hero },
  parameters: {
    layout: "fullscreen",
  },
};
