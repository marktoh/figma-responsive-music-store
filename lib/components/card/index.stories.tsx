import type { Meta, StoryObj } from "@storybook/react";
import { Card } from ".";
import store from "../../../store";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleProduct = store.products.new[0];
export const Primary: Story = {
  args: { ...sampleProduct },
};
