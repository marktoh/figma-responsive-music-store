import type { Meta, StoryObj } from "@storybook/react";
import { ArticleSection } from ".";
import store from "../../../store";

const meta = {
  title: "Section/ArticleSection",
  component: ArticleSection,
  tags: ["autodocs"],
} satisfies Meta<typeof ArticleSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NewProducts: Story = {
  args: {
    title: "New Products",
    articles: store.articles,
  },
};
