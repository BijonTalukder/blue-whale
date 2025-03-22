import { useState, useEffect } from "react";
import useSticky from "./use-sticky";

const ScrollToTop = () => {
  const { sticky } = useSticky();

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <>
      {/* <!-- Scroll-top --> */}
      {/* <div className= {`back-to-top-wrapper ${sticky ? "back-to-top-btn-show" : ""}`}> */}
      <button
        onClick={scrollTop}
        className= {`scroll-top scroll-to-target ${sticky ? "open" : ""}`}
        // className="back-to-top-btn"
        data-target="html"
      >
        <i className="fas fa-angle-up"></i>
      </button>
      {/* </div> */}
      {/* <!-- Scroll-top-end--> */}
    </>
  );
};

export default ScrollToTop;
