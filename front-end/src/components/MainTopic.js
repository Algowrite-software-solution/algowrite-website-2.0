import React from "react";


function MainTopic({ text, className, subTopicClassName, subTopic }) {
     return (
          <div>
               <h1 className={className}>{text}</h1>
               <span className={subTopicClassName}>{subTopic}</span>
          </div>
     );
}

export default MainTopic;
