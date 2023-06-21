function MainTopic({ text, className, subTopicClassName, subTopic }) {
  return (
    <div className="flex justify-center flex-col my-5">
      <h1 className={`text-white  text-3xl text-center font-bold ${className}`}>
        {text}
      </h1>
      <span className={`text-center text-white pt-1 ${subTopicClassName}`}>
        {subTopic}
      </span>
    </div>
  );
}

export default MainTopic;
