import React, { useState } from "react";
import Logo from "../assets/logo/RedOnelogopng.png";
//sidebar content
import Sidebar from "./Sidebar";
// icons
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import { IoMdArrowDown } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { IoIosHeadset } from "react-icons/io";
import { IoIosMail } from "react-icons/io";




export default function Header() {
  const [openSidebar, setOpenSidebar ] = useState(false);


  function OpenCloseSidebar(){
    setOpenSidebar(!openSidebar);
  }
  return (
    <>
      <div className="footer__wrapper">
        <div className="footer__wrapper--email">
          <IoIosMail className="footer__wrapper--email--svgIcon" />
          <span  className="footer__wrapper--email--text"><a href="mailto:contact@redone.com">Email : contact@redone.com</a> </span>
        </div>
        <div className="footer__wrapper--numbers">
          <div className="footer__wrapper--number">US: +1 (888) 256-8312</div>
          <div className="footer__wrapper--number">EU: 1-888-452-1505</div>
          <div className="footer__wrapper--number">DUBAI: +971 12-345-6789</div>
        </div>

        <label className="footer__wrapper--music" onClick={OpenCloseSidebar}>
          <IoIosHeadset className="footer__wrapper--music--svgIcon"  onClick={OpenCloseSidebar}/>
          <label className="footer__wrapper--music--text">Listen</label>
        </label>
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} OpenCloseSidebar={OpenCloseSidebar} />

        {/* <button onClick={OpenCloseSidebar}>
          <label className="footer__wrapper--music" >
            <IoIosHeadset className="footer__wrapper--music--svgIcon"/>
            <label className="footer__wrapper--music--text" >Listen</label>
            <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
          </label>
        </button> */}
      </div>
    </>
  );
}
