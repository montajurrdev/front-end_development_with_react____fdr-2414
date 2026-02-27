import Container from "../Container";

import Product from "../Product";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SpecialOffer = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  // ==============
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    async function productData() {
      const apiData = await axios.get("https://dummyjson.com/products");
      setAllData(apiData.data.products);
    }
    productData();
  }, []);

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

          <div className="pt-10 -mx-4">
            <Slider {...settings}>
              {
                allData.map(item=>(
                    <div>
                    <Product
                      badgeText={`${item.discountPercentage}%`}
                      productImg={item.thumbnail}
                      productText={item.title} 
                      productPrice={item.price}
                      
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

export default SpecialOffer;
