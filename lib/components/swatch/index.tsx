import { FC } from "react";
interface SwatchProps {
  background: string;
}
const Swatch: FC<SwatchProps> = ({ background }) => {
  return (
    <div className="h-12 w-12 rounded-full border" style={{ background }} />
  );
};

export { Swatch };
