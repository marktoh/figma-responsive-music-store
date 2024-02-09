import { FC } from "react";
import NextImage, { StaticImageData } from "next/image";

interface PromoProps {
  image: StaticImageData;
  title: string;
  description: string;
  buttonText: string;
}
const Promo: FC<PromoProps> = ({ image, title, description, buttonText }) => {
  return (
    <section className="h-[125px]">
      <div className="relative mx-auto -mt-[75px] w-[calc(100%-48px)] rounded-[10px]">
        <NextImage
          className="rounded-[10px] object-cover"
          src={image}
          alt=""
          fill
        />
        <div className="relative flex h-fit w-full flex-col items-center rounded-[10px] bg-red bg-opacity-90 px-[51px] py-[18px]">
          <div className="text-balance px-[80px] text-center font-worksans text-2xl font-bold uppercase leading-[1.2] text-white">
            {title}
          </div>
          <div className="mt-1 text-center font-worksans font-semibold leading-[1.5] text-white">
            {description}
          </div>
          <button className="mt-4 w-fit rounded-2xl bg-orange px-[12px] py-[8px] font-worksans text-[12px] font-semibold uppercase leading-[1.3] text-white">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export { Promo };