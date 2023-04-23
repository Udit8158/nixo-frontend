import HomePageCarousel from "@/components/home/HomePageCarousel";
import ProductCardContainer from "@/components/product/ProductCardContainer";
import { setAllCartData } from "@/store/cartSlice";
import fetcher from "@/utils/fetchData";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ productsData }) {
 
  return (
    <div className="">
      {/* <h1 className="text-center">HOME Page</h1> */}
      <HomePageCarousel />
      <div className="flex justify-center items-center flex-col my-12 gap-3">
        <h1 className="text-2xl font-semibold">
          Coushning for Your Miles With Nixo
        </h1>
        <p>
          A lightweight Nike virtual coppy by Nixo | A virtual shoe brand for
          everyone
        </p>
        <p>Made for everyone, made by ❤️</p>
      </div>
      <ProductCardContainer productsData={productsData} />
      {/* Pagination // TODO: Pagination */}
      {/* <div className="flex justify-between items-center w-11/12 md:w-6/12 lg:w-4/12 mx-auto my-8">
        <button className="px-6 py-3 hover:opacity-70 rounded-xl bg-black text-white  transform transition-all  duration-300 hover:scale-95">
          Previous
        </button>
        <p>1 of 3</p>
        <button className="px-6 py-3 hover:opacity-70 rounded-xl bg-black text-white  transform transition-all  duration-300 hover:scale-95">
          Next
        </button>
      </div> */}
    </div>
  );
}

export async function getStaticProps(context) {
  const page = 1;
  // getting all products data from server
  const {
    data: productsData,
    meta: { pagination },
  } = await fetcher(
    "GET",
    `api/products?populate=*&pagination[pageSize]=20&sort[0]=id&pagination[page]=${page}`
  );

  return {
    props: {
      productsData,
    },
  };
}
