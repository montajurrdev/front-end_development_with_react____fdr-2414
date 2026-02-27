import React, { useEffect, useRef, useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "/src/assets/logo.png";
import { Link } from "react-router-dom";
import { HiOutlineBars2 } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";

const Header = ({searchQuery, onSearchChange}) => {
  const [showCategory, setCategory] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const dropdownRef = useRef(null);

  const handleCategory = () => {
    // setCategory(true) // Only show, no toggle back

    // setCategory(!showCategory)
    setCategory((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setCategory(false);
    }
  };
  useEffect(() => {
    document, addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleShowCart = () => {

    setShowCart(!showCart);
  };
  let data = useSelector((state) => state.cart.value);

  //  const grandTotal = data.reduce((accumulator, currentItem) => {
  //   // Add the total price of the current item to the accumulator
  //   return accumulator + (currentItem.price * currentItem.quantity);
  // }, 0); // The '0' is the starting value for the accumulator

  const grandTotal = data.reduce((Total,currentItem)=>{
    return Total + (currentItem.price * currentItem.quantity)
  },0)


  


  // console.log(grandTotal);
  

  return (
    <>
      <div>
        <div className="bg-gray-300 py-5">
          <Container>
            <Flex>
              <div className="">
                <Link to={"/"}>
                  <Image
                    className="cursor-pointer"
                    imgSrc={Logo}
                    imgAlt="this is logo"
                  />
                </Link>
              </div>
              <div className="w-full">
                <ul className="flex justify-center">
                  <Link to={"/"}>
                    <li className="px-5 text-[14px] text-[#767676] hover:text-[#262626] hover:font-bold cursor-pointer">
                      Home
                    </li>
                  </Link>
                  <Link to={"shop"}>
                    <li className="px-5 text-[14px] text-[#767676] hover:text-[#262626] hover:font-bold cursor-pointer">
                      Shop
                    </li>
                  </Link>
                  <Link to={"about"}>
                    <li className="px-5 text-[14px] text-[#767676] hover:text-[#262626] hover:font-bold cursor-pointer">
                      About
                    </li>
                  </Link>
                  <Link to={"contact"}>
                    <li className="px-5 text-[14px] text-[#767676] hover:text-[#262626] hover:font-bold cursor-pointer">
                      Contacts
                    </li>
                  </Link>
                  <Link to={"journal"}>
                    <li className="px-5 text-[14px] text-[#767676] hover:text-[#262626] hover:font-bold cursor-pointer">
                      Journal
                    </li>
                  </Link>
                </ul>
              </div>
            </Flex>
          </Container>
        </div>
        <div className="bg-[#F5F5F3] py-3">
          <Container>
            <Flex className="justify-between">
              <div className="relative">
                {/* onClick={()=> setCategory(!showCategory)} */}
                <div
                  ref={dropdownRef}
                  onClick={handleCategory}
                  className="flex items-center gap-x-1.5 text-[#262626] text-[14px]"
                >
                  <HiOutlineBars2 />
                  <h3>Shop by Category</h3>
                </div>

                {showCategory && (
                  <ul className="absolute top-6 left-0 bg-gray-400 text-white py-2 grid gap-y-2">
                    <Link to={""}>
                      <li className="px-5 text-[14px]  hover:text-[#262626] hover:font-bold cursor-pointer">
                        beauty
                      </li>
                    </Link>
                    <Link to={""}>
                      <li className="px-5 text-[14px]  hover:text-[#262626] hover:font-bold cursor-pointer">
                        groceries
                      </li>
                    </Link>
                    <Link to={""}>
                      <li className="px-5 text-[14px]  hover:text-[#262626] hover:font-bold cursor-pointer">
                        fragrances
                      </li>
                    </Link>
                    <Link to={""}>
                      <li className="px-5 text-[14px]  hover:text-[#262626] hover:font-bold cursor-pointer">
                        furniture
                      </li>
                    </Link>
                  </ul>
                )}
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Product"
                  value={searchQuery}
                  onChange={onSearchChange}
                  className="p-3 bg-white w-[500px] border-none outline-0"
                />
                <IoSearchOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl" />
              </div>
              <div className="relative">
                <Flex className="text-[14px] gap-x-5">
                  <div className="flex gap-x-1">
                    <FaUser />
                    <FaCaretDown />
                  </div>
                  <FaShoppingCart onClick={handleShowCart} />
                </Flex>
                {showCart &&  (
                  <div className="bg-neutral-400 p-3 w-[600px] absolute right-0 top-[110%] ">
                    <RxCross2 onClick={() => setShowCart(!showCart)} />
                    <ul className="flex justify-between pt-2 text-white text-[16px] border-b-2 border-white">
                      <li className="w-[170px]">Title</li>
                      <li className="pl-4">price</li>
                      <li className="pl-5">Image</li>
                      <li>Quantity</li>
                      <li>Total</li>
                    </ul>
                    {data.map((item) => (
                      <>
                        
                          <ul className="flex justify-between pt-2 text-white text-[14px] ">
                            <li className="w-[160px]">{item.title}</li>
                            <li>${item.price} </li>
                            <li>
                              <img src={item.img} alt="" className="h-10" />
                            </li>
                            <li>{item.quantity}</li>
                            <li>${item.price * item.quantity}</li>
                          </ul>
                       
                      </>
                    ))}
                    <div className=" text-black text-[18px] pt-2 gap-x-2 flex items-center justify-end ">Total : <span>${grandTotal.toFixed(2)}</span></div>
                  </div>
                )}
               
              </div>
            </Flex>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Header;
