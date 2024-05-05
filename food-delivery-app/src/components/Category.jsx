import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function Category() {
  // const [category, setcategory] = useState([]);
  const [slide, setslide] = useState(0);

  const nextSlide = () => {
    if (20 - 8 == slide) return false;
    setslide(slide + 3);
  };

  const prevSlide = () => {
    if (slide == 0) return false;
    setslide(slide - 3);
  };

  const CARD_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const json = await data.json();

  //   setcategory(
  //     json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
  //   );

  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const dish = [
    {
      id: "750237",
      imageId: "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Poori.png",
    },
    {
      id: "750132",
      imageId: "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
    },
    {
      id: "749879",
      imageId:
        "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Chole_Bature.png",
    },
    {
      id: "750203",
      imageId:
        "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png",
    },
    {
      id: "750644",
      imageId: "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
    },
    {
      id: "750217",
      imageId:
        "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png",
    },
    {
      id: "749874",
      imageId: "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
    },
    {
      id: "750239",
      imageId:
        "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png",
    },
    {
      id: "750562",
      imageId: "v1674029842/PC_Creative%20refresh/3D_bau/banners_new/Vada.png",
    },
    {
      id: "750205",
      imageId:
        "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Parotta.png",
    },
    {
      id: "749761",
      imageId:
        "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Khichdi.png",
    },
    {
      id: "750233",
      imageId:
        "v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Pongal.png",
    },
    {
      id: "750592",
      imageId: "v1675667625/PC_Creative%20refresh/Biryani_2.png",
    },
    {
      id: "750223",
      imageId: "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
    },
    {
      id: "750259",
      imageId:
        "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rasgulla.png",
    },
    {
      id: "750209",
      imageId:
        "v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Pastry.png",
    },
    {
      id: "750605",
      imageId: "rng/md/carousel/production/cbb85a3c1684891105294d11f8359996",
    },
    {
      id: "750226",
      imageId: "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Salad.png",
    },
    {
      id: "749763",
      imageId: "v1674029844/PC_Creative%20refresh/3D_bau/banners_new/Lassi.png",
    },
    {
      id: "750593",
      imageId:
        "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Gulab_Jamun.png",
    },
  ];

  return (
    <div className="max-w-[1000px]  mx-auto  px-2">
      <div className="flex justify-between items-center my-5">
        <div className="text-[25px] font-bold">What's on your mind?</div>
        <div className="flex">
          <div
            onClick={prevSlide}
            className="flex border w-[30px] h-[30px] items-center justify-center rounded-full mx-2 cursor-pointer bg-[#e2e2e7]"
          >
            <FaArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="flex border w-[30px] h-[30px] items-center justify-center rounded-full mx-2 cursor-pointer bg-[#e2e2e7]"
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex  overflow-hidden">
        {dish.map((dish) => {
          return (
            <div
              key={dish.id}
              style={{
                transform: `translate(-${slide * 100}%)`,
              }}
              className="w-[125px] shrink-0 duration-500"
            >
              <img src={CARD_URL + dish.imageId} alt="dish" />
            </div>
          );
        })}
      </div>
      <hr className="my-6 border-[1px]" />
    </div>
  );
}

export default Category;
