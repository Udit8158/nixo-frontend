import React from "react";

const AboutPage = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            Shoes for Everyone
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e248cb89-2222-49d9-a9d5-d38193863e79/air-force-1-07-shoes-WrLlWX.png"
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_436,c_limit/3849dd2c-8aae-4db2-9f66-6061af0c6aad/pro-dri-fit-tights-ntdHDx.png"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/755a46c0-b4ee-4927-bccf-f58a712b8014/pdp.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_436,c_limit/ccab65b4-5c11-40b6-9e7b-dcab8a3d6562/air-jordan-1-mid-se-shoes-1D10l1.png"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_436,c_limit/ce27aca7-c615-43dc-aa9a-e7e96d8273fa/free-run-5-road-running-shoes-m8L9mr.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
