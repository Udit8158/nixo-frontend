import HomePageCarousel from "@/components/home/HomePageCarousel";
import ProductCard from "@/components/product/ProductCard";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      {/* <h1 className="text-center">HOME Page</h1> */}
      <HomePageCarousel />
      <div className='flex justify-center items-center flex-col my-12 gap-3'>
        <h1 className='text-2xl font-semibold'>Coushning for Your Miles</h1>
        <p>A lightweight Nike virtual coppy by Nixo | A virtual shoe brand for everyone</p>
        <p>Made for everyone, made by ❤️</p>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 mb-16 mt-2">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
