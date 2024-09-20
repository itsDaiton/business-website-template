import React from "react";
import { products } from "../constants";
import styles from "../styles/style";
import Product from "./Product";

const Testimonials = () => {
  return (
    <section
      id="products"
      className={`${styles.flexce} flex-col relative`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={`${styles.heading2} mt-10`}>
          Choose Your <span className="text-gradient">Favourite!</span>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center w-full feedback-contrainer relative z-[1]">
        {products.map((card) => (
          <Product key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
