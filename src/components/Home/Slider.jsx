"use client";
// import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
// import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

import { useState } from "react";
import { sliderItems } from "../../data";
import Image from "next/image";
// const Container = styled.div`
//   width: 100%;
//   height: 80vh;
//   display: flex;
//   background-color: lightcyan;
//   position: relative;
//   overflow: hidden;
//   ${mobile({ display: "none" })}
// `;
// const Arrow = styled.div`
//   width: 50px;
//   height: 50px;
//   background-color: lightgray;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: ${(props) => props.direction === "left" && "10px"};
//   right: ${(props) => props.direction === "right" && "10px"};
//   margin: auto;
//   cursor: pointer;
//   opacity: 0.5;
//   z-index: 2;
// `;
// const div = styled.div`
//   height: 100%;
//   display: flex;
//   transition: all 1.5s ease;
//   transform: translateX(${(props) => props.slideIdx * -100}vw);
// `;
// const Slide = styled.div`
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   background-color: #${(props) => props.bg};
// `;
// const div = styled.div`
//   height: 100%;
//   flex: 1;
//   margin: 0px 0px 0px 200px;
// `;
// const Image = styled.img`
//   height: 80%;
// `;
// const div = styled.div`
//   flex: 1;
//   padding: 50px;
// `;
// const Title = styled.h1`
//   font-size: 70px;
// `;
// const Desc = styled.p`
//   margin: 50px 0px;
//   font-size: 20px;
//   font-weight: 500;
//   letter-spacing: 3px;
// `;
// const Button = styled.button`
//   padding: 1.1rem;
//   font-size: 1.25rem;
//   background-color: transparent;
//   letter-spacing: 1.5px;
//   font-weight: 500;
//   color: #000;
//   background-color: #fff;
//   border: none;
//   border-radius: 2.6rem;
//   box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
//   transition: all 0.3s ease 0s;
//   cursor: pointer;
//   outline: none;

//   &:hover {
//     background-color: #2ee59d;
//     box-shadow: #${(props) => props.bg};
//     color: #fff;
//     transform: translateY(-7px);
//   }
// `;

const Slider = () => {
  const [slideIdx, setSlideIdx] = useState(0);
  const handleClick = (direction) => {
    const size = sliderItems.length;
    if (direction === "left") {
      setSlideIdx(slideIdx > 0 ? slideIdx - 1 : size - 1);
    } else {
      setSlideIdx(slideIdx >= size - 1 ? 0 : slideIdx + 1);
    }
  };
  return (
    <div className="w-full h-[80vh] flex bg-cyan-400 relative overflow-hidden">
      <div
        onClick={() => handleClick("left")}
        class="w-50 h-50 bg-lightgray rounded-full flex items-center justify-center absolute top-0 bottom-0 left-3 m-auto cursor-pointer opacity-50 z-2"
      >
        {/* <ArrowLeftOutlinedIcon /> */}
      </div>
      <div
        className={`h-full flex transition-all duration-1500 ease transform translate-x-[${
          slideIdx * -100
        }vw]`}
      >
        {sliderItems.map((item) => (
          <div
            key={item.id}
            className={`h-screen w-screen flex items-center bg:[${item.bg}]`}
          >
            <div className="h-full flex-1 ml-200 ">
              {/* <Image
                src={item.img}
                className="h-[80%] w-full"
                width={20}
                height={10}
                alt={item.title}
              /> */}
            </div>
            <div className="flex-1 p-12">
              <h1 className="text-[70px]">{item.title}</h1>
              <p className="my-50 text-20 font-semibold tracking-wider">
                {item.desc}
              </p>
              <button
                bg={item.bg}
                className="px-4 py-3 text-lg bg-transparent tracking-wider font-semibold text-black bg-white border-none rounded-full shadow-lg transition-all duration-300 ease-in-out focus:outline-none hover:shadow-xl"
              >
                SHOP NOW
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        className="w-50 h-50 bg-lightgray rounded-full flex items-center justify-center absolute top-0 bottom-0 right-3 m-auto cursor-pointer opacity-50 z-2"
        onClick={() => handleClick("right")}
      >
        {/* <ArrowRightOutlinedIcon /> */}
      </div>
    </div>
  );
};

export default Slider;
