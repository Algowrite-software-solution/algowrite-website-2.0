import React from "react";
import "./ServiceCard.css";

function ServicesCard({ topic, paragraph, img }) {
     return (
          <div className="w-4/5 sm:h-1/2 h-1/2 sm:w-72   rounded-[35px] bg-secondary flex flex-col items-center justify-center drop-shadow-2xl">
               <img src={img} className="h-1/2 w-72" />
               <div className="order-2 flex flex-col items-center justify-center p-6 gap-3 border-top-shadow">
                    <h3 className="text-white font-bold sm:text-2xl">{topic}</h3>
                    <p className="text-center">{paragraph}</p>
               </div>
          </div>
     );
}

export default ServicesCard;