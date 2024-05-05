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
import { CiGps } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

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
      icon: <FaBox />,
      name: "Swiggy Corporate",
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
          zIndex: 9999999,
        }}
        onClick={hideSideMenu}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[400px] bg-white h-full absolute duration-[400ms] flex flex-col justify-start items-center pt-16"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        > 
        <div className="absolute top-5 left-9 cursor-pointer" onClick={hideSideMenu}><RxCross1 className="w-[20px] h-[20px]"/></div>
        <div><input type="text" className="border h-[56px] w-[332px] pl-3 font-semibold outline-none"  placeholder="Search for area, street name"/></div>
        <div className="border w-[332px] h-[80px] mt-4 flex flex-col justify-center items-start pl-3">
          <div className="flex items-center gap-2 text-medium">
          <CiGps className="w-[20px] h-[20px]"/>
          <p>Get Current location</p>
          </div>
          <span className="text-gray-500 pl-6">using GPS</span>
        </div>
        </div>
      </div>
      <header className="p-[15px] shadow-xl text-[#686b78] sticky top-0 bg-white z-[999]">
        <div className="max-w-[1200px]  mx-auto  flex items-center">
          <div className="w-[60px] mr-2">
            <svg
              className="_8pSp-  cursor-pointer duration-100"
              viewBox="0 0 559 825"
              height={49}
              width={34}
              fill="#fc8019"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M542.92 388.542C546.805 366.526 542.355 349.598 530.881 340.76C513.621 327.466 487.698 320.236 425.954 320.236C380.271 320.236 331.225 320.286 310.268 320.275C308.322 319.894 301.285 317.604 301.02 309.112L300.734 174.289C300.727 165.779 307.531 158.857 315.943 158.839C324.369 158.825 331.204 165.723 331.211 174.226C331.211 174.226 331.421 247.414 331.441 273.424C331.441 275.936 332.892 281.8 338.549 283.328C375.43 293.267 561.865 285.999 558.967 251.804C543.147 109.96 424.476 0 280.394 0C235.021 0 192.065 10.9162 154.026 30.2754C62.9934 77.5955 -1.65904 173.107 0.0324268 283.43C1.23215 361.622 52.2203 500.605 83.434 521.234C97.8202 530.749 116.765 527.228 201.484 527.228C239.903 527.228 275.679 527.355 293.26 527.436C295.087 527.782 304.671 530.001 304.671 538.907L304.894 641.393C304.915 649.907 298.104 656.826 289.678 656.829C281.266 656.843 274.434 649.953 274.42 641.446C274.42 641.446 275.17 600.322 275.17 584.985C275.17 581.435 275.424 575.339 265.178 570.727C231.432 555.553 121.849 564.712 115.701 581.457C113.347 587.899 125.599 612.801 144.459 644.731C170.102 685.624 211.889 747.245 245.601 792.625C261.047 813.417 268.77 823.813 280.467 824.101C292.165 824.389 300.514 814.236 317.213 793.928C383.012 713.909 516.552 537.663 542.92 388.542Z"
                fill="url(#paint0_linear_19447_66107)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_19447_66107"
                  x1="445.629"
                  y1="63.8626"
                  x2="160.773"
                  y2="537.598"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF993A" />
                  <stop offset={1} stopColor="#F15700" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div>
            <span
              
              className="font-bold border-b-[3px] border-[black] hover:text-[#fc8019] hover:border-[#fc8019] cursor-pointer"
            >
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
                  className="hidden md:flex items-center justify-around gap-1 hover:text-[#fc8019] cursor-pointer"
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
