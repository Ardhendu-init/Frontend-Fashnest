"use client";
import { useState } from "react";
import Image from "next/image";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

// Define the type for each item in the slider
type SliderItem = {
  id: number;
  bg: string;
  img: string;
  title: string;
  desc: string;
};

const sliderItems: SliderItem[] = [
  {
    id: 1,
    img: "/images/slide1.png",
    title: "SUMMER SALE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "#fff3e0",
  },
  {
    id: 2,
    img: "/images/slide2.png",
    title: "Indian Traditional",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "#c5e1a5",
  },
  {
    id: 3,
    img: "/images/slide3.png",
    title: "Formal Men",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "#f5f5f5",
  },
];

const Slider: React.FC = () => {
  const [slideIdx, setSlideIdx] = useState<number>(0);

  const handleClick = (direction: "left" | "right") => {
    const size = sliderItems.length;
    if (direction === "left") {
      setSlideIdx((slideIdx - 1 + size) % size);
    } else {
      setSlideIdx((slideIdx + 1) % size);
    }
  };

  return (
    <div className="w-full sm:h-[50vh] md:h-[70vh] mt-14 relative overflow-hidden text-[#005566]">
      <div
        onClick={() => handleClick("left")}
        className="w-10 h-10 z-5 hover:bg-gray-300 rounded-[50%] absolute top-[55%] ml-5 flex justify-center items-center cursor-pointer"
      >
        <ArrowLeftOutlinedIcon />
      </div>
      <div className="slider">
        {sliderItems.map((item, index) => (
          <div
            key={item.id}
            className={`${
              index === slideIdx ? "flex" : "hidden"
            } justify-center`}
            style={{ backgroundColor: item.bg }}
          >
            <div className=" container flex  items-center  ">
              <div className="ml-20 w-full flex-1 object-cover p-5">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={300}
                  className=" sm:max-w-full sm:max-h-full"
                />
              </div>
              <div className="flex-1 flex flex-col  items-start">
                <h1 className="sm:text-[40px] lg:text-[70px]">{item.title}</h1>
                <p className="text-20 font-semibold ">{item.desc}</p>
                <button className="mt-6 px-4 py-3 text-lg bg-transparent  font-semibold  bg-white border-none rounded-full shadow-lg transition-all duration-300 ease-in-out focus:outline-none hover:shadow-xl">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        onClick={() => handleClick("right")}
        className="w-10 h-10 z-5 hover:bg-gray-300 rounded-[50%] absolute top-[55%] right-0 mr-5 flex justify-center items-center cursor-pointer"
      >
        <ArrowRightOutlinedIcon />
      </div>
    </div>
  );
};

export default Slider;
