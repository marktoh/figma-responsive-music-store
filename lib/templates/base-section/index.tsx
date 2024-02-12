"use client";
import { FC, ReactNode, useRef } from "react";
import { H4 } from "../../components/typography";
import { SectionPin } from "../../components/section-pin";
import { useInView } from "framer-motion";

interface BaseSectionProps {
  title: string;
  children: ReactNode;
}
const BaseSection: FC<BaseSectionProps> = ({ title, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section
      className="flex flex-col items-center gap-8 px-6 py-12"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
      }}
    >
      <div className="relative text-center text-darkgrey">
        <H4>{title}</H4>
        <SectionPin pinWidth="w-[80px]" borderColor="border-red" />
      </div>
      <div className="flex flex-col items-center gap-4 md:grid md:grid-cols-2 md:gap-8 xl:flex xl:flex-row">
        {children}
      </div>
    </section>
  );
};

export { BaseSection };
