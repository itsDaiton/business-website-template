import React from "react";
import { feedback } from "../constants";
import styles from "../styles/style";
import Feedback from "./Feedback";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.flexce} flex-col relative`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          What people say about us
        </h2>
      </div>
      <div className="flex flex-wrap md:justify-start justify-center w-full feedback-contrainer relative z-[1]">
        {feedback.map((card) => (
          <Feedback key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
