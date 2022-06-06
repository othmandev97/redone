import React from "react";
// icons
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";

export const Newsletter = () => {



  const hundleSubmit = (e) => {
    
    e.preventDefault();
    emailjs.sendForm(`gmail`, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
    .then((result) => {
    alert("Message Sent, We will get back to you shortly", result.text);
    },
    (error) => {
    alert("An error occurred, Please try again", error.text);
    });

  }

  return (
    <>
      <section className="newsletter__wrapper">
        <div className="newsletter__wrapper--content">
          <h3 className="newsletter__wrapper--content--header">stay tuned</h3>
          <p className="newsletter__wrapper--content--paragraph">
            subscribe to the newsletter and don't miss any updates related to RedOne's new <br /> 
            music, productions, FIFA related events and META presence.
          </p>
          <form onSubmit={ hundleSubmit(e) }>
              <div className="newsletter__wrapper--content--terms">
                <input type="checkbox" name="termsCheck" id="termsCheck" required/>
                <label htmlFor="termsCheck">
                  I read and accept the <a href="#">privacy policy</a>
                </label>
              </div>

              <div className="newsletter__wrapper--content--form">
                {/* <form > */}
                  <input type="email" id="email" name="email" placeholder="yourname@email.com"/>
                  <button>Subscribe to newsletter</button>
                {/* </form> */}
              </div>
          </form>
          <div className="newsletter__wrapper--content--social">
            <div className="newsletter__wrapper--content--social--item">
              <a target="_blank"  href="https://fr-fr.facebook.com/RedOneOfficial">
                <IoLogoFacebook />
              </a>{" "}
            </div>
            <div className="newsletter__wrapper--content--social--item">
              <a target="_blank"  href="https://www.instagram.com/redone/">
                <IoLogoInstagram />
              </a>
            </div>
            <div className="newsletter__wrapper--content--social--item">
              <a target="_blank"  href="https://twitter.com/redone_official">
                <IoLogoTwitter />
              </a>
            </div>
            <div className="newsletter__wrapper--content--social--item">
              <a target="_blank" href="https://www.youtube.com/channel/UCMwDdAvIP0MVuqENDpME0xg">
                <IoLogoYoutube />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
