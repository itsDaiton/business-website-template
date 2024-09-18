import React from "react";
import { cookiePolicy } from "../constants/cookie_policy";
import styles from "../styles/style";
import parse from 'html-react-parser';

const parsedCookiePolicy = parse(cookiePolicy);

const CookiePolicy = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {parsedCookiePolicy}
    </section>
  );
};

export default CookiePolicy;
