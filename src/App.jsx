import "./App.css";

import Header from "./Header";
import Introduction from "./Introduction";
import Aboutme from "./Aboutme";
import Skills from "./Skills";
import Projects from './Projects'
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <div className="App">
      <div className="flex justify-center absolute w-full top-0">
        <div className="flex w-[100%] flex-col text-4xl">
          <div className="effect px-52 bg-[#FCFFEB] -z-10">
            <span className="relative top-20 font-[Oswald]">01.</span>
            <Header />
            <Introduction />
          </div>
          <div className="effect px-52 border-t-[5px] border-t-[#000000] bg-[#FAFAC6] -z-10">
            <span className="relative top-20 font-[Oswald]">02.</span>
            <Aboutme />
          </div>
          <div className="effect px-52 bg-[#FCFFEB] -z-10 border-t-[5px] border-t-[#000000]">
            <span className="relative top-20 font-[Oswald]">03.</span>
            <Skills />
          </div>
          <div className="effect px-52 bg-[#FECDAA] -z-10 border-t-[5px] border-t-[#000000]">
            <span className="relative top-20 font-[Oswald]">04.</span>
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
