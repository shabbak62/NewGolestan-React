"use client";
import { basePath } from "@/lib/basePath";
import { useState } from "react";
const Header = () => {
  const [productsOpen, setProductsOpen] = useState(false);
  return (
    <div className="w-full mx-auto sticky top-0 z-10">
      <div className="w-full h-25 bg-fixed bg-repeat bg-auto top-0 mx-auto"
       style= {{backgroundImage: `url(${basePath}/Image/header-back.png)`}}>
        <div className="navbar shadow-sm">
          <div className="navbar-start">
            <img
              className="ms-50"
               src={`${basePath}/Image/logo-fr.png`}
              alt="Golestan"
              width={140}
              height={90}
            />
          </div>

          <div className="navbar-center ">
            <div
              className="ms-10 megamenu max-sm:megamenu-vertical megamenu-full text-gray-400"
              id="my-megamenu-4"
              popover="auto"
            >
              <span className="megamenu-active"></span>
              <button className="hover:text-white p-4">صفحه اصلی</button>
              <div className="w-px h-6 bg-gray-600 m-4 "></div>
              <button className="hover:text-white p-4">
                شرکت گلستان
                <span className="text-[9px] text-gray-500 p-2">▼</span>
              </button>
              <div>
                <div className="flex max-sm:flex-col items-start"></div>
              </div>

              <div className="w-px h-6 bg-gray-600 m-1"></div>

              <div className="relative">
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="hover:text-white p-4 flex items-center gap-2"
                >
                  محصولات
                  <span className="text-[9px] text-gray-500 p-2">▼</span>
                </button>

                {productsOpen && (
                  <div className="absolute top-full right-0 w-30 bg-[url('/Image/header-back.png')]">
                    <ul className="menu-vertical text-gray-200 p-5 gap-4 text-[13px]">
                      <li>برنج</li>
                      <li>چای</li>
                      <li>آجیل</li>
                      <li>ادویه و چاشنی</li>
                      <li>زعفران و زرشک</li>
                      <li>دمنوش</li>
                      <li>هاتی نودل</li>
                      <li>حبوبات</li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="w-px h-6 bg-gray-600 m-3"></div>
              <button className="p-4 hover:text-white">وبلاگ</button>
              <div className="w-px h-6 bg-gray-600 m-3"></div>
              <button className="p-4 hover:text-white">قرعه کشی</button>
              <div className="w-px h-6 bg-gray-600 m-3"></div>
              <button className="p-4 hover:text-white">استخدام</button>
              <div className="w-px h-6 bg-gray-600 m-3"></div>
              <button className="hover:text-white">
                تماس با ما
                <span className="text-[9px] text-gray-500 p-2">▼</span>
              </button>
              <div className="w-px h-6 bg-gray-600 m-3"></div>
              <button className="p-4 hover:text-white"> EN </button>
            </div>
          </div>

          <div className="navbar-end"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
