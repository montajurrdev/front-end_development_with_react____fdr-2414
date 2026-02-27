import React from "react";
import { LiaArrowAltCircleRightSolid  } from "react-icons/lia";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className={" text-6xl text-[#979797] size-fit rounded-full absolute top-[45%] right-3 -translate-y-1/2"}
      
      onClick={onClick}
    ><LiaArrowAltCircleRightSolid/> </div>
  );
};

export default NextArrow;  
