import "./App.css";
// import Button from './components/Button';
import MainTopic from "./components/MainTopic";
import Header from "./layout/Header";
import HeroSection from "./layout/HeroSection";

function App() {
  return (
    <div>
      <MainTopic
        className="text-red-500"
        text="SERVICE"
        subTopic="Enter you subTopic"
        subTopicClassName="text-blue-600"
      />
      <Header />
      <HeroSection />
      <div className="h-[2000px] bg-blue-800"></div>
    </div>
  );
}

export default App;
