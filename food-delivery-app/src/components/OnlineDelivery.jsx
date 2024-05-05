import React, { useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import Card from "./Card";

import { data } from "../utilities/constants";

function OnlineDelivery() {
  // const [data, setdata] = useState([]);
  

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

  // useEffect(() => {
  //   fetchTopRestaurant();
  // }, []);

  return (
    <div className="max-w-[1000px]  mx-auto  px-2">
      <div className="flex justify-between items-center my-5">
        <div className="text-[25px] font-bold">
          Restaurants with online food delivery in your city
        </div>
      </div>
      <div className=" md:grid-cols-3 md:grid flex flex-wrap gap-3 md:flex-col items-center justify-center md:gap-3">
        {data.length > 0 ? (
          data.map((res) => {
            return <Card key={res.info.id} resName={res} />;
          })
        ) : (
          <p>No restaurants available</p>
        )}
      </div>
      <hr className="my-6 border-[1px]" />
    </div>
  );
}

export default OnlineDelivery;
