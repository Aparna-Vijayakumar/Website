import React, { useContext } from 'react';
import './Contact.css';
import SocialMedia from '../../components/socialMedia/SocialMedia';
import { illustration, contactInfo } from '../../portfolio';
import { Fade } from 'react-reveal';
import email from '../../assets/lottie/email';
import DisplayLottie from '../../components/displayLottie/DisplayLottie';
import StyleContext from '../../contexts/StyleContext';

export default function Contact() {
  // { isDark } = useContext(StyleContext);
  const isDark = false; // remember to remove TODO
  console.log(isDark)
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <div
              className={
                isDark ? 'dark-mode contact-text-div' : 'contact-text-div'
              }
            >
              <a className="contact-detail" href={'tel:' + contactInfo.number} style={{color:"#000"}}>
                {contactInfo.number}
              </a>
              <br />
              <br />
              <a
                className="contact-detail-email"
                href={'mailto:' + contactInfo.email_address}
                style={{color:"#000"}}>
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img
                alt="Man working"
                src={require('../../assets/images/contactMailDark.svg')}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
