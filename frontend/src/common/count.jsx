"use client"
import React, { useState } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

const Count = ({ number, text }) => {
  const [focus, setFocus] = useState(false);

  const visibleChangeHandler = (isVisible) => {
    if (isVisible && !focus) {
      setFocus(true);
    }
  };

  return (
    <>
      {/* {text && <span>{text}</span>} */}
      <CountUp start={focus ? 0 : null} end={number} duration={2}>
        {({ countUpRef }) => (
          <span ref={countUpRef} />
        )}
      </CountUp>
      <InView as="span" onChange={(inView) => visibleChangeHandler(inView)}>
      </InView>
    </>
  );
};

export default Count;








