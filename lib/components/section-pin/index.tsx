import { FC } from "react";

interface SectionPinProps {
  left?: string;
  offsetTop?: string;
  pinWidth?: string;
  borderColor?: string;
}
const SectionPin: FC<SectionPinProps> = ({
  left = "left-[25%]",
  offsetTop = "-top-1",
  pinWidth = "w-[80px]",
  borderColor = "border-red",
}) => {
  let baseClassName = "absolute border-2";
  const className = [
    baseClassName,
    left,
    offsetTop,
    pinWidth,
    borderColor,
  ].join(" ");
  return <div className={className} />;
};

export { SectionPin };
