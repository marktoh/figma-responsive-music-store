"use client";
import { FC, useRef } from "react";
import NextImage, { StaticImageData } from "next/image";
import { useInView } from "framer-motion";

interface PromoProps {
  image: StaticImageData;
  title: string;
  description: string;
  buttonText: string;
}
const Promo: FC<PromoProps> = ({ image, title, description, buttonText }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section
      className="h-[20vh]"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.2s",
      }}
    >
      <div className="relative mx-auto -mt-[75px] w-[calc(100%-48px)] animate-fadein rounded-[10px] lg:-mt-[100px]">
        <NextImage
          className="rounded-[10px] object-cover"
          src={image}
          alt=""
          fill
        />
        <div className="relative flex h-fit w-full flex-col items-center rounded-[10px] bg-red bg-opacity-90 px-[51px] py-[18px] lg:py-[50px]">
          <div className="text-balance px-[80px] text-center font-worksans text-2xl font-bold uppercase leading-[1.2] text-white lg:text-[46px]">
            {title}
          </div>
          <div className="mt-1 text-center font-worksans font-semibold leading-[1.5] text-white lg:text-2xl">
            {description}
          </div>
          <button className="mt-4 w-fit select-none rounded-2xl bg-orange px-[12px] py-[8px] font-worksans text-[12px] font-semibold uppercase leading-[1.3] text-white transition duration-200 hover:-translate-y-0.5 hover:shadow-lg lg:px-[16px] lg:text-sm">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export { Promo };
