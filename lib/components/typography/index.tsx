import { FC, ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
}
const H1: FC<TypographyProps> = ({ children }) => {
  return (
    <h1 className="font-worksans text-4xl font-bold leading-[1.2]">
      {children}
    </h1>
  );
};
const H2: FC<TypographyProps> = ({ children }) => {
  return <h2 className="text-[32px] font-bold leading-[1.2]">{children}</h2>;
};
const H3: FC<TypographyProps> = ({ children }) => {
  return <h3 className="text-[28px] font-bold leading-[1.2]">{children}</h3>;
};
const H4: FC<TypographyProps> = ({ children }) => {
  return <h4 className="text-2xl font-bold leading-[1.3]">{children}</h4>;
};
const H5: FC<TypographyProps> = ({ children }) => {
  return (
    <h5 className="text-[20px] font-semibold leading-[1.3]">{children}</h5>
  );
};
const H6: FC<TypographyProps> = ({ children }) => {
  return (
    <h6 className="text-[18px] font-semibold leading-[1.3]">{children}</h6>
  );
};
const BodyText: FC<TypographyProps> = ({ children }) => {
  return <p className="font-montserrat text-base leading-[1.5]">{children}</p>;
};
const CaptionText: FC<TypographyProps> = ({ children }) => {
  return <p className="text-[12.8px] leading-[1.4]">{children}</p>;
};
const FinePrintText: FC<TypographyProps> = ({ children }) => {
  return <p className="text-[10.24px] leading-[1.4]">{children}</p>;
};

export { H1, H2, H3, H4, H5, H6, BodyText, CaptionText, FinePrintText };
