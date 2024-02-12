import { FC } from "react";
import NextImage from "next/image";
import { SectionPin } from "../section-pin";
import { H5, CaptionText } from "../typography";
import Brand from "../../../public/assets/hero/brand.png";

type FooterSection = {
  title: string;
  links: string[];
  mode?: "mobile" | "desktop";
};
interface FooterSectionProps extends FooterSection {}
const FooterSection: FC<FooterSectionProps> = ({
  title,
  links,
  mode = "desktop",
}) => {
  return (
    <div className="flex flex-col items-center gap-[9px] pt-[46px] md:items-start">
      <div className="relative text-center text-white">
        <H5>{title}</H5>
        <SectionPin
          left={mode === "mobile" ? "left-[25%]" : "left-[0%"}
          offsetTop="-top-3"
          pinWidth="w-[58px]"
          borderColor="border-white"
        />
      </div>
      <div>
        <ul className="flex flex-col items-center gap-[9px] font-worksans text-[14px] leading-[1.3] text-white md:items-start">
          {links?.map((link, idx) => (
            <li key={idx} className="cursor-pointer hover:underline">
              {link}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
const SocialMedia = () => {
  return (
    <div className="flex gap-5">
      <img
        className="h-5 w-5 cursor-pointer hover:opacity-75"
        src="assets/social-media/youtube.svg"
      />
      <img
        className="h-5 w-5 cursor-pointer hover:opacity-75"
        src="assets/social-media/twitter.svg"
      />
      <img
        className="h-5 w-5 cursor-pointer hover:opacity-75"
        src="assets/social-media/instagram.svg"
      />
      <img
        className="h-5 w-5 cursor-pointer hover:opacity-75"
        src="assets/social-media/facebook.svg"
      />
    </div>
  );
};

const MobileView: FC<FooterProps> = ({ sections }) => {
  return (
    <footer className="md:hidden">
      <div className="flex flex-col items-center justify-between gap-8 bg-darkgrey">
        <div className="flex flex-row">
          <section>
            <FooterSection {...sections?.[0]} mode="mobile" />
          </section>
        </div>
        <SocialMedia />
        <div className="flex w-screen flex-col items-center bg-black py-2 text-white">
          <CaptionText>©2021 Music Store</CaptionText>
        </div>
      </div>
    </footer>
  );
};

const DesktopView: FC<FooterProps> = ({ sections }) => {
  return (
    <footer className="hidden bg-darkgrey md:block">
      <div className="flex flex-row justify-between pb-[52px] pt-[81px] md:px-16 lg:px-[100px]">
        <div className="flex flex-row gap-12">
          {sections?.map((section, idx) => (
            <section key={idx}>
              <FooterSection {...section} />
            </section>
          ))}
        </div>
        <div className="flex flex-col gap-[27px] self-end">
          <NextImage
            className="cursor-pointer hover:opacity-75"
            src={Brand}
            alt="Brand"
            width={255}
            height={40}
          />
          <SocialMedia />
        </div>
      </div>
      <div className="flex w-screen flex-col items-center bg-black py-2 text-white md:items-start md:px-16 lg:px-[100px]">
        <CaptionText>©2021 Music Store</CaptionText>
      </div>
    </footer>
  );
};
interface FooterProps {
  sections: FooterSection[];
}
const Footer: FC<FooterProps> = ({ sections }) => {
  return (
    <>
      <MobileView sections={sections} />
      <DesktopView sections={sections} />
    </>
  );
};

export { Footer };
