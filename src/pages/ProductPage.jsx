import React from 'react';

const ProductPage = () => {
  return (
    <>
      <div className="border-b-2">
        <div className="flex flex-col items-center justify-center">
          <div className="max-[65%]">
            <div className="">
              <img
                src="https://cdn.shopify.com/s/files/1/0612/2477/9832/products/Varsity-C_Cap-Corduroy-Yellow_Front_1080x_6fe179e1-b3f3-452b-a2d4-ee0c1d70e7c9.webp?v=1676406573&width=360"
                className="rounded-lg w-full h-full object-cover "
                alt="cap"
              />
            </div>
            <img
              src="https://cdn.shopify.com/s/files/1/0612/2477/9832/products/Varsity-C_Cap-Corduroy-Yellow_Back_1080x_84d2dd15-2063-485f-b46a-a071d8e2b1ea.webp?v=1676406573"
              className="rounded-lg w-full h-full object-cover"
              alt="cap"
            />
          </div>
          <div className="max-[35%]">
            <div>
              <h1>Cap Ebbets Cordury</h1>
              <p>$48.00 CAD</p>
            </div>
            <div className="border-black border-4 flex flex-col">
              <span>Quantity</span>
              <button className="border-black relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  className="before:content-['*'] absolute w-4 h-4 p-0 left-0 top-5"
                  fill="none"
                  viewBox="0 0 10 2"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M.5 1C.5.7.7.5 1 .5h8a.5.5 0 110 1H1A.5.5 0 01.5 1z"
                    fill="currentColor"
                  ></path>
                </svg>
                <input type="number" min={1} max={50} className="p-4" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  className="after:content-['*'] absolute w-4 h-4 p-0 right-0 top-5"
                  fill="none"
                  viewBox="0 0 10 10"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 4.51a.5.5 0 000 1h3.5l.01 3.5a.5.5 0 001-.01V5.5l3.5-.01a.5.5 0 00-.01-1H5.5L5.49.99a.5.5 0 00-1 .01v3.5l-3.5.01H1z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
