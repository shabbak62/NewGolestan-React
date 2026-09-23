import { basePath } from "@/lib/basePath";
const Magazine = () => {
  return (
    <div>
      <div className="w-full bg-white py-5 sm:py-7.5 px-4 sm:px-10 md:px-20 lg:px-60">
        <h2 className="text-[18px] text-right text-red-500 font-semibold">
          مجله گلستان
        </h2>
      </div>

      <div className="w-full bg-[#cde4b0] flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-4 sm:gap-3 px-4 sm:px-10 md:px-20 lg:ps-50 lg:pe-60 py-8">
        <div className="w-full sm:w-[45%] lg:w-[30%] bg-white flex flex-col justify-start gap-2.5 shadow-2xl">
          <img className="w-full" src={`${basePath}/Image/13.png`} alt="" />
          <h3 className="text-red-500 text-[18px] pt-5 ps-5 pb-5 font-semibold">
            ماکارونی با سبزیجات
          </h3>
          <p className="mb-4 text-[#888a8b] text-[14.5px] pe-5 ps-5 pb-5 text-justify leading-8 line-clamp-3">
            ابتدا ماکارانی‌ها را در ظرفی‌ به‌ همراه‌ آب‌، روغن‌ مایع‌ و نمک‌
            می‌ریزیم‌ تا کمی‌ بپزد. در این‌ حین‌ پیازها را خرد کرده‌ و روی‌
            روغن‌ تفت‌ می‌دهیم‌ تا طلایی‌ شود…
          </p>
          <a
            className="w-25 h-10 text-[#888a8b] text-[14.5px] ms-5 mb-5 text-center leading-9 rounded-lg border border-gray-300 transition-all transition-300 hover:text-white hover:bg-red-500"
            href="#"
          >
            {" "}
            ادامه مطلب{" "}
          </a>
        </div>

        <div className="w-full sm:w-[45%] lg:w-[30%] bg-white flex flex-col justify-start gap-2.5 shadow-2xl">
          <img className="w-full" src={`${basePath}/Image/12.png`} alt="" />
          <h3 className="text-red-500 text-[18px] pt-5 ps-5 pb-5 font-semibold">
            {" "}
            سوپ مکزیکی{" "}
          </h3>
          <p className="mb-4 text-[#888a8b] text-[14.5px] pe-5 ps-5 pb-5 text-justify leading-8 line-clamp-3">
            گوشت بوقلمون را در یک ماهیتابه بزرگ ریخته، آب روی آن بریزید تا روی
            آن را بپوشاند و به مدت نیم ساعت آن را بپزید. گوشت را از مایع آن
            بیرون آورده…
          </p>
          <a
            className="w-25 h-10 text-[#888a8b] text-[14.5px] ms-5 mb-5 text-center leading-9 rounded-lg border border-gray-300 transition-all transition-300 hover:text-white hover:bg-red-500"
            href="#"
          >
            {" "}
            ادامه مطلب{" "}
          </a>
        </div>

        <div className="w-full sm:w-[92%] lg:w-[30%] bg-white flex flex-col justify-start gap-2.5 shadow-2xl">
          <img className="w-full" src={`${basePath}/Image/11.png`} alt="" />
          <h3 className="text-red-500 text-[18px] pt-5 ps-5 pb-5 font-semibold">
            {" "}
            چیلاکیله{" "}
          </h3>
          <p className="mb-4 text-[#888a8b] text-[14.5px] pe-5 ps-5 pb-5 text-justify leading-8 line-clamp-3">
            احتمالا نام چیلا کیله را نشنیده باشید ولی اگر یکبار این غذای
            فوق‌العاده خوشمزه را تهیه کنید و نوش جان کنید جزئی جدانشدنی از
            فهرست غذایی خانواده شما خواهد شد. این خوراک خوشمزه یکی از غذاهای
            محبوب و متفاوت است که...
          </p>
          <a
            className="w-25 h-10 text-[#888a8b] text-[14.5px] ms-5 mb-5 text-center leading-9 rounded-lg border border-gray-300 transition-all transition-300 hover:text-white hover:bg-red-500"
            href="#"
          >
            {" "}
            ادامه مطلب{" "}
          </a>
        </div>
      </div>

      <div className="w-full bg-white flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-4 sm:gap-3 px-4 sm:px-10 md:px-20 lg:ps-50 lg:pe-60 pt-10 sm:pt-20 pb-10">
        <div className="w-full sm:w-[45%] lg:w-[30%] bg-white flex flex-col justify-start gap-2.2 shadow-2xl border border-gray-200">
          <video
            controls
            muted
            poster={`${basePath}/Image/salad.jpg`}
            className="border-b w-full h-auto aspect-video"
          >
            <source src={`${basePath}/Media/1.mp4`} type="video/mp4" />
          </video>

          <h3 className="text-red-500 text-[18px] pt-5 ps-5 pb-5 font-semibold">
            {" "}
            سالاد نودل{" "}
          </h3>
          <p className="mb-4 text-[#888a8b] text-[14.5px] pe-5 ps-5 pb-5 text-justify leading-8 line-clamp-3">
            ابتدا ماکارانی‌ها را در ظرفی‌ به‌ همراه‌ آب‌، روغن‌ مایع‌ و نمک‌
            می‌ریزیم‌ تا کمی‌ بپزد. در این‌ حین‌ پیازها را خرد کرده‌ و روی‌
            روغن‌ تفت‌ می‌دهیم‌ تا طلایی‌ شود…
          </p>
          <a
            className="w-30 h-10 text-[#888a8b] text-[14.5px] ms-5 mb-5 text-center leading-9 rounded-lg border border-gray-300 transition-all transition-300 hover:text-white hover:bg-red-500"
            href="#"
          >
            {" "}
            ویدیوهای بیشتر{" "}
          </a>
        </div>

        <div className="w-full sm:w-[45%] lg:w-[30%] bg-white flex flex-col justify-start gap-2.2 shadow-2xl border border-gray-200">
          <video
            controls
            muted
            poster={`${basePath}/Image/5.png`}
            className="border-b w-full h-auto aspect-video"
          >
            <source src={`${basePath}/Media/haty.mp4`} type="video/mp4" />
          </video>

          <h3 className="text-red-500 text-[18px] pt-5 ps-5 pb-5 font-semibold">
            {" "}
            هاتی نودل
          </h3>
          <p className="mb-4 text-[#888a8b] text-[14.5px] pe-5 ps-5 pb-5 text-justify leading-8 line-clamp-3">
            گوشت بوقلمون را در یک ماهیتابه بزرگ ریخته، آب روی آن بریزید تا روی
            آن را بپوشاند و به مدت نیم ساعت آن را بپزید. گوشت را از مایع آن
            بیرون آورده…
          </p>
          <a
            className="w-25 h-10 text-[#888a8b] text-[14.5px] ms-5 mb-5 text-center leading-9 rounded-lg border border-gray-300 transition-all transition-300 hover:text-white hover:bg-red-500"
            href="#"
          >
            {" "}
            ادامه مطلب{" "}
          </a>
        </div>

        <div className="w-full sm:w-[92%] lg:w-[30%] bg-white flex flex-col justify-start gap-2.2 shadow-2xl border border-gray-200">
          <video
            controls
            muted
            poster={`${basePath}/Image/rice.png`}
            className="border-b w-full h-auto aspect-video"
          >
            <source src={`${basePath}/Media/rice.mp4`} type="video/mp4" />
          </video>

          <h3 className="text-red-500 text-[18px] pt-5 ps-5 pb-5 font-semibold">
            برنج گلستان
          </h3>
          <p className="mb-4 text-[#888a8b] text-[14.5px] pe-5 ps-5 pb-5 text-justify leading-8 line-clamp-3">
            احتمالا نام چیلا کیله را نشنیده باشید ولی اگر یکبار این غذای
            فوق‌العاده خوشمزه را تهیه کنید و نوش جان کنید جزئی جدانشدنی از
            فهرست غذایی خانواده شما خواهد شد . این خوراک ...
          </p>
          <a
            className="w-34 h-10 text-[#888a8b] text-[14.5px] ms-5 mb-5 text-center leading-9 rounded-lg border border-gray-300 transition-all transition-300 hover:text-white hover:bg-red-500"
            href="#"
          >
            {" "}
            مشاهده محصولات{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Magazine;