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
          className="
          z-50  
          fixed
            bottom-4 left-4
            sm:bottom-5 sm:left-6
            md:left-8
            lg:left-12.5
            w-9 h-9
            sm:w-10 sm:h-10
            rounded-xl
            bg-[#848f9bc4]
            text-white
            text-[20px]
            sm:text-[24px]
            flex items-center justify-center
            shadow-2xl shadow-gray-600
            transition-all duration-300
            hover:bg-[#6f7a86]
            hover:scale-110
          "
        >
          ↑
        </button>
      )}
    </>
  );
};

export default UP;
