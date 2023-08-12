import Image from "next/image";
import Link from "next/link";
import React from "react";

const categories = [
  { id: "jeans", name: "Jeans", image: "/images/category/jeans.jpg" },
  { id: "tshirt", name: "T-shirt", image: "/images/category/tshirt.jpg" },
  { id: "shirt", name: "Shirt", image: "/images/category/shirt.jpg" },
  { id: "jacket", name: "Jacket", image: "/images/category/jacket.jpg" },
  { id: "saree", name: "Saree", image: "/images/category/saree.jpg" },
  { id: "sunglass", name: "Sunglass", image: "/images/category/sunglass.jpg" },
  { id: "shoes", name: "Shoes", image: "/images/category/shoes.jpg" },
  { id: "bags", name: "Bags", image: "/images/category/bags.jpg" },
  {
    id: "wrist-watch",
    name: "Wrist-Watch",
    image: "/images/category/wrist-watch.jpg",
  },
  { id: "caps", name: "Caps", image: "/images/category/jacket.jpg" },
  // Add more categories here
];

const Categories: React.FC = () => {
  return (
    <section className="py-8 px-4">
      <h2 className="sm:text-[30px] lg:text-[50px] font-semibold my-6 text-center text-[#005566]">
        Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.id}`}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="relative">
              <Image
                src={category.image}
                alt={category.name}
                width={300} // Adjust width as needed
                height={400} // Adjust height as needed
                objectFit="cover" // Use object-fit for cover
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-40">
                <p className="text-white text-3xl font-semibold">
                  {category.name}
                </p>
              </div>
            </div>
            {/* <div className="p-2 bg-white">
              <p className="text-gray-800 text-sm font-medium">
                {category.name}
              </p>
            </div> */}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
