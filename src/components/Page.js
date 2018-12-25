import React, { useEffect, useState, useRef } from "react";

import styles from "./Page.module.scss";

export default function Page({ children }) {
  const [paperScale, setPaperScale] = useState(1);
  const wrapper = useRef();

  useEffect(() => {
    function handlePageResize() {
      const wrapperStyle = window.getComputedStyle(wrapper.current);
      const wrapperWidth =
        Number.parseFloat(wrapperStyle.getPropertyValue("width")) -
        Number.parseFloat(wrapperStyle.getPropertyValue("padding-left")) -
        Number.parseFloat(wrapperStyle.getPropertyValue("padding-right"));
      const paperWidth = 8.5 * 96; // 8.5in times 96 pixels per inch
      setPaperScale(wrapperWidth / paperWidth);
    }

    window.addEventListener("resize", handlePageResize);
    handlePageResize();

    return function() {
      window.removeEventListener("resize", handlePageResize);
    };
  });

  return (
    <div className={styles.wrapper} ref={wrapper}>
      <div
        style={{ transform: `scale(${paperScale})` }}
        className={styles.page}
      >
        {children}
      </div>
    </div>
  );
}
