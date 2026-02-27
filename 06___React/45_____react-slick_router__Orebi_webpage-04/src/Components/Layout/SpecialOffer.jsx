import React from 'react'
import Container from "../Container";
import Flex from "../Flex";
import Product from "../Product";
import { Link } from "react-router-dom";

import productFive from "/src/assets/productFive.png";
import productSix from "/src/assets/productSix.png";
import productSeven from "/src/assets/productSeven.png";
import productEight from "/src/assets/productEight.png";


const SpecialOffer = () => {
  return (
        <>
      <div className="pt-10 pb-[80px]">
        <Container>
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-4xl text-[#262626] ">
             Special Offers
            </h3>
            <Link to={"shop"}>
              <h4 className="font-bold text-2xl  text-link">see all</h4>
            </Link>
          </div>

          <div className="pt-10">
            <Flex className={" gap-x-7"}>
              <Product
                badgeText={"10%"}
                productImg={productFive}
                productText={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
                productColorName={"black"}
              />
              <Product
                badgeText={"New"}
                productImg={productSix}
                productText={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
                productColorName={"gray"}
              />
              <Product
                badgeText={"20%"}
                productImg={productSeven}
                productText={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
                productColorName={"black"}
              />
              <Product
                badgeText={"New"}
                productImg={productEight}
                productText={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
                productColorName={"white"}
              />
            </Flex>
          </div>

        </Container>
      </div>
    </>
  )
}

export default SpecialOffer