import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import SocialLinks from "./Components/SocialLinks";

function App() {
  return (
   <div>
   <Navbar/>
   <Home/>
   <About/>
   <Experience/>
   
   <Contact/>
   <Project/>
   <SocialLinks/>
   </div>
  );
}

export default App;
