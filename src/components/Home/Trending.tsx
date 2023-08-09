import React from "react";
import Link from "next/link";
import Image from "next/image";

type Category = {
  id: number;
  img: string;
  title: string;
  cat: string;
};

const categories: Category[] = [
  {
    id: 1,
    img: "/images/sunglass.jpeg",
    title: "SUNGLASS LOVE",
    cat: "sunglass",
  },
  {
    id: 2,
    img: "/images/party.jpg",
    title: "PARTY SHIRT",
    cat: "jeans",
  },
  {
    id: 3,
    img: "/images/jeans.jpg",
    title: "JEANS",
    cat: "jackets",
  },
  {
    id: 3,
    img: "/images/jeans.jpg",
    title: "JEANS",
    cat: "jackets",
  },
  // Add more categories
];

const Trending: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="sm:text-[30px] lg:text-[50px] font-semibold my-6 text-center text-[#005566]">
        #Trending
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((item) => (
          <div key={item.id} className="relative group">
            <div className="relative w-full h-[500px]">
              <Image
                src={item.img}
                objectFit="cover"
                layout="fill"
                alt={item.title}
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-40 group-hover:scale-105"></div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h1 className="text-white text-lg font-semibold mb-2">
                {item.title}
              </h1>
              <Link href={`/products/${item.cat}`}>
                <button className="w-32 py-2 px-4 bg-white font-semibold rounded-lg shadow-md transition-transform duration-300 hover:bg-lightcyan transform hover:scale-105">
                  SHOP NOW
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
