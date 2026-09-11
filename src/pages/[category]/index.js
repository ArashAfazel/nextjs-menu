import MenuCard from "@/componenets/modules/MenuCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import BasketIcon from "@/componenets/modules/BasketIcon";
import { useRouter } from "next/router";
export default function index({ product }) {
  const router=useRouter()
  return (
    <>
      <div className="w-full flex justify-between items-center h-[70px] cream px-3.5 py-1 ">
        <div className=" flex justify-center items-center text-[30px] text-red w-13 h-13 rounded-full border-3 border-red">
          <FontAwesomeIcon icon={faChevronLeft} onClick={()=>router.back()}/>
        </div>
        <BasketIcon color={"red"} />
      </div>
      <MenuCard data={product} />
    </>
  );
}
export async function getStaticPaths(){
  return{
    paths:[
      {params:{category:"Pizza"}},
      {params:{category:"Burgers"}},
      {params:{category:"Sandwiches"}},
      {params:{category:"Fried Chicken"}},
      {params:{category:"Drinks"}}
    ],
    fallback:false
  }
}
export async function getStaticProps({params}) {
  const res = await fetch("http://localhost:3000/products");
  const data = await res.json();
  const product=data[params.category]
  console.log(product)
  return {
    props: {
      product,
    },
  };
}
