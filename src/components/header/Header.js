import React,{useContext} from "react";
import Headroom from "react-headroom";
import "./Header.css";
import {greeting, workExperiences} from "../../portfolio";
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import StyleContext from '../../contexts/StyleContext';

function Header() {
  const exp = workExperiences.viewExperiences;
  const { isDark } = useContext(StyleContext);
  return (
    <Headroom>
      <header className={isDark ? 'dark-menu header' : 'header'}>
        <a href="" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name" style={{color:"pink"}}>{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: 'white' }}
        >
          <span className={isDark ? 'navicon navicon-dark' : 'navicon'}></span>
        </label>
        <ul className={isDark ? 'dark-menu menu' : 'menu'}>
        <ul className="menu"></ul>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#skill-prog-bar">Skills</a>
          </li>
          { exp === true &&
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          }
          {/*<li>
            <a href="#opensource">Open Source</a>
          </li>*/}
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#achievements">Publications</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li style={{visibility:"hidden"}}>
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
