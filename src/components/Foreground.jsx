import React, { useRef } from "react";
import Card from "./Card"

const Foreground = () => {
  const ref = useRef(null);

  const data = [
    {
      desc: "It's still under development",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "Hey i am siddhartha, i am a 2nd year student of jisce",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Keep your notes in cool manner.",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
  ];
  return (
    <>
      <div
        ref={ref}
        className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5"
      >
        {data.map((item, index) => (
          <Card data={item} reference={ref} />
        ))}
      </div>
    </>
  );
};

export default Foreground;
