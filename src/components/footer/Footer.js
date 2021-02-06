import React, { useContext } from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = false; //useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made with ❤️ by Aparna")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Theme based on{" "}
          <a href="https://github.com/saadpasta/developerFolio"  style={{color:"grey"}}>
            developerFolio
          </a>
        </p>
      </div>
    </Fade>
  );
}
