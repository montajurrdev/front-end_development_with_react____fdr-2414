import React from "react";
import productOne from "/src/assets/productOne.png";
import Badge from "./Badge";
import Image from "./Image";


const Product = () => {
  return (
    <div className="w-1/4 relative ">
      <Image imgSrc={productOne} className={"bg-productBG"} />
      <Badge badgeText={"10%"} className={"absolute top-[7%] left-[7%] "}/>

    </div>
  );
};

export default Product;
