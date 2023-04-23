import React from 'react';

const Product = () => {
  return (
    <>
      <div className="group mb-4">
        <a href="/product/:id">
          <div className=" pb-[100%] overflow-hidden relative">
            <img
              src="https://cdn.shopify.com/s/files/1/0612/2477/9832/products/Varsity-C_Cap-Corduroy-Yellow_Front_1080x_6fe179e1-b3f3-452b-a2d4-ee0c1d70e7c9.webp?v=1676406573&width=360"
              className="absolute rounded-lg w-full h-full object-cover "
              alt="cap"
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0612/2477/9832/products/Varsity-C_Cap-Corduroy-Yellow_Back_1080x_84d2dd15-2063-485f-b46a-a071d8e2b1ea.webp?v=1676406573"
              className="absolute rounded-lg w-full h-full object-cover invisible lg:group-hover:visible transition duration-500 ease-in-out hover:scale-110"
              alt="cap"
            />
          </div>
          <div className="card_infromation">
            <h3 className="group-hover:underline text-sm">
              Cap Ebbets Corduroy
            </h3>
            <p className="">$48.00 CAD</p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Product;
