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
          Who are we?
        </h2>
        <p className={`${styles.paragraph} md:max-w-[470px] mt-5`}>
          We are a small but passionate Portuguese team of technology artists who believe that creativity knows no bounds. 
          Our mission is simple: to turn your most ambitious ideas into tangible reality through the magic of 3D printing. 
        </p>
        <p className={`${styles.paragraph} md:max-w-[470px] mt-5`}>
          We don't just print on demand—we actively collaborate with you, guiding your vision every step of the way. 
          At the heart of everything we do is a deep love for transforming what seems impossible into something real, tangible, and beautiful.
        </p>
      </div>
      <div className="absolute z-[0] w-[60%] h-[40%] -right-[50%] rounded-full yellow__gradient top-160" />
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>

  );
};

export default Business;
