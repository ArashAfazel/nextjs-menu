import { Lobster } from "next/font/google";
import CategoryCard from "@/components/modules/CategoryCard";
const lobster = Lobster({ subsets: ["latin"], weight: ["400"] });
export default function Home() {
      const categories = [
    { id: 1, title: "Pizza", img: "/images/category/pizza.png" },
    { id: 2, title: "Burgers", img: "/images/category/burger.png" },
    { id: 3, title: "Sandwiches", img: "/images/category/sandwich.png" },
    { id: 4, title: "Fried Chicken",img: "/images/category/friedchicken.png"},
    { id: 5, title: "Drinks", img: "/images/category/drink.png" },
  ];
  return (
    <>
      <div className="w-full  flex justify-between items-center px-2.5">
        <div className="flex items-center ">
          <img className=" w-[140px] h-[100px] " src="/images/logo.gif" />
          <p className={`flex items-center ${lobster.className} text-[20px] text-cream`}>
            BrandLogo
          </p>
        </div>
      </div>

      <div className={`w-full  flex flex-col items-center  gap-y-5 ${lobster.className}`}>
        {categories.map(item=>(
          <CategoryCard item={item} />
        ))}
      </div>
    </>
  );
}
