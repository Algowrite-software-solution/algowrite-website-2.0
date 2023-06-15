import React from "react";



function ServicesCard({ topic, paragraph, img }) {
     return (
          <div className="h-1/2 sm:w-72 rounded-[35px] bg-secondary flex flex-col items-center justify-center drop-shadow-2xl">
               <img src={img} className="h-1/2 w-72" />
               <div className="order-2 flex flex-col items-center justify-center p-6 gap-3">
                    <h3 className="text-white font-bold text-2xl">{topic}</h3>
                    <p className="text-center">{paragraph}</p>
               </div>
          </div>
     );
}

export default ServicesCard;