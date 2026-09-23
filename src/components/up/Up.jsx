
"use client";

import { useEffect, useState } from "react";

const UP = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={backToTop}
          className="fixed bottom-5 left-12.5 w-10 h-10 rounded-xl bg-[#848f9bc4] text-white text-[24px] shadow-2xl shadow-gray-600 transition-all duration-300"
        >
        ↑
        </button>
      )}
    </>
  );
};

export default UP;
