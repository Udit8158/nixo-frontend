import HomePageCarousel from "@/components/home/HomePageCarousel";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className='h-[1000px]'>
    {/* <h1 className="text-center">HOME Page</h1> */}
      <HomePageCarousel/>
    </div>
  );
}
