/** @format */

import React from "react";

const Wrapper = ({ children, classes, ...props }) => {
  return (
    <section className={`max-w-4xl mx-auto ${classes}`} {...props}>
      {children}
    </section>
  );
};

export default Wrapper;
