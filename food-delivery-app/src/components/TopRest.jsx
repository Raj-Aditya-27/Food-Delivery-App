import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "./Card";
import { data } from "../utilities/constants";

function TopRest() {
  // const [data, setdata] = useState([]);
  const [slide, setslide] = useState(0)

  const nextSlide = ()=>{
    console.log("next")
    if(data.length-3==slide) return false;
    setslide(slide+3);
  }


  const prevSlide = ()=>{
    if(slide==0) return false;
    setslide(slide-3);
  }




  // const fetchTopRestaurant = async () => {
  //   const rest = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const json = await rest.json();

  //   console.log(json);

  //   setdata(
  //     json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  // };

  console.log(data);

  // useEffect(() => {
  //   fetchTopRestaurant();
  // }, []);

  return (
    <div className="max-w-[1000px]  mx-auto  px-2">
      <div className="flex justify-between items-center my-5">
        <div className="text-[25px] font-bold">Top Restaurants in your city</div>
        <div className="flex">
          <div  onClick={prevSlide} className="flex border w-[30px] h-[30px] items-center justify-center rounded-full mx-2 cursor-pointer bg-[#e2e2e7]">
            <FaArrowLeft />
          </div>
          <div  onClick={nextSlide} className="flex border w-[30px] h-[30px] items-center justify-center rounded-full mx-2 cursor-pointer bg-[#e2e2e7]">
            <FaArrowRight />
          </div>
        </div>
      </div>

      <div className="flex gap-5 overflow-hidden">
      {
            data.map((res,index)=>{
                return index!=20 && <Card key={res.info.id} styleProperty={{transform:`translate(-${slide*100}%)`}} resName={res}/>
            })
        }
      </div>
      <hr className="my-6 border-[1px]" />
    </div>
  );
}

export default TopRest;
