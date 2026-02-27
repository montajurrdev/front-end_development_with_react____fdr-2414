import Container from "../Container";
import Flex from "../Flex";
import Product from "../Product";
import { Link } from "react-router-dom";

import productOne from "/src/assets/productOne.png";
import productTwo from "/src/assets/productTwo.png";
import productThree from "/src/assets/productThree.png";
import productFour from "/src/assets/productFour.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";



const NewArrival = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="">
        <Container>
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-4xl text-[#262626] ">New Arrivals</h3>
            <Link to={"shop"}>
              <h4 className="font-bold text-2xl  text-link">see all</h4>
            </Link>
          </div>

          <div className="pt-10">
            <Slider {...settings}>
              <div>
                <Product
                  badgeText={"10%"}
                  productImg={productOne}
                  productText={"Basic Crew Neck Tee"}
                  productPrice={"$44.00"}
                />
              </div>
              <div>
                <Product
                  badgeText={"New"}
                  productImg={productTwo}
                  productText={"Basic Crew Neck Tee"}
                  productPrice={"$44.00"}
                />
              </div>
              <div>
                <Product
                  badgeText={"20%"}
                  productImg={productThree}
                  productText={"Basic Crew Neck Tee"}
                  productPrice={"$44.00"}
                />
              </div>
              <div>
                <Product
                  badgeText={"New"}
                  productImg={productFour}
                  productText={"Basic Crew Neck Tee"}
                  productPrice={"$44.00"}
                />
              </div>
              <div>
                <Product
                  badgeText={"10%"}
                  productImg={productOne}
                  productText={"Basic Crew Neck Tee"}
                  productPrice={"$44.00"}
                />
              </div>
              <div>
                <Product
                  badgeText={"New"}
                  productImg={productFour}
                  productText={"Basic Crew Neck Tee"}
                  productPrice={"$44.00"}
                />
              </div>
            </Slider>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NewArrival;
