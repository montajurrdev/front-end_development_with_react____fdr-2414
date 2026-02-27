import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import SaleOne from "/src/assets/SaleOne.png";
import SaleTwo from "/src/assets/SaleTwo.png";
import SaleThree from "/src/assets/SaleThree.png";
import { Link } from "react-router-dom";

const Sale = () => {
  return (
    <div className="py-[100px]">
      <Container>
        <Flex className={"items-start gap-x-4"}>
          <div className="">
            <Link to={"shop"}>
              <img src={SaleOne} />
            </Link>
          </div>
          <div className="flex flex-col justify-between h-[650px]">
            <Link to={"shop"}>
              <img src={SaleTwo} />
            </Link>

            <Link to={"shop"}>
              <img src={SaleThree} />
            </Link>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Sale;
