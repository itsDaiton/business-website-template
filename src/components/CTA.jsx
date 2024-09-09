import React from "react";
import styles from "../style";

const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px]`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Are you ready to create?</h2>
        <p className={`${styles.paragraph} mt-5`}>
        We'd love to hear from you! Reach out to us today and take advantage of an exclusive offer: enjoy a 20% discount on every third item you print with us. 
        It's our way of saying thank you for choosing us. We look forward to helping you bring your ideas to life!
        </p>
      </div>
    </section>
  );
};

export default CTA;
