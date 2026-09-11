import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import { useCart } from "@/contexts/shopBasketContext";

export default function MenuCard({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const item = data[currentIndex];
  const [selectedSize, setSelectedSize] = useState("");
  const [count, setCount] = useState(1);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const totalPrice = Math.round( count * item.price * 100)/100
  const { addToCart } = useCart();
  const addHandler = () => {
    addToCart({
      id: item.id,
      img: item.image,
      title: item.title,
      count,
      size: selectedSize,
      totalPrice,
    });
    setCount(1);
    setSelectedSize("");
  };
  
  return (
    <>
      <div className="w-full cream  pb-8 relative">
        <div>
          <h2 className="flex justify-center font-bold  text-[25px]">
            {item.title}
          </h2>
          <p className="flex justify-center text-[20px]">{item.tagline}</p>
        </div>
        <Swiper
          className="mySwiper"
          loop={true}
          onSlideChange={(swiper) => {
            setCurrentIndex(swiper.realIndex);
            setCount(1);
            setSelectedSize("");
          }}
        >
          {data.map((p) => (
            <SwiperSlide key={p.id}>
              <div className="w-full flex justify-center">
                <img className="w-60" src={p.image} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <svg
          className="absolute -bottom-0.5 h-10 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#7f011f"
            d="M0,0 C360,130 1080,130 1440,0 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
      <div>
        <div className="mt-1.5">
          <div className="flex justify-center gap-3">
            <div
              onClick={() => setSelectedSize("S")}
              className={`${selectedSize == "S" ? "red border-4 text-cream border-cream" : ""} w-12 h-12 rounded-full cream flex justify-center items-center font-bold text-[20px]`}
            >
              S
            </div>
            <div
              onClick={() => setSelectedSize("M")}
              className={`${selectedSize == "M" ? "red border-4 text-cream border-cream" : ""} w-12 h-12 rounded-full cream flex justify-center items-center font-bold text-[20px]`}
            >
              M
            </div>
            <div
              onClick={() => setSelectedSize("L")}
              className={`${selectedSize == "L" ? "red border-4 text-cream border-cream" : ""} w-12 h-12 rounded-full cream flex justify-center items-center font-bold text-[20px]`}
            >
              L
            </div>
          </div>
          <div className="flex justify-center mt-3.5">
            <p className="text-cream text-[20px] text-center px-3">
              {item.description}
            </p>
          </div>
        </div>

        <div className="flex mt-7 px-3 justify-between items-center">
          <div className="flex gap-x-3 items-center">
            <button
              onClick={increase}
              className="w-10 h-10 rounded-full  border-3 border-cream flex justify-center items-center font-bold text-[21px] text-cream"
            >
              +
            </button>
            <span className="flex justify-center items-center text-[22px] text-cream font-bold">
              {count}
            </span>
            <button
              onClick={decrease}
              className="w-10 h-10 rounded-full  border-3  border-cream flex justify-center items-center font-bold text-[30px] text-cream"
            >
              -
            </button>
          </div>

          <span className="text-cream font-bold text-[21px]">
            {totalPrice} $
          </span>

          <div className="flex justify-center items-center ">
            <button
              onClick={addHandler}
              className="text-red text-[18px] cream px-2 py-1.5 rounded-3xl font-bold cursor-pointer"
            >
              Add To Basket
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
