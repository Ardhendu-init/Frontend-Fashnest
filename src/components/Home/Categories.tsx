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
    title: "PARTY SHIRT!",
    cat: "jeans",
  },
  {
    id: 3,
    img: "/images/jeans.jpg",
    title: "JEANS",
    cat: "jackets",
  },
];

const Categories: React.FC = () => {
  return (
    <div className="flex space-x-3 p-5 text-[#005566]">
      {categories.map((item) => (
        <div key={item.id} className="flex-1 relative h-70vh">
          <div className="relative h-full w-full group">
            <Image
              src={item.img}
              height={300}
              width={300}
              objectFit="cover"
              alt={item.title}
              className="h-full w-full transition-all duration-300 group-hover:cursor-pointer"
            />
            <div className="absolute bottom-20 left-[30%] rounded-lg w-fit h-fit flex flex-col items-center px-7 py-4 justify-center bg-[#4acae4]">
              <h1 className="text-white mb-3">{item.title}</h1>
              <Link href={`/products/${item.cat}`}>
                <button className="w-32 py-2 px-4 bg-white font-semibold rounded-lg shadow-md transition-transform duration-300 hover:bg-lightcyan transform hover:scale-105">
                  SHOP NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
