import React from "react";
import SendIcon from "@mui/icons-material/Send";

const Newsletter: React.FC = () => {
  return (
    <div className="bg-[#fcf5f5] py-12 text-[#005566]">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="sm:text-[30px] lg:text-[50px]">Newsletter</h1>
        <div className="text-[20px]   mb-6 text-center ">
          Get timely updates from your favorite products.
        </div>
        <div className="w-full md:w-2/3 max-w-md flex items-center border border-lightgray rounded-lg">
          <input
            className="w-full p-3 border-none rounded-l-lg focus:outline-none"
            type="text"
            placeholder="Your email"
          />
          <button className="bg-teal  p-3 rounded-r-lg">
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
