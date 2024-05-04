import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function Category() {
  const [category, setcategory] = useState([]);
  const [slide, setslide] = useState(0)

  const nextSlide = ()=>{
    if(category.length-8==slide) return false;
    setslide(slide+3);
  }

  const prevSlide = ()=>{
    if(slide==0) return false;
    setslide(slide-3);
  }

  const CARD_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    
    setcategory(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
  
  };


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-[1000px]  mx-auto  ">
      <div className="flex justify-between items-center my-5">
        <div className="text-[25px] font-bold">What's on your mind?</div>
        <div className="flex">
          <div onClick={prevSlide} className="flex border w-[30px] h-[30px] items-center justify-center rounded-full mx-2 cursor-pointer bg-[#e2e2e7]">
            <FaArrowLeft />
          </div>
          <div onClick={nextSlide} className="flex border w-[30px] h-[30px] items-center justify-center rounded-full mx-2 cursor-pointer bg-[#e2e2e7]">
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex  overflow-hidden">
        {category.map((dish) => {
          return (
            <div key={dish.id} style={{
              transform:`translate(-${slide*100}%)`
            }} className="w-[125px] shrink-0 duration-500">
              <img src={CARD_URL + dish.imageId} alt="dish" />
            </div>
          );
        })}
      </div>
      <hr className="my-6 border-[1px]"/>
    </div>
  );
}

export default Category;
