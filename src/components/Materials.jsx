import React from "react";
import styles, { layout } from "../styles/style";
import { discount } from "../assets";

const Materials = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <table className="modern-table">
          <tbody>
            <tr>
              <td>Colors</td>
              <td>Maleability</td>
              <td>Quality</td>
              <td>Cost</td>
            </tr>
            <tr>
              <td>PLA</td>
              <td>2/5</td>
              <td>4/5</td>
              <td>
                <s className="small-text">3.00€/h</s>
                <br></br>2.50€/h
              </td>
            </tr>
            <tr>
              <td>PETG</td>
              <td>3/5</td>
              <td>4/5</td>
              <td>
                <s className="small-text">3.00€/h</s>
                <br></br>2.50€/h
              </td>
            </tr>
            <tr>
              <td>TPU</td>
              <td>1/5</td>
              <td>2/5</td>
              <td>
                <s className="small-text">4.00€/h</s>
                <br></br>3.50€/h
              </td>
            </tr>
            <tr>
              <td>ABS</td>
              <td>2/5</td>
              <td>1/5</td>
              <td>
                <s className="small-text">4.00€/h</s>
                <br></br>3.50€/h
              </td>
            </tr>
          </tbody>
        </table>
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        {/* Discounts per order */}
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount on every{" "}
            <span className="text-white"> 3rd</span> Order
          </p>
        </div>
        <h2 className={`${styles.heading2} xs:text-[20px]`}>
          Choose your <br className="md:block hidden" />{" "}
          <span className="text-gradient">Materials</span>.
        </h2>
        <p className={`${styles.paragraph} md:max-w-[470px] mt-5`}>
          Experience seamless and customized 3D printing solutions with our
          on-demand order service. <br className="md:block hidden" />
          Simply send your design, choose your specifications, and let us handle
          the rest. <br className="md:block hidden" />
          From prototypes to final products, we deliver high-quality prints
          tailored to your needs.
        </p>
      </div>
    </section>
  );
};

export default Materials;
