import './App.css';
// import Button from './components/Button';
import MainTopic from './components/MainTopic';
import Packages from './components/Package';
import PackageBox from './layout/PackageBox';



function App() {
  return (
    <div>
      {/* <MainTopic className="text-red-500" text="SERVICE" subTopic="Enter you subTopic" subTopicClassName="text-blue-600" /> */}
      {/* <Header /> */}
     <PackageBox/>
    </div>
  );
}

export default App;
