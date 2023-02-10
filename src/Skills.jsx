import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";

export default function Skills() {
  return (
    <div className="flex flex-col items-center gap-10 mt-20">
      <span className="text-7xl font-semibold font-[Oswald]">My Skills</span>
      <div className="bg-[#FAFAC6] flex flex-col gap-5 items-center p-5">
        <div className="tag">
          <FontAwesomeIcon icon={faHtml5} />
          HTML
        </div>
        <div className="tag">
          <FontAwesomeIcon icon={faCss3Alt} />
          CSS
        </div>
        <div className="tag">
          <FontAwesomeIcon icon={faJs} />
          JS
        </div>
        <div className="tag">
          <FontAwesomeIcon icon={faReact} />
          REACT
        </div>
        <div className="tag">TAILWIND</div>
        <div className="tag">
          <FontAwesomeIcon icon={faNodeJs} />
          NODEJS
        </div>
      </div>
    </div>
  );
}
