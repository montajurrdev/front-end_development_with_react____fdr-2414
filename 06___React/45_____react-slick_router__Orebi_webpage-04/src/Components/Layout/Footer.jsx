import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { Link } from "react-router-dom";
import Logo from "/src/assets/logo.png";

const Footer = () => {
  return (
    <>
      <div className="bg-[#d1cdcd] py-10">
        <Container>
          <Flex className={"justify-between items-start w-5/6"}>
            <div className="">
              <h3 className="text-[16px] text-[#262626] font-bold">Menu</h3>
              <ul className="text-[14px] text-[#767676] gap-y-5">
                <Link to={"/"}>
                  <li className="hover:text-[#262626] hover:font-bold cursor-pointer">
                    Home
                  </li>
                </Link>
                <Link to={"shop"}>
                  <li className="hover:text-[#262626] hover:font-bold cursor-pointer">
                    Shop
                  </li>
                </Link>
                <Link to={"about"}>
                  <li className="hover:text-[#262626] hover:font-bold cursor-pointer">
                    About
                  </li>
                </Link>
                <Link to={"contact"}>
                  <li className="hover:text-[#262626] hover:font-bold cursor-pointer">
                    Contacts
                  </li>
                </Link>
                <Link to={"journal"}>
                  <li className="hover:text-[#262626] hover:font-bold cursor-pointer">
                    Journal
                  </li>
                </Link>
              </ul>
            </div>
            <div className="">
              <h3 className="text-[16px] text-[#262626] font-bold">SHOP</h3>
              <ul className="text-[14px] text-[#767676] gap-y-5">
                <Link>
                  <li className="hover:text-[#262626] hover:font-bold cursor-pointer">
                    Category 1
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-[#262626] hover:font-bold cursor-pointer">
                    Category 2
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-[#262626] hover:font-bold cursor-pointer">
                    Category 3
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-[#262626] hover:font-bold cursor-pointer">
                    Category 4
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-[#262626] hover:font-bold cursor-pointer">
                    Category 5
                  </li>
                </Link>
              </ul>
            </div>
            <div className="">
              <h3 className="text-[16px] text-[#262626] font-bold">HELP</h3>
              <ul className="text-[14px] text-[#767676] gap-y-5">
                <Link>
                  <li className="hover:text-[#262626] hover:font-bold cursor-pointer">
                    Privacy Policy
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-[#262626] hover:font-bold cursor-pointer">
                    Terms & Conditions
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-[#262626] hover:font-bold cursor-pointer">
                    Special E-shop
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-[#262626] hover:font-bold cursor-pointer">
                    Shipping
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-[#262626] hover:font-bold cursor-pointer">
                    Secure Payments
                  </li>
                </Link>
              </ul>
            </div>
            <div className="">
              <h5 className="text-[16px] text-[#262626] gap-y-5">
                (052) 611-5711
              </h5>
              <h5 className="text-[16px] text-[#262626] gap-y-5">
                company@domain.com
              </h5>
              <p className="text-[14px] text-[#767676]">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>
            <div className="">
              <Link to={"/"}>
                <img src={Logo} />
              </Link>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Footer;
