import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ProductSuggestionCrousel from "@/components/product/ProductSuggestionCrousel";
import fetcher from "@/utils/fetchData";
import { ReactMarkdown } from "react-markdown/lib/react-markdown"; // for showing the markdown text into html code

const ProductDetailsPage = ({ productData, sameSubTitleProducts }) => {
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
          {productData?.images?.data.map(({ attributes: img }) => (
            <div key={img?.name}>
              <img src={img?.formats?.large?.url} className="" />
            </div>
          ))}
        </Carousel>

        {/* Right side */}
        <div className="flex flex-col md:w-6/12">
          {/* 1. product info */}
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold">{productData.name}</h1>
            <span className="opacity-80 text-sm font-semibold">
              {productData.subTitle}
            </span>
            <div className="flex flex-col">
              <span className="font-semibolds mt-3">
                MRP &#8377; {productData.price}
              </span>
              <span className="opacity-40">Incl. of taxes</span>
              <span className="opacity-40">{`(Also include all applicable duties)`}</span>
            </div>
          </div>

          {/* 2. product sizes */}
          <div className="grid grid-cols-3 gap-3 mt-8">
            {productData?.sizes?.data?.map((s) => (
              <div
                className={`border-2 rounded-md px-4 py-2 flex justify-center items-center hover:border-black cursor-pointer transform transition-all  duration-300
                ${
                  !s.enabled &&
                  "bg-gray-400 cursor-not-allowed hover:border-red-500"
                }
            `}
                key={Math.random()}
              >
                {s.size}
              </div>
            ))}
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
              <ReactMarkdown>{productData.description}</ReactMarkdown>
            </p>
          </div>
        </div>
      </div>
      {/* Product suggestions */}
      <div className="my-16">
        <h2 className="font-semibold text-xl mb-6">Related products</h2>
        <ProductSuggestionCrousel sameSubTitleProducts={sameSubTitleProducts} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;

// define the paths which only can be accessable by the id of unique products
export async function getStaticPaths() {
  // Getting all the products data
  const { data: productsData } = await fetcher("GET", "api/products");

  // Creates the paths from the products id
  const pathsData = productsData?.map((prod) => {
    // return the object formatted in docs
    return {
      params: {
        slug: `${prod?.attributes?.productId}`,
      },
    };
  });

  return {
    paths: pathsData,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  // Fetching the actual product data
  const { data } = await fetcher(
    "GET",
    `api/products?populate=*&filters[productId][$eq]=${params.slug}`
  );
  // define the subtitle of the product
  const productSubtitle = data[0].attributes.subTitle;
  // fetch the products with same subTitle
  const sameSubTitleProducts = await fetcher(
    "GET",
    `api/products?populate=*&filters[subTitle][$eq]=${productSubtitle}`
  );

  return {
    props: {
      productData: data[0].attributes, // send only the data object of the product
      sameSubTitleProducts: sameSubTitleProducts.data,
    },
  };
}
