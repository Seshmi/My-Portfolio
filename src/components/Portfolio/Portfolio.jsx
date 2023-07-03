import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Ecommerce from "../../img/Ecommerce.png";
import Event from "../../img/Event.png";
import FoodHub from "../../img/Foodhub.png";
import Grocery from "../../img/Grocerypro.png";
import Insurance from "../../img/Insurance.png";
import OrderMe from "../../img/Order.png";
import UIUX from "../../img/UIUX.png";
import UniSup from "../../img/Unisup.png";
import Walletcal from "../../img/Walletcal.png";
import WalletWizard from "../../img/Walletwizard.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const imageName = "Online Help Desk for University Students";
  const imageName1 = "Life Insurance Management System";
  const imageName2 = "Online Grocery Management System";
  const imageName3 = "Online Event Planning";
  const imageName4 = "E-Commerce web application for Kingship Group of Companies (PVT) LTD";
  const imageName5 = "Income & Expenses Mobile Application";
  const imageName6 = "Online food ordering system";
  const imageName7 = "Online Shopping Management System ( Seller )";
  const imageName8 = "UI/UX Designing for a Web Application";
  const imageName9 = "Income Expenses Tracker Mobile Application";

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={UniSup} alt="" />
          <a href="https://github.com/Seshmi/IWT_Online_Help_Desk.git"><p>{imageName} </p></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Insurance} alt="" />
          <a href="https://github.com/Seshmi/Life_Insurance.git"><p>{imageName1} </p></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Grocery} alt="" />
          <a href="https://github.com/Seshmi/Shopping.git"><p>{imageName2} </p></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Event} alt="" />
          <a href="https://github.com/Seshmi/Online_Event_planning.git"><p>{imageName3} </p></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
          <a href="https://github.com/Seshmi/ITP.git"><p>{imageName4} </p></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Walletcal} alt="" style={{ width: "200px", height: "400px" }} />
          <a href="https://github.com/Seshmi/Seshmi-Alpha-Girls-WalletCal-Income-App-.git"><p>{imageName5} </p></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={FoodHub} alt="" />
          <a href="https://github.com/Seshmi/FoodHub.git"><p>{imageName6} </p></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={OrderMe} alt="" />
          <a href="https://github.com/Seshmi/OderMeSeller.git"><p>{imageName7} </p></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={UIUX} alt="" style={{ width: "200px", height: "400px" }}/>
          <a href="https://www.figma.com/file/ZRV8ebuEpZZUqeysaremTh/UI?type=design&node-id=0%3A1&mode=design&t=cMYm4xcw6tLg8rjE-1"><p>{imageName8} </p></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={WalletWizard } alt="" style={{ width: "200px", height: "400px" }}/>
          <a href="#"><p>{imageName9} </p></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
