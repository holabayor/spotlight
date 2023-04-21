import React from 'react';

const Product = () => {
  return (
    <>
      <div className="card_media py-2">
        <img
          src="https://cdn.shopify.com/s/files/1/0612/2477/9832/products/Varsity-C_Cap-Corduroy-Yellow_Back_1080x_84d2dd15-2063-485f-b46a-a071d8e2b1ea.webp?v=1676406573"
          className=" rounded-[30px]"
          alt="cap"
        />
      </div>
      <div className="card_infromation">
        <h3 className="text-lg font-semibold">Varsity C Cap Corduroy</h3>
        <p className="text-sm text-gray-500">Yellow</p>
      </div>
    </>
  );
};

export default Product;
