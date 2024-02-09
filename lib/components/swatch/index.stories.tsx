import { FC, ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { List } from "../list";
import { Swatch } from ".";

const meta = {
  title: "Foundation/Colors",
  component: List,
  tags: ["autodocs"],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = [
  {
    label: "1",
    color: "#AB0433",
    description: "red",
  },
  {
    label: "2",
    color: "#FF753A",
    description: "orange",
  },
  {
    label: "3",
    color: "#252525",
    description: "black",
  },
  {
    label: "4",
    color: "#505050",
    description: "dark-grey",
  },
  {
    label: "5",
    color: "#767676",
    description: "grey",
  },
  {
    label: "6",
    color: "#EAEAEA",
    description: "light-grey",
  },
  {
    label: "7",
    color: "#FFFFFF",
    description: "white",
  },
];

export const Primary: Story = {
  args: {
    children: "",
  },
  render: (args) => (
    <List {...args}>
      <div className="flex gap-2">
        {data?.map((e) => (
          <div className="flex flex-col items-center gap-2">
            <Swatch background={e.color} />
            <div className="text-[8px] text-slate-400">{e.label}</div>
          </div>
        ))}
      </div>
    </List>
  ),
};
