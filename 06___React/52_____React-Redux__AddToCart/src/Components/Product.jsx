import Badge from "./Badge";
import Image from "./Image";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import { FaCartShopping } from "react-icons/fa6";
import Heading from "./Heading";
import { addToCart } from "../features/cart/addToCartSlice";
import { useDispatch } from "react-redux";

const Product = ({
  productImg,

  badgeText,
  productText,
  productPrice,
  productColorName,
}) => {
  let dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        title: productText,
        img: productImg,
        price: productPrice,
        
      })
    );
  };
  return (
    <div className="mx-4 bg-gray-100 ">
      <div className="relative group">
        <Image imgSrc={productImg} className={`w-full`} />
        <Badge
          badgeText={badgeText}
          className={`absolute top-[7%] left-[7%]`}
        />
        <div className="py-6 px-7 gap-y-3 grid  bg-white absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 duration-300 ease-in-out ">
          <Link
            to={"/"}
            className="flex items-center justify-end gap-x-2 text-[16px] text-[#767676] hover:text-text hover:font-bold"
          >
            Add to Wish List <FaHeart className="text-[#262626]" />
          </Link>
          <Link
            to={"/"}
            className="flex items-center justify-end gap-x-2 text-[16px] text-[#767676] hover:text-text hover:font-bold"
          >
            Compare <LuRefreshCw className="text-[#262626]" />
          </Link>
          <div
            onClick={handleAddToCart}
            className="flex items-center justify-end gap-x-2 text-[16px] text-[#767676] hover:text-text hover:font-bold"
          >
            Add to Cart <FaCartShopping className="text-[#262626]" />
          </div>
        </div>
      </div>
      <div className="py-6 px-1 ">
        <h4
          className={`flex justify-between items-center  font-bold text-[20px] text-text `}
        >
          {productText}
          <span className={`font-normal text-[16px] text-[#767676] `}>
            ${productPrice}
          </span>
        </h4>
        <Heading
          as={"h5"}
          text={productColorName}
          className="text-[16px] text-[#767676] "
        />
      </div>
    </div>
  );
};

export default Product;
