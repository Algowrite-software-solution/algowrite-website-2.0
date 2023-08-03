function MainTopic({ text, className, subTopicClassName, subTopic }) {
  return (
    <div className="flex flex-col justify-center my-5">
      <h1 className={`${className}`}>
        {text}
      </h1>
      <span className={`${subTopicClassName}`}>
        {subTopic}
      </span>
    </div>
  );
}

export default MainTopic;
