import React from "react";

export default function Skills() {
  return (
    <div className="flex flex-col items-center gap-10 mt-20">
      <span className="text-7xl font-semibold font-[Oswald]">My Skills</span>
      <div className="bg-[#FAFAC6] flex flex-col gap-5 items-center p-5">
        <span className="tag">HTML</span>
        <span className="tag">CSS</span>
        <span className="tag">JS</span>
        <span className="tag">REACT</span>
        <span className="tag">TAILWIND</span>
        <span className="tag">NODEJS</span>
      </div>
    </div>
  );
}
