import { basePath } from "@/lib/basePath";
const Hero = () => {
    return ( 
        <div className="w-full h-auto lg:h-114.25 py-8 sm:py-12.5 px-4 sm:px-10 md:px-20 lg:px-60 flex justify-between items-center bg-[linear-gradient(190deg,#FBFBFB_0%,#D2D2D2_100%)]">
            <div className="hero-content flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-0 w-full">
                <div className="w-full lg:w-[60%] h-full pt-4">
               <h1 className="text-red-500 text-[22px] sm:text-[26px] lg:text-[29px] font-semibold text-center lg:text-right">قرعه‌کشی مصرف‌ کنندگان گلستان</h1>
                <h2 className="text-[rgba(0_0_0_0.687)] text-[16px] sm:text-[18px] lg:text-[20px] pt-2 text-center lg:text-right">قرعه‌کشی دوره‌ای مصرف‌کنندگان چای گلستان</h2>
                <p className="animate__animated animate__slideInDown animate__slower text-gray-500 text-[15px] sm:text-[16px] lg:text-[17px] text-justify pt-6 px-2 sm:px-6 lg:pl-32.5 lg:pr-0">
                        هر یک از مصرف‌کنندگان محصولات چای و چای کیسه‌ای گلستان می‌توانند با ارسال کد قرعه‌کشی روی بسته به شماره 30007405 در قرعه کشی‌های دوره‌ای گلستان شرکت کنند. نگهداری از بسته‌بندی محصول برای اهدای جایزه الزامی است.
                    </p>
                   <a className="w-37.5 h-10 block mt-10 mx-auto lg:mx-0 decoration-0 text-gray-500 text-[15px] border border-[rgb(184,183,183)] shadow-[2px_2px_10px] shadow-gray-400 rounded-lg bg-white text-center leading-9 transition-all transition-300 hover:bg-red-500 hover:text-gray-100" href="#">اطلاعات بیشتر</a>
                
                </div>
               <div className="w-[70%] sm:w-[50%] lg:w-[40%] h-full">
                 <img
                alt="tea"
                src={`${basePath}/Image/tea-pic1.png`}
                className="w-full h-auto animate__animated animate__slideInDown animate__slower animate__delay-0.7s z-1 relative"
                />
               </div>
            </div>
         </div>
     );
}
 
export default Hero;