import React from "react";
import styles, { layout } from "../style";

const Materials = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <table class="modern-table">
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
            <td>2.50€/h</td>
          </tr>
          <tr>
            <td>PETG</td>
            <td>3/5</td>
            <td>4/5</td>
            <td>2.50€/h</td>
          </tr>
          <tr>
            <td>TPU</td>
            <td>1/5</td>
            <td>2/5</td>
            <td>3.50€/h</td>
          </tr>
          <tr>
            <td>ABS</td>
            <td>2/5</td>
            <td>1/5</td>
            <td>3.50€/h</td>
          </tr>
        </table>
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Choose your <br className="sm:block hidden" />{" "}
          <span className="text-gradient-pink">Materials</span>.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Experience seamless and customized 3D printing solutions with our
          on-demand order service. <br className="sm:block hidden" />
          Simply send your design, choose your specifications, and let us handle
          the rest. <br className="sm:block hidden" />
          From prototypes to final products, we deliver high-quality prints
          tailored to your needs.
        </p>
      </div>
    </section>
  );
};

export default Materials;
