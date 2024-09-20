import React from "react";

const Product = ({ content, name, sizes, img }) => {
  return (
    <div className="justify-center flex flex-col px-10 sm:py-6 py-3 rounded-[20px] sm:max-w-[370px] md:mr-10 mr-0 my-5 feedback-card">
      <img src={img} alt={name} className="w-[350px] h-[350px] object-contain" />
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10 h-[50px]">
        {content}
      </p>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <h4 className="font-poppins font-semibold text-[20px] text-white">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-white">
            Sizes: {sizes}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
