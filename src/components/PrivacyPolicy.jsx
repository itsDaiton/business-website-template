import React from "react";
import { privacyPolicy } from "../constants/privacy_policy";
import styles from "../styles/style";
import parse from 'html-react-parser';

const parsedPrivacyPolicy = parse(privacyPolicy);

const PrivacyPolicy = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {parsedPrivacyPolicy}
    </section>
  );
};

export default PrivacyPolicy;
