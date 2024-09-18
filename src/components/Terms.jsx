import React from "react";
import { terms } from "../constants/terms";
import styles from "../styles/style";
import parse from 'html-react-parser';

const parsedTerms = parse(terms);

const Terms = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {parsedTerms}
    </section>
  );
};

export default Terms;
