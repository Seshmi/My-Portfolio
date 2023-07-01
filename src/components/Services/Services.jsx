import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Smileythumbs from "../../img/Smileythumbs.png"
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './Seshmi_Senadheera_Resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Skils</span>
        <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design / Computer Skills"}
            detail={"MS Office, Figma, Canva, Draw.io, Adobe xd, Mockflow, JIRA"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-5rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card 
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, CSS, PHP, C/C++, JavaScript, ReactJs, Nodejs, Express, Java, SQL, Kotlin,"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Software"}
            detail={"Eclipse IDE, VSCode, Android Studio, MySQL Workbench "}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        {/* 4th card */}
        <motion.div
          initial={{ top: "17rem", left: "45rem" }}
          whileInView={{ left: "35rem" }}
          transition={transition}
        >
          <Card
            emoji={Smileythumbs}
            heading={"Databases/Servers"}
            detail={"Xampp/phpMyAdmin, MySQL Workbench, MongoDB, Firebase"}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
