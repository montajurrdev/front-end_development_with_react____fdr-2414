import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Product from "../Product";
import { Link } from "react-router-dom";

const NewArrival = () => {
  return (
    <>
      <div className="">
        <Container>
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-4xl text-[#262626] ">New Arrivals</h3>
            <Link>
              <h4 className="font-bold text-2xl  text-link">see all</h4>
            </Link>
          </div>

          <div className="pt-10">
            <Flex>
              <Product />
 
            </Flex>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NewArrival;
