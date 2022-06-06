import React from "react";
// icons
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";

export const Newsletter = () => {



  function sendEmail(){
    Email.send({
      SecureToken : "88a02126-5893-40a2-8cac-8fcf0fdbc84e",
      To : 'othmanelkarkoubi9@gmail.com',
      From : "othmanelkarkoubi1997@gmail.com",
      Subject : "Test email",
      Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
    }).then(
      message => alert('send successfully')
    );
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
          <form onSubmit={sendEmail()}>
              <div className="newsletter__wrapper--content--terms">
                <input type="checkbox" name="termsCheck" id="termsCheck" required/>
                <label htmlFor="termsCheck">
                  I read and accept the <a href="#">privacy policy</a>
                </label>
              </div>

              <div className="newsletter__wrapper--content--form">
                <form >
                  <input type="email" id="email" name="email" placeholder="yourname@email.com"/>
                  <button>Subscribe to newsletter</button>
                </form>
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
