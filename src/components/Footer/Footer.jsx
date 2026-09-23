import { basePath } from "@/lib/basePath";
const Footer = () => {
  return (
    <div>
      <div className="w-full h-22.5 bg-[linear-gradient(to_top_right,#FBFBFB,#D2D2D2)] flex justify-center items-center ">
        <a
          href="www.facebook.com"
          className="leading-1.25 hover:[content:url('/image/icon5-1-1.png')]"
        >
          <img src="/image/icon5-1.png" alt="" />
        </a>
        <a
          href=""
          className="leading-1.25 hover:[content:url('/image/icon4-1-1.png')]"
        >
          <img src="/image/icon4-1.png" alt="" />
        </a>
        <a
          href=""
          className="leading-1.25 hover:[content:url('/image/icon3-1-1.png')]"
        >
          <img src="/image/icon3-1.png" alt="" />
        </a>
        <a
          href=""
          className="leading-1.25 hover:[content:url('/image/icon2-1.png')]"
        >
          <img src="/image/icon2-1-1.png" alt="" />
        </a>
        <a
          href=""
          className="leading-1.25 hover:[content:url('/image/icon1-1.png')]"
        >
          <img src="/image/icon1-1-1.png" alt="" />
        </a>
        <a
          href=""
          className="leading-1.25 hover:[content:url('/image/icon6-1-3.png')]"
        >
          <img src="/image/icon6-1-2.png" alt="" />
        </a>
      </div>

      <div className="w-full h-6.25 bg-[#ff0000]"></div>

      <div className="w-full h-100 bg-[url('/Image/header-back.png')] bg-fixed bg-repeat bg-auto flex flex-nowrap justify-center items-center">
        <div className="w-[10%] h-92.5 flex flex-col justify-center items-center gap-1.25">
          <img className="w-[70%]" src={`${basePath}/Image/1.png`} alt="" />
          <h3 className="w-[90%] text-[#ffffff] border-y border-y-[#bcbec0] mt-6 mb-6 p-2.5 text-center text-[16px]">
            چای گلستان
          </h3>
          <div className="ps-0.5 text-right text-[13px] text-[#bcbec0] leading-7">
            چای ممتاز هندوستان​
            <br />
            چای ممتاز ارل گری​
            <br />
            چای سيلان عطری​
            <br />
            چای ممتاز سيلان​
            <br />
            چای صبحانه گلستان​
          </div>
        </div>
        <div className="w-[10%] h-92.5 flex flex-col justify-center items-center gap-1.25">
          <img className="w-[70%]" src={`${basePath}/Image/2.png`} alt="" />
          <h3 className="w-[90%] text-[#ffffff]  border-y border-y-[#bcbec0] mt-6 mb-6 p-2.5 text-center text-[16px]">
            تی بگ گلستان
          </h3>
          <div className="ps-0.5 text-right text-[13px] text-[#bcbec0] leading-7">
            تی بگ بلک لاين
            <br />
            تی بگ ارل گری
            <br />
            دمنوش نعناع
            <br />
            دمنوش بابونه
            <br />
            دمنوش چای سبز
          </div>
        </div>
        <div className="w-[10%] h-92.5 flex flex-col justify-center items-center gap-1.25">
          <img className="w-[70%]" src={`${basePath}/Image/3.png`} alt="" />
          <h3 className="w-[90%] text-[#ffffff]  border-y border-y-[#bcbec0] mt-6 mb-6 p-2.5 text-center text-[16px]">
            ادویه گلستان
          </h3>
          <div className="ps-0.5 text-right text-[13px] text-[#bcbec0] leading-7">
            زعفران ممتاز خراسان
            <br />
            ادویه کاری
            <br />
            ادویه ماست و خیار
            <br />
            فلفل سياه خالص
            <br />
            زردچوبه ممتاز
          </div>
        </div>
        <div className="w-[10%] h-92.5 flex flex-col justify-center items-center gap-1.25">
          <img className="w-[70%]" src={`${basePath}/Image/4.png`} alt="" />

          <h3 className="w-[90%] text-[#ffffff]  border-y border-y-[#bcbec0] mt-6 mb-6 p-2.5 text-center text-[16px]">
            حبوبات گلستان
          </h3>
          <div className="ps-0.5 text-right text-[13px] text-[#bcbec0] leading-7">
            لوبيا قرمز ممتاز
            <br />
            لوبيا چيتی گلستان
            <br />
            عدس كانادايی
            <br />
            نخود زودپز كرمانشاه
            <br />
            لوبيا سفيد گلستان
          </div>
        </div>
      </div>
      <div className="w-full h-25 bg-[url('/Image/header-back.png')] bg-fixed bg-repeat bg-auto pt-6">
        <p className="text-[#bcbec0] text-[13px] text-center leading-4.5 tracking-[2px]">
          All Right Reserved ShABBAK Company 2026-2026
          <br />
          Design By : <span className="text-red-500">Marjan Shabbak</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
