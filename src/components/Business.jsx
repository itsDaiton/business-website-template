import React from "react";
import { features } from "../constants";
import styles, { layout } from "../styles/style";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row ss:p-5 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter}`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          Design It.  <br/>
          Choose Materials. <br/>
          Own It.
        </h2>
        <p className={`${styles.paragraph} md:max-w-[470px] mt-5`}>
        We are technology artists aiming to transform the intangible into tangible reality.
        Our mission is to transcend the limits of the imaginable, sculpting your boldest 
        visions with the flexibility of 3D printing.
        </p>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>

  );
};

export default Business;
