import { FC } from "react";

interface SectionPinProps {
  offsetTop?: string;
  pinWidth?: string;
  borderColor?: string;
}
const SectionPin: FC<SectionPinProps> = ({
  offsetTop = "-top-1",
  pinWidth = "w-[80px]",
  borderColor = "border-red",
}) => {
  let baseClassName = "absolute left-[25%] border-2";
  const className = [baseClassName, offsetTop, pinWidth, borderColor].join(" ");
  return <div className={className} />;
};

export { SectionPin };
