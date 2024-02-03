import mapData from "../data/MapData";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card } from 'flowbite-react';


export default function MapComponent({ checkedStates }) {
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className=" rounded flex flex-row justify-center mt-10 ">
    <div className="logo">
      <motion.svg
      key= 'map_comp'
        width="800"
        height="400"
        className="states"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
        initial="hidden"
        animate="visible"
      >
        {checkedStates.map((state, index) => {
          if (index === checkedStates.length - 1) {
            return (
              <motion.path
                key={state}
                fill="none"
                stroke="green"
                d={mapData[state]}
                variants={pathVariants}
                strokeWidth={3}
              />
            );
          }
          return (
            <path
              key={state}
              strokeWidth={3}
              fill="none"
              stroke="black"
              d={mapData[state]}
            />
          );
        })}
      </motion.svg>
    </div>
    </div>
  );
}
