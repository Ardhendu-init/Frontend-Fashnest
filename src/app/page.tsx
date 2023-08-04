import Image from "next/image";
import Slider from "@/components/Home/Slider";
import Categories from "@/components/Home/Categories";

export default function Home() {
  return (
    <main>
      <Slider />
      <Categories />
    </main>
  );
}
