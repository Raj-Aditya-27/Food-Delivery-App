import React from "react";
import { RxCaretDown } from "react-icons/rx";
import "../App.css";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { LuBadgeHelp } from "react-icons/lu";
import { CiShoppingCart } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { FaBox } from "react-icons/fa6";

function Header() {
  const [toggle, settoggle] = useState(false);

  const showSideMenu = () => {
    settoggle(true);
  };

  const hideSideMenu = () => {
    settoggle(false);
  };

  const links = [
    {
      icon:<FaBox/>,
      name:"Swiggy Corporate"
    },
    {
      icon: <IoIosSearch />,
      name: "Search",
    },
    {
      icon: <CiDiscount1 />,
      name: "Offer",
      sup: "new",
    },
    {
      icon: <LuBadgeHelp />,
      name: "Help",
    },
    {
      icon: <VscAccount />,
      name: "Sign In",
    },
    {
      icon: <CiShoppingCart />,
      name: "Cart",
      sup: "0",
    },
  ];

  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500"
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
        onClick={hideSideMenu}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[400px] bg-white h-full absolute duration-[400ms]"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        ></div>
      </div>
      <header className="p-[15px] shadow-xl text-[#686b78]">
        <div className="max-w-[1200px]  mx-auto  flex items-center">
          <div className="w-[70px]">
            <img
              src="../../public/images/logo.jpeg"
              alt="logo"
              className="w-full"
            />
          </div>
          <div>
            <span className="font-bold border-b-[3px] border-[black] hover:text-[#fc8019] hover:border-[#fc8019] cursor-pointer">
              Other
            </span>{" "}
            
            <RxCaretDown
              fontSize={25}
              className="inline text-[#fc8019] cursor-pointer"
              onClick={showSideMenu}
            />
          </div>
          <nav className="flex list-none  ml-auto text-[18px] font-semibold gap-10">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center gap-1 hover:text-[#fc8019] cursor-pointer"
                >
                  {link.icon}
                  {link.name}
                  <sup className="text-[#fc8019]">{link.sup}</sup>
                </li>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
