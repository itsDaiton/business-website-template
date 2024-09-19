import React from "react";
import { printer } from "../assets";
import styles, { layout } from "../styles/style";

const Equipment = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Equipment That  <br className="md:block hidden" />
          Gets the Job Done.
        </h2>
        <p className={`${styles.paragraph} md:max-w-[470px] mt-5`}>
          Our production is powered by several Anycubic Kobra 2 Max printers, a top-tier 3D printer known for its precision and reliability. 
          With a large build volume and advanced features, this machine ensures that we can handle complex and high-quality prints, 
          delivering detailed and durable results every time.
        </p>
      </div>
      <div className={layout.sectionImg}>
        <img src={printer} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default Equipment;
