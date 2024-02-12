import { FC } from "react";
import NextImage, { StaticImageData } from "next/image";
import { H4, H6 } from "../typography";

type ArticleType = {
  image: StaticImageData;
  title: string;
  description: string;
};
interface ArticleCardProps extends ArticleType {
  style?: "one" | "two";
}
const ArticleCard: FC<ArticleCardProps> = ({
  image,
  title,
  description,
  style = "one",
}) => {
  const infoClassName = "flex flex-col gap-1 p-8 rounded-b-[10px]";
  const bgClassName = style === "one" ? "bg-lightgrey" : "bg-black";
  const className = [infoClassName, bgClassName].join(" ");
  return (
    <div className="flex w-fit animate-fadein cursor-pointer flex-col transition hover:opacity-75">
      <div className="relative h-[300px] w-[300px] rounded-t-[10px] bg-silver">
        {image && (
          <NextImage
            className="rounded-t-[10px] object-cover"
            src={image}
            alt="title"
            fill
          />
        )}
      </div>
      <div className={className}>
        <div className={style === "one" ? "text-black" : "text-white"}>
          <H4>{title}</H4>
        </div>
        <div className={style === "one" ? "text-grey" : "text-[#C4C4C4]"}>
          <H6>{description}</H6>
        </div>
      </div>
    </div>
  );
};
export { type ArticleType, ArticleCard };
