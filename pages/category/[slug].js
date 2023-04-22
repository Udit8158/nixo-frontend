import ProductCardContainer from "@/components/product/ProductCardContainer";
import fetcher from "@/utils/fetchData";
import React from "react";

const CategoryPage = ({ productsData, categoryName }) => {
  return (
    <div>
      <h1 className="font-semibold text-3xl my-16 text-center">
        {categoryName}
      </h1>
      <ProductCardContainer productsData={productsData} />
    </div>
  );
};

export default CategoryPage;

// define the paths can be posssible with /category
export async function getStaticPaths() {
  // fetch all categories
  const { data: categoryData } = await fetcher(
    "GET",
    "api/categories?populate=*"
  );

  // makes paths from categoryid
  const pathsData = categoryData?.map((cat) => {
    return {
      params: {
        slug: `${cat?.attributes?.categoryId}`,
      },
    };
  });

  return {
    paths: pathsData,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  // fetch the particula category data
  const { data: categoryData } = await fetcher(
    "GET",
    `api/categories?filters[categoryId]=${params.slug}`
  );
  // fetch the products from the particular caterory data
  const { data } = await fetcher(
    "GET",
    `api/products?populate=*&filters[categories][categoryId][$eq]=${params.slug}`
  );

  return {
    props: {
      productsData: data,
      categoryName: categoryData[0].attributes?.categoryName,
    },
  };
}
