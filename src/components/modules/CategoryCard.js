import Link from "next/link";
export default function CategoryCard({item}) {
  return (
    <>
        <Link href={`/${item.title}`} className="w-full flex justify-center">
          <div className="w-[80%] h-[110px] cream rounded-2xl flex items-center  shadow-2xl shadow-black px-1">
            <img className="h-[90%] w-[40%]" src={item.img} />
            <p className="w-[55%] text-center text-[28px] ">{item.title}</p>
          </div>
        </Link>
    </>
  );
}
