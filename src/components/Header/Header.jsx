"use client";
import { basePath } from "@/lib/basePath";
import { useState } from "react";
const Header = () => {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    "صفحه اصلی",
    "شرکت گلستان",
    "محصولات",
    "وبلاگ",
    "قرعه کشی",
    "استخدام",
    "تماس با ما",
    "EN",
  ];

  return (
    <div className="w-full mx-auto sticky top-0 z-10">
      <div
        className="w-full h-20 sm:h-25 bg-fixed bg-repeat bg-auto top-0 mx-auto"
        style={{ backgroundImage: `url(${basePath}/Image/header-back.png)` }}
      >
        <div className="navbar shadow-sm flex-wrap">
          <div className="navbar-start flex items-center justify-between w-full sm:w-auto">
            <img
              className="ms-4 sm:ms-10 lg:ms-50 w-[90px] sm:w-[110px] lg:w-[140px] h-auto"
              src={`${basePath}/Image/logo-fr.png`}
              alt="Golestan"
              width={140}
              height={90}
            />
            <button
              className="sm:hidden text-white text-2xl p-2 me-4"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              ☰
            </button>
          </div>

          {/* منوی دسکتاپ */}
          <div className="navbar-center hidden sm:block">
            <div
              className="ms-2 sm:ms-10 megamenu megamenu-full text-gray-400 text-[12px] sm:text-[14px]"
              id="my-megamenu-4"
            >
              <span className="megamenu-active"></span>
              <button className="hover:text-white p-2 sm:p-4">صفحه اصلی</button>
              <div className="w-px h-6 bg-gray-600 m-2 sm:m-4"></div>
              <button className="hover:text-white p-2 sm:p-4">
                شرکت گلستان
                <span className="text-[9px] text-gray-500 p-2">▼</span>
              </button>
              <div className="w-px h-6 bg-gray-600 m-1"></div>
              <div className="relative">
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="hover:text-white p-2 sm:p-4 flex items-center gap-2"
                >
                  محصولات
                  <span className="text-[9px] text-gray-500 p-2">▼</span>
                </button>
                {productsOpen && (
                  <div
                    className="absolute top-full right-0 w-30"
                    style={{
                      backgroundImage: `url(${basePath}/Image/header-back.png)`,
                    }}
                  >
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
              <div className="w-px h-6 bg-gray-600 m-2 sm:m-3"></div>
              <button className="p-2 sm:p-4 hover:text-white">وبلاگ</button>
              <div className="w-px h-6 bg-gray-600 m-2 sm:m-3"></div>
              <button className="p-2 sm:p-4 hover:text-white">قرعه کشی</button>
              <div className="w-px h-6 bg-gray-600 m-2 sm:m-3"></div>
              <button className="p-2 sm:p-4 hover:text-white">استخدام</button>
              <div className="w-px h-6 bg-gray-600 m-2 sm:m-3"></div>
              <button className="hover:text-white p-2 sm:p-4">
                تماس با ما
                <span className="text-[9px] text-gray-500 p-2">▼</span>
              </button>
              <div className="w-px h-6 bg-gray-600 m-2 sm:m-3"></div>
              <button className="p-2 sm:p-4 hover:text-white"> EN </button>
            </div>
          </div>

          {/* منوی موبایل - ساده و بدون megamenu
          {mobileMenuOpen && (
            <div className="w-full sm:hidden bg-black/90 flex flex-col text-gray-200 text-[13px]">
              {menuItems.map((item) => (
                <button
                  key={item}
                  className="py-3 border-b border-gray-700 hover:text-white"
                >
                  {item}
                </button>
              ))}
            </div>
          )} */}

          <div className="navbar-end"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;