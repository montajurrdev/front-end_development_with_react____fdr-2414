import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Product from "../Product";
import { Link } from "react-router-dom";

import productOne from "/src/assets/productOne.png";
import productTwo from "/src/assets/productTwo.png";
import productThree from "/src/assets/productThree.png";
import productFour from "/src/assets/productFour.png";
import Image from "../Image";
import ShopNow from "/src/assets/ShopNow.png";

const BestSelling = () => {
  return (
    <>
      <div className="pt-[100px]">
        <Container>
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-4xl text-[#262626] ">
              Our Bestsellers
            </h3>
            <Link to={"shop"}>
              <h4 className="font-bold text-2xl  text-link">see all</h4>
            </Link>
          </div>

          <div className="pt-10">
            <Flex className={" gap-x-7"}>
              <Product
                badgeText={"10%"}
                productImg={productOne}
                productText={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
                productColorName={"black"}
              />
              <Product
                badgeText={"New"}
                productImg={productTwo}
                productText={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
                productColorName={"gray"}
              />
              <Product
                badgeText={"20%"}
                productImg={productThree}
                productText={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
                productColorName={"black"}
              />
              <Product
                badgeText={"New"}
                productImg={productFour}
                productText={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
                productColorName={"white"}
              />
            </Flex>
          </div>
          <div className="py-[80px]">
            <Link to={"/shop"}>
            <Image imgSrc={ShopNow} />
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BestSelling;
