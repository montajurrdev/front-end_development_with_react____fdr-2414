import Container from "../Container";
import Flex from "../Flex";
import Product from "../Product";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";
import axios from "axios";



const NewArrival = () => {

  // Slick====================
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
// =============================

// Products Api================
const [allData,setAllData] = useState([])

useEffect(()=>{
  async function productData() {
    const apiData =await axios.get('https://dummyjson.com/products') 
    setAllData(apiData.data.products)
    
  }
  productData() 

},[])

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

          <div className="pt-10 -mx-4">
            <Slider {...settings}>
                {
                  allData.map(item=>(
                    
                    <div>
                    <Product
                      badgeText={`${item.discountPercentage}%`}
                      productImg={item.thumbnail}
                      productText={item.title} 
                      productPrice={`$${item.price}`}
                      
                      />
                      </div>
                  ))
                }
             
            </Slider>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NewArrival;
