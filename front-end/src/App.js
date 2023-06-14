import './App.css';
// import Button from './components/Button';
import MainTopic from './components/MainTopic';
import Header from './layout/Header';

function App() {
  return (
    <div>
      <MainTopic className="text-red-500" text="SERVICE" subTopic="Enter you subTopic" subTopicClassName="text-blue-600" />
      <Header />
    </div>
  );
}

export default App;
