import React from "react";
import Card from "./card";


const Foreground = () => {
      
    const ref = useRef(null);

  const data = [
    {
      desc: "Hiii",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "Hey i am siddhartha, i am a 2nd year student of jisce",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Hiii",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
    <>
      <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
        {data.map((item, index) => (
          <Card data={item} reference={ref} />
        ))}
      </div>
    </>
  );
};

export default Foreground;
