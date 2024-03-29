import { FC } from "react";
import NextImage from "next/image";
import Brand from "../../../public/assets/hero/brand.png";
import Menu from "../../../public/assets/hero/menu.png";

const Header: FC = () => {
  return (
    <header className="absolute z-10 flex w-screen justify-between px-6 py-[58px]">
      <NextImage
        className="cursor-pointer hover:opacity-75"
        src={Brand}
        alt="Brand"
        width={153}
        height={24}
      />
      <NextImage
        className="cursor-pointer hover:opacity-75"
        src={Menu}
        alt="Menu"
        width={24}
        height={24}
      />
    </header>
  );
};

export { Header };
