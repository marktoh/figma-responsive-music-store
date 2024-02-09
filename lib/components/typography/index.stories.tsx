import { FC, ReactNode } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { List } from "../list";

import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  BodyText,
  CaptionText,
  FinePrintText,
} from ".";

const meta = {
  title: "Foundation/Typography",
  component: List,
  tags: ["autodocs"],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

const text =
  "Shujaa is a mobile platform that enables you to connect with your family and friends anywhere at anytime.";

const data = [
  {
    label: "H1",
    component: H1,
  },
  {
    label: "H2",
    component: H2,
  },
  {
    label: "H3",
    component: H3,
  },
  {
    label: "H4",
    component: H4,
  },
  {
    label: "H5",
    component: H5,
  },
  {
    label: "H6",
    component: H6,
  },
  {
    label: "BodyText",
    component: BodyText,
  },
  {
    label: "CaptionText",
    component: CaptionText,
  },
  {
    label: "FinePrintText",
    component: FinePrintText,
  },
];

interface GridItemProps {
  label: string;
  children: ReactNode;
}
const GridItem: FC<GridItemProps> = ({ label, children }) => {
  return (
    <div className="grid grid-cols-[8rem_1fr]">
      <div className="font-bold">{label}</div>
      <div>{children}</div>
    </div>
  );
};

export const Primary: Story = {
  args: {
    children: text,
  },
  render: (args) => (
    <List {...args}>
      <div className="flex flex-col gap-8">
        {data?.map((e, idx) => (
          <GridItem key={idx} label={e.label}>
            <e.component>{text}</e.component>
          </GridItem>
        ))}
      </div>
    </List>
  ),
};
