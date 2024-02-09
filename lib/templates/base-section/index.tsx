import { FC, ReactNode } from "react";
import { H4 } from "../../components/typography";
import { SectionPin } from "../../components/section-pin";

interface BaseSectionProps {
  title: string;
  children: ReactNode;
}
const BaseSection: FC<BaseSectionProps> = ({ title, children }) => {
  return (
    <section className="flex flex-col items-center gap-8 px-6 py-12">
      <div className="relative text-center text-darkgrey">
        <H4>{title}</H4>
        <SectionPin pinWidth="w-[80px]" borderColor="border-red" />
      </div>
      <div className="flex flex-col items-center gap-4">{children}</div>
    </section>
  );
};

export { BaseSection };
