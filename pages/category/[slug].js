import ProductCardContainer from "@/components/product/ProductCardContainer";
import fetcher from "@/utils/fetchData";
import { useRouter } from "next/router";
import React from "react";

const CategoryPage = ({ productsData, categoryName }) => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      <h1 className='font-semibold text-3xl my-16 text-center'>{categoryName}</h1>
      <ProductCardContainer productsData={productsData} />
    </div>
  );
};

export default CategoryPage;

export async function getStaticPaths() {
  const { data: categoryData } = await fetcher(
    "GET",
    "api/categories?populate=*"
  );
  // console.log('DDDD', categoryData)

  const pathsData = categoryData?.map((cat) => {
    // console.log('category', cat)
    return {
      params: {
        slug: `${cat?.attributes?.categoryId}`,
      },
    };
  });
  // console.log('pathsData', pathsData)

  return {
    paths: pathsData,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const {data: categoryData} = await fetcher("GET",`api/categories?filters[categoryId]=${params.slug}`)
  const { data } = await fetcher(
    "GET",
    `api/products?populate=*&filters[categories][categoryId][$eq]=${params.slug}`
  );

  // console.log(data);

  return {
    props: {
      productsData: data,
      categoryName: categoryData[0].attributes?.categoryName
    },
  };
}
