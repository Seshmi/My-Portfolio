import React, { useContext } from "react";
import "./Education.css";
import EducationCard from "../EducationCard/EducationCard";
import SLIIT from "../../img/SLIIT.png";
import school from "../../img/school.png";
import school1 from "../../img/school1.png";
import IBSL from "../../img/bank.png"
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Education = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="education" id="education">
      {/* left side */}
      <div className="eduTitle">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Education</span>
        <span>Background</span>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="educationCards">
        {/* first card */}
        <motion.div
          initial={{ left: "0rem", top: "0rem" }}
          whileInView={{ left: "-13rem" }}
          transition={transition}
        >

           <EducationCard
            emoji={school1}
            heading={"Bandarawatta Parakkrama Maha Vidyalaya"}
            detail={"Primary Education"}
            date={"2004 – 2008 | Gampaha"}
          />
        </motion.div>

        {/* 2nd card */}
        <motion.div
          initial={{ left: "10rem", top: "10rem" }}
          whileInView={{ left: "-10rem", top:"10rem"}}
          transition={transition}
        >

           <EducationCard
            emoji={school}
            heading={"Yasodhara Devi Balika Maha Vidyalaya"}
            detail={"Ordinary Level + Advanced Level"}
            date={"2009 – 2017 | Gampaha"}
          />
        </motion.div>
        {/* 3rd card */}
        <motion.div
          initial={{ top: "20rem", left: "10rem" }}
          whileInView={{ left: "-7rem", top: "20rem"}}
          transition={transition}
        >
         
          <EducationCard
            emoji={IBSL}
            heading={"Institute of Bankers of Sri Lanka"}
            detail={"Intermediate in Applied Banking & Finance (IABF)"}
            date={"2018 – Present | Sri lanka"}
          />
        </motion.div>
        {/* 4th card */}
        <motion.div
          initial={{ top: "30rem", left: "10rem" }}
          whileInView={{ left: "-4rem", top: "30rem"}}
          transition={transition}
        >

          <EducationCard
            emoji={SLIIT}
            heading={"Sri Lanka Institute of Information Technology (SLIIT)"}
            detail={"BSc (Hons) in Information Technology Specializing in Information Technology"}
            date={"2019 – present | Malabe, Sri lanka"}
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

export default Education;
