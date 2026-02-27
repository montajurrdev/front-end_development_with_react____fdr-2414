import React from "react";
import { LiaArrowAltCircleLeftSolid  } from "react-icons/lia";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className={" text-6xl text-[#979797] size-fit rounded-full absolute top-[45%] left-3 -translate-y-1/2 z-10"}
      
      onClick={onClick}
    ><LiaArrowAltCircleLeftSolid /></div>
  );
};

export default PrevArrow;
 