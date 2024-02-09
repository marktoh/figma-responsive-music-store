import type { Meta, StoryObj } from "@storybook/react";
import { ArticleCard } from ".";
import store from "../../../store";

const meta = {
  title: "Components/ArticleCard",
  component: ArticleCard,
  tags: ["autodocs"],
} satisfies Meta<typeof ArticleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleProduct = store.articles[0];
export const Primary: Story = {
  args: { ...sampleProduct, style: "one" },
};

export const Secondary: Story = {
  args: { ...sampleProduct, style: "two" },
};
