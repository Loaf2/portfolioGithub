import React from "react";

export default function Header() {
  return (
    <div className="flex justify-center mt-12 items-center">
      <div className="flex justify-end w-[80%] gap-10">
        <div className="text-3xl flex gap-10">
          <span className="underline_tag">Projects</span>
          <span className="underline_tag">Contacts</span>
        </div>
      </div>
    </div>
  );
}
