import './App.css';
import Navbar from './Navbar'
import {Analysis, Average, Reviews} from './Analysis'
import Websitevisitors from './Websitevisitors'

// import Welcome from './welcomeclass'

function App() {
  return (
    <div className="App">
    {/* <Welcome /> */}
    <Navbar />
    <Average />
    <Reviews />
    <Analysis />
    <Websitevisitors />
   </div>
  );
}

export default App;
