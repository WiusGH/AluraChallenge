import React from "react";
import linkedInLogo from "../../assets/images/linkedin.png";
import githubLogo from "../../assets/images/github.png";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <a href="https://www.linkedin.com/in/wius/">
        <img className={style.logo} src={linkedInLogo} alt="Linkedin logo"></img>
      </a>
      <div className={style.name}>
        <h3>Wilsconidel Yanez</h3>
        <p>Desarrolador fullstack</p>
      </div>
      <a href="https://github.com/WiusGH">
        <img className={style.logo} src={githubLogo} alt="Github logo"></img>
      </a>
    </div>
  );
};

export default Header;
