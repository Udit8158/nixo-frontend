import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ProductSuggestionCrousel from "@/components/product/ProductSuggestionCrousel";

const ProductDetailsPage = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-5 my-8">
        {/* Left side */}

        <Carousel
          className="productCarousel md:w-6/12"
          showStatus={false}
          showIndicators={false}
          stopOnHover={false}
        >
          <div>
            <img src="../assets/p1.png" className="" />
          </div>
          <div>
            <img src="../assets/p2.png" className="" />
          </div>
          <div>
            <img src="../assets/p3.png" className="" />
          </div>
          <div>
            <img src="../assets/p4.png" className="" />
          </div>
        </Carousel>

        {/* Right side */}
        <div className="flex flex-col md:w-6/12">
          {/* 1. product info */}
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold">Jordan Running Shoe Retro OG</h1>
            <span className="opacity-80 text-sm font-semibold">
              Men's Shoes
            </span>
            <div className="flex flex-col">
              <span className="font-semibolds mt-3">MRP &#8377; 16,599</span>
              <span className="opacity-40">Incl. of taxes</span>
              <span className="opacity-40">{`(Also include all applicable duties)`}</span>
            </div>
          </div>

          {/* 2. product sizes */}
          <div className="grid grid-cols-3 gap-3 mt-8">
            <div className="border-2 rounded-md px-4 py-2 flex justify-center items-center hover:border-black cursor-pointer  transform transition-all  duration-300">
              UK 6
            </div>
          </div>

          {/* 3. Buttons section */}
          <div className="mt-8 flex flex-col">
            <button className="px-6 py-3 hover:opacity-70 rounded-xl bg-black text-white  transform transition-all  duration-300 hover:scale-95">
              Add to cart
            </button>
          </div>

          {/* 4. Prdoduct details */}
          <div className="flex flex-col mt-12 gap-4">
            <h3 className="font-semibold">Product Details</h3>
            <p className="opacity-60">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum,
              laudantium suscipit at vitae doloribus adipisci consequatur
              blanditiis ipsum maiores ea consectetur officia cupiditate in ex
              dolorum voluptates. Non fuga molestias vero. Corrupti repellat
              quasi, a distinctio soluta sit obcaecati odit debitis nostrum vero
              omnis voluptate, iste minus delectus totam dolore assumenda
              accusamus quia inventore facilis quis exercitationem qui corporis.
              Nobis.
            </p>
          </div>
        </div>
      </div>
      {/* Product suggestions */}
      <div className='my-16'>
      <h2 className='font-semibold text-xl'>Related products</h2>
      <ProductSuggestionCrousel />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
