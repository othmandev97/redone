import React, { useState } from "react";
import Logo from "../assets/logo/RedOnelogopng.png";
// icons
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

export default function Header() {
  const [showResults, setShowResults] = React.useState(false);
  // const onClick = () => setShowResults(!showResults);

  return (
    <>
      <nav className="header__wrapper">
        <div className="header__wrapper--main">
          {/* <button
            className="header__wrapper--main--menu-icon"
            onClick={onClick}
          > */}
            {/* <IoMdArrowDown /> 
            <IoMdMenu />
          </button>*/}
          <div className="header__wrapper--logo">
            <a href="/">
              <img src={Logo} alt="Red One logo" />
            </a>
          </div>
          <div className="header__wrapper--socialicons">
            <div className="header__wrapper--socialicons--item">
              <a target="_blank"  href="https://fr-fr.facebook.com/RedOneOfficial">
                <IoLogoFacebook />
              </a>{" "}
            </div>
            <div className="header__wrapper--socialicons--item">
              <a target="_blank"  href="https://www.instagram.com/redone/">
                <IoLogoInstagram />
              </a>
            </div>
            <div className="header__wrapper--socialicons--item">
              <a target="_blank"  href="https://twitter.com/redone_official">
                <IoLogoTwitter />
              </a>
            </div>
            <div className="header__wrapper--socialicons--item">
              <a target="_blank" href="https://www.youtube.com/channel/UCMwDdAvIP0MVuqENDpME0xg">
                <IoLogoYoutube />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
