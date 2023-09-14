import React from "react";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center gap-8 p-[70px]">
      <div className="flex gap-8">
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={twitter} alt="twitter" />
        <img src={youtube} alt="youtube" />
      </div>
      <div className="flex gap-8">
        <p className="text-sm font-bold">Conditions of Use</p>
        <p className="text-sm font-bold">Privacy & Policy</p>
        <p className="text-sm font-bold">Press Room</p>
      </div>
      <p className="text-sm font-bold text-gray-400">
        2023 MovieBox by Gogo Ibimina Felix
      </p>
    </footer>
  );
};

export default Footer;
