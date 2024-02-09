import type { Meta, StoryObj } from "@storybook/react";
import { ProductSection } from ".";
import store from "../../../store";

const meta = {
  title: "Section/ProductSection",
  component: ProductSection,
  tags: ["autodocs"],
} satisfies Meta<typeof ProductSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NewProducts: Story = {
  args: {
    title: "New Products",
    products: store.products.new,
  },
};

export const PopularFinds: Story = {
  args: {
    title: "Popular Finds",
    products: store.products.popular,
  },
};
