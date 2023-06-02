import { BrowserRouter } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";


const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-[#000000]'>

      
        <div className='relative z-0'>
        <Navbar />
          <Hero />
        <About />
        <Experience />
        <Tech />
        <Works />
          <Contact />
          <StarsCanvas />
        </div>
        <AnimatedCursor
        innerSize={20}
      outerSize={20}
      color='255, 255, 255'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5} />
      </div>
    </BrowserRouter>
  );
}

export default App;
