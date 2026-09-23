import { basePath } from "@/lib/basePath";
const Response = () => {
  return (
    <div className="">
      <div className="w-full h-auto sm:h-130 bg-[#c9cf93]">
        <div className="w-full h-auto sm:h-125 bg-[#0d4f52] relative text-center pt-16 sm:pt-30 lg:pt-50 pb-16 sm:pb-0">
          <h2 className="text-[#d5ece1] text-[15px] sm:text-[17px] font-semibold pb-2.5">
            مسئوليت‌های اجتماعی شركت گلستان
          </h2>
          <hr className="text-[#009da2] bg-[#009da2] h-px border-0 " />
          <h4 className="text-[16px] sm:text-[20px] font-semibold text-[#009da2] pt-2">
            <span className="text-[24px] sm:text-[32px] font-semibold text-[#009da2] inline">
              {" "}
              Golestan{" "}
            </span>
            Social Responsibility
          </h4>
          <h5 className="text-[14px] sm:text-[17px] font-semibold text-[#bcbec0] pt-2.5 pb-2.5">
            Mahdi Hospital
          </h5>
          <hr className="text-gray-300 bg-gray-200 h-px border-0 mt-16 sm:mt-30 lg:mt-50 w-[98%] mx-auto" />

          <div className="static sm:absolute sm:bottom-[-35%] sm:right-[38%] mt-6 sm:mt-0 flex justify-center z-10">
            <img
              className="w-24 sm:w-auto"
              src={`${basePath}/Image/5.png`}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-full pt-10 sm:pt-24 lg:pt-50 px-4 sm:px-16 lg:pe-87.5 lg:ps-87.5 pb-10 sm:pb-20 lg:pb-37.5 bg-white">
        <h2 className="text-[18px] sm:text-[20px] font-bold pt-4 text-red-500">
          {" "}
          مسئوليت‌های اجتماعی گلستان
        </h2>
        <p className="text-[14px] sm:text-[16px] pt-4 text-[#7a7a7a] leading-7 sm:leading-8 text-justify">
          كسب‌وكارها اجزای قدرتمند جامعه به شمار می‌آیند و موفق‌ترین،
          قابل‌احترام‌ترین و مطلوب‌ترین كسب‌وكارها آنهایی هستند كه كاری فراتر از
          درآمدزایی ایجاد كنند؛‌ آنهایی كه آمده‌اند تا از تجربه و امکاناتشان
          برای حل مشكلات جامعه و محیط زندگی خود استفاده كنند. گلستان در
          فعالیت‌های‌ اجتماعی خود،‌ گسترده وسیعی از فعالیت‌های عام‌المنفعه را در
          دستوركار خود قرار داده است.
        </p>

        <a
          className="w-40 h-10 block mt-10 mx-auto sm:mx-0 bg-white text-[#8c8f91] text-[15px] text-center leading-9 rounded-lg border border-gray-300 transition-all transition-300 hover:text-white hover:bg-red-500"
          href="#"
        >
          {" "}
          اطلاعات بیشتر
        </a>
      </div>
    </div>
  );
};

export default Response;
