import React from "react";
// icons
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";

export const Newsletter = () => {
  return (
    <>
      <section className="newsletter__wrapper">
        <div className="newsletter__wrapper--content">
          <h3 className="newsletter__wrapper--content--header">stay tuned</h3>
          <p className="newsletter__wrapper--content--paragraph">
            subscribe to the newsletter and don't miss any updates related to RedOne's new <br /> 
            music, productions, FIFA related events and META presence.
          </p>

          <div className="newsletter__wrapper--content--terms">
            <input type="checkbox" name="termsCheck" id="termsCheck" required/>
            <label htmlFor="termsCheck">
              I read and accept the <a href="#">privacy policy</a>
            </label>
          </div>

          <div className="newsletter__wrapper--content--form">
            <form action="">
              <input type="email" id="email" name="email" placeholder="yourname@email.com"/>
              <button>Subscribe to newsletter</button>
            </form>
          </div>

          <div className="newsletter__wrapper--content--social">
            <div className="newsletter__wrapper--content--social--item">
              <a href="#">
                <IoLogoFacebook />
              </a>{" "}
            </div>
            <div className="newsletter__wrapper--content--social--item">
              <a href="#">
                <IoLogoInstagram />
              </a>
            </div>
            <div className="newsletter__wrapper--content--social--item">
              <a href="#">
                <IoLogoTwitter />
              </a>
            </div>
            <div className="newsletter__wrapper--content--social--item">
              <a href="#">
                <IoLogoYoutube />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
