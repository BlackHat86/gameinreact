import React from "react";
import { FaRegFileLines } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={1.15}
      dragTransition={{bounceStiffness:200,bounceDamping:40}}
      className="w-44 h-60 px-5 py-10 overflow-hidden bg-zinc-900/90 text-white rounded-[20px] relative flex-shrink-0"
    >
      <FaRegFileLines />
      <p className="text-sm font-semibold leading-tight mt-5">{data.desc}</p>

      <div className="footer absolute bottom-0 w-full  left-0   ">
        <div className="flex items-center justify-between py-3 px-5">
          <h5 className="text-xs">{data.filesize}</h5>
          <span className="w-5 h-4  bg-zinc-800 rounded-full flex items-center justify-center">
            {data.close ? <IoClose /> : <IoMdDownload />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag ${
              data.tag.tagColor === "red" ? "bg-red-500" : "bg-green-500"
            } w-full flex items-center justify-center text-white px-4`}
          >
            <h4 className="text-sm ">{data.tag.tagTitle}</h4>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
