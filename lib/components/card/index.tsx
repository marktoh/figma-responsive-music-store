import NextImage, { StaticImageData } from "next/image";
import { FC } from "react";
import { H5, H6 } from "../typography";

type ProductChipType = {
  count: number;
  type: string;
};

interface ChipProps extends ProductChipType {}
const Chip: FC<ChipProps> = ({ count, type }) => {
  return (
    <div className="w-fit rounded-[20px] border border-lightgrey px-1.5 py-0.5 font-montserrat text-[12px] text-darkgrey">
      <b>{count}</b> {type} available
    </div>
  );
};

type ProductType = {
  image?: StaticImageData;
  title: string;
  description: string;
  price: string;
  chips: ProductChipType[];
};
interface CardProps extends ProductType {}
const Card: FC<CardProps> = ({ image, title, description, price, chips }) => {
  return (
    <div className="flex w-fit animate-fadein cursor-pointer flex-col rounded-[10px] shadow-lg duration-200 hover:-translate-y-2 hover:rounded-[15px] hover:border-4 hover:border-gray-200">
      <div className="relative h-[300px] w-[300px] rounded-t-[10px] bg-silver">
        {image && (
          <NextImage className="object-cover" src={image} alt="title" fill />
        )}
      </div>
      <div className="px-6 pb-6 pt-4">
        <div className="flex justify-between text-black">
          <H5>{title}</H5>
          <H6>${price}</H6>
        </div>
        <p className="h-[42px] font-worksans font-medium text-grey">
          {description}
        </p>
        <div className="flex gap-1.5">
          {chips?.map((chip, idx) => (
            <Chip key={idx} count={chip.count} type={chip.type} />
          ))}
        </div>
      </div>
    </div>
  );
};
export { type ProductType, Card };
