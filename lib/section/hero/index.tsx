import { FC } from "react";
import NextImage, { StaticImageData } from "next/image";
import { Header } from "../../components/header";

interface HeroProps {
  image: StaticImageData;
  title: string;
}
const Hero: FC<HeroProps> = ({ image, title }) => {
  return (
    <div className="relative h-screen w-screen">
      <Header />
      <NextImage
        className="animate-fadein object-cover object-[70%]"
        src={image}
        alt=""
        fill
      />
      <div className="absolute left-[50%] top-[30%] -translate-x-1/2 -translate-y-1/2 transform">
        <p className="z-10 text-balance p-[12%] text-center font-worksans text-[32px] font-bold leading-[1.2] text-white lg:text-[56px]">
          {title}
        </p>
      </div>
    </div>
  );
};

export { Hero };
