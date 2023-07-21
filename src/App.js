import './App.css'
import More from './components/More';
import Hero from './components/Hero';
import Infosection from './components/Infosection';
import Navbar from './components/Navbar';
import { InfoData } from './data/InfoData';
import { InfoDataTwo } from './data/InfoData';
import { SliderData } from './data/SliderData';
import Projects from './pages/Projects';
import Contact from './components/Contact'
import Foooter from './Foooter';



function App() {
  
  return (
    <>
      <Navbar />     
      <Hero slides={SliderData} />
      <Infosection {...InfoData}/>
      <More/>
      <Infosection {...InfoDataTwo}/>
      <Projects slides={SliderData}/>
      <Contact />
      <Foooter/>
    </>
  );
}

export default App;
