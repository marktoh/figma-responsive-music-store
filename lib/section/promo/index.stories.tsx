import type { Meta, StoryObj } from "@storybook/react";
import { Promo } from ".";
import store from "../../../store";

const meta = {
  title: "Section/Promo",
  component: Promo,
  tags: ["autodocs"],
} satisfies Meta<typeof Promo>;

export default meta;
type Story = StoryObj<typeof meta>;

const { promo } = store;
export const Primary: Story = {
  args: { ...promo },
  parameters: {
    layout: "fullscreen",
  },
  decorators: (Story) => {
    return (
      <div className="h-screen w-full bg-gray-900">
        <div className="h-[200px]" />
        <Story />
      </div>
    );
  },
};
