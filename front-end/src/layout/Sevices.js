import React, { useState } from "react";
import MainTopic from "../components/MainTopic";
import Button from "../components/Button";
import ServicesCard from "../components/SerivicesCard";
import serviceImg from "../assets/ServicesCardImg/serviceCardImage.png";



const ApplicatinCardDetails = ({ activeButton }) => {
     const cardData = {
          Web: [
               { topic: "E-Commerce", paragraph: "Web Application Web Application Web Application Web Application Web Web Application Web Application Application" },
               { topic: "Web Application", paragraph: "Web Application Web Application Web Application Web Application Web Web Application Web Application Application" },
               { topic: "Portfolio", paragraph: "Web Application Web Application Web Application Web Application Web Web Application Web Application Application" },
               { topic: "Websites", paragraph: "Web Application Web Application Web Application Web Application Web Web Application Web Application Application" },
          ],
          Mobile: [
               { topic: "Mobile App 1", paragraph: "mobile Application Web Application Web Application Web Application Web Web Application Web Application Application" },
               { topic: "Mobile App 2", paragraph: "mobile Application Web Application Web Application Web Application Web Web Application Web Application Application" },
               { topic: "Mobile App 3", paragraph: "mobile Application Web Application Web Application Web Application Web Web Application Web Application Application" },
               { topic: "Mobile App 4", paragraph: "mobile Application Web Application Web Application Web Application Web Web Application Web Application Application" },
          ],
          Desktop: [
               { topic: "Desktop 1", paragraph: "Desktop Application Web Application Web Application Web Application Web Web Application Web Application Application" },
               { topic: "Desktop 2", paragraph: "Desktop Application Web Application Web Application Web Application Web Web Application Web Application Application" },
               { topic: "Desktop 3", paragraph: "Desktop Application Web Application Web Application Web Application Web Web Application Web Application Application" },
               { topic: "Desktop 4", paragraph: "Desktop Application Web Application Web Application Web Application Web Web Application Web Application Application" },
          ],
     };

     const cards = cardData[activeButton].map((card, index) => (
          <ServicesCard key={index} topic={card.topic} paragraph={card.paragraph} img={serviceImg}/>
     ));

     return (<div className="flex gap-10">{cards}</div>);
};

function Services() {

     const [activeButton, setActiveButton] = useState('Web');

     const handleButtonClick = (button) => {
          setActiveButton(button);
     };

     return (
          <div className="flex flex-col bg-primary justify-center items-center p-3 gap-5 pb-12">
               <div className="order-1 flex items-center justify-center">
                    <MainTopic text="SERVICES" className="text-white font-bold text-3xl" subTopic="Tag line of Service" subTopicClassName="text-white" />
               </div>
               <div className="order-2 sm:w-4/5 h-11 bg-secondary rounded-full flex justify-between ps-2 pe-2">
                    <Button onClick={()=> handleButtonClick('Web')} text="Web Application" className="w-96 h-11 text-darker  text-xl font-semibold bg-light rounded-full active:bg-white" />
                    <Button onClick={()=> handleButtonClick('Mobile')} text="Mobile Application" className="w-96 h-11 text-darker text-xl font-semibold  bg-light  rounded-full  active:bg-white" />
                    <Button onClick={()=> handleButtonClick('Desktop')} text="Desktop Application" className="w-96 h-11 text-darker text-xl font-semibold  bg-light rounded-full  active:bg-white" />
               </div>
               <div className="order-3">
                    <ApplicatinCardDetails activeButton={activeButton} /> 
               </div>
          </div>
     );
}

export default Services;