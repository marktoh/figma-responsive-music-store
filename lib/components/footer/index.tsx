import { FC } from "react";
import { SectionPin } from "../section-pin";
import { H5, CaptionText } from "../typography";

const FooterSection = () => {
  return (
    <div className="flex flex-col items-center gap-[9px] pt-[46px]">
      <div className="relative text-center text-white">
        <H5>My Account</H5>
        <SectionPin
          offsetTop="-top-3"
          pinWidth="w-[58px]"
          borderColor="border-white"
        />
      </div>
      <div>
        <ul className="flex flex-col items-center gap-[9px] font-worksans text-[14px] leading-[1.3] text-white">
          <li>Overview</li>
          <li>Order History</li>
          <li>Wishlist</li>
          <li>Account Information</li>
        </ul>
      </div>
    </div>
  );
};
const SocialMedia = () => {
  return (
    <div className="flex gap-5">
      <img className="h-5 w-5" src="assets/social-media/youtube.svg" />
      <img className="h-5 w-5" src="assets/social-media/twitter.svg" />
      <img className="h-5 w-5" src="assets/social-media/instagram.svg" />
      <img className="h-5 w-5" src="assets/social-media/facebook.svg" />
    </div>
  );
};
const Footer: FC = () => {
  return (
    <footer className="flex flex-col items-center justify-between gap-8 bg-darkgrey">
      <div>
        <FooterSection />
      </div>
      <SocialMedia />
      <div className="flex w-screen flex-col items-center bg-black py-2 text-white">
        <CaptionText>©2021 Music Store</CaptionText>
      </div>
    </footer>
  );
};

export { Footer };
