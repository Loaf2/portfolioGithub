import React from "react";
import project1 from "./assets/Shopping.png";
import project2 from "./assets/reactMenuProject.png";
import project3 from "./assets/examplePortfolio.png";
import project4 from "./assets/personalProject.png";
import project5 from "./assets/Tours.png";

export default function Projects() {
  return (
    <div className="flex flex-col items-center gap-20">
      <span className="text-7xl font-[Oswald] font-semibold">Projects</span>
      <div className="projects">
        <img className="item"></img>
        <img className="item"></img>
        <img className="item"></img>
        <img className="item"></img>
        <img className="item"></img>
      </div>
    </div>
  );
}
