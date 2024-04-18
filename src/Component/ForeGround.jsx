import React, { useRef, useState } from "react";
import Card from "./Card";

function ForeGround() {
  // const data=[
  //   icon,desc,filesize,closeOrDownload,tagDetails
  // ]
   const ref=useRef(null)

  const data = [
    {
      desc: "this is demo description",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true   , tagTitle : "Download Now" , tagColor : "green" },
    },
    {
      desc: "this is demo description",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true   , tagTitle : "Download Now" , tagColor : "red" },
    },
    {
      desc: "this is demo description",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true   , tagTitle : "Download Now" , tagColor : "green" },
    },
  ];
  return (
    <div ref={ref} className=" p-4 w-full h-screen z-[3] fixed top-0 left-0 flex gap-5 flex-wrap ">
      {data.map((item , index)=>(
        <Card data={item} reference={ref}/>
      ) )}
    </div>
  );
}

export default ForeGround;
