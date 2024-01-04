/* 
 Email Address

Your users should be able to:

View the optimal layout for the interface depending on their device's screen size
See hover and focus states for all interactive elements on the page
Receive an error message when the form is submitted if:
The input field is empty
The email address is not formatted correctly
*/

import BackgroundDesktop from "./images/bg-pattern-desktop.svg";
import HeroDesktop from "./images/hero-desktop.jpg";
import HeroMobile from "./images/hero-mobile.jpg";
import IconArrow from "./images/icon-arrow.svg";
import IconError from "./images/icon-error.svg";
import Logo from "./images/logo.svg";

export default function ComingSoon() {
  return (
    <div className="container">
      <img src={Logo} alt="Logo of Base Apparel" className="logo" />
      <picture className="img-hero">
        <source media="(max-width:375px)" srcSet={HeroMobile} />
        <img
          src={HeroDesktop}
          alt="Portrait of a girl with short hair wearing light orange T-shirt"
        />
      </picture>
      <div className="text-content">
        <h1>
          <span className="h1-color">We're</span> <br />
          <span>coming</span> <br />
          <span>soon</span>
        </h1>
        <p>
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <form className="form-email">
          <input
            type="email"
            placeholder="Email Address"
            className="input-email"
          />
          <button className="btn-email">
            <img src={IconArrow} alt="Arrow Icon" />
          </button>
        </form>
      </div>
    </div>
  );
}
