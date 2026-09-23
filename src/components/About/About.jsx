import { basePath } from "@/lib/basePath";
const About = () => {
    return ( 
        <div className="w-full bg-white">
           
           <div className="w-full h-auto bg-white">
    <div className="w-full h-full px-4 sm:px-10 md:px-20 lg:px-60 py-8 sm:py-12 lg:py-20 bg-white grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 animate__animated animate__zoomIn animate__slow animate__delay-1s">
    <div className="row3-item">
        <img className="w-full h-[120px] sm:h-[150px] lg:h-[186px] object-cover" src={`${basePath}/Image/31.png`} alt=""/>
        <h3 className="h-[60px] text-center text-[#7a7a7a] text-[14px] sm:text-[16px] pt-2.5 pb-5 border-b border-gray-400">سرمایه انسانی</h3>
    </div>

    <div className="row3-item">
        <img className="w-full h-[120px] sm:h-[150px] lg:h-[186px] object-cover" src={`${basePath}/Image/32.png`} alt=""/>
        <h3 className="h-[60px] text-center text-[#7a7a7a] text-[14px] sm:text-[16px] pt-2.5 pb-5 border-b border-gray-400">مراکز فروش</h3>

    </div>

    <div className="row3-item">
        <img className="w-full h-[120px] sm:h-[150px] lg:h-[186px] object-cover" src={`${basePath}/Image/33.png`} alt=""/>
        <h3 className="h-[60px] text-center text-[#7a7a7a] text-[14px] sm:text-[16px] pt-2.5 pb-5 border-b border-gray-400">محصصولات گلستان</h3>

    </div>

    <div className="row3-item">
        <img className="w-full h-[120px] sm:h-[150px] lg:h-[186px] object-cover" src={`${basePath}/Image/34.png`} alt=""/>
        <h3 className="h-[60px] text-center text-[#7a7a7a] text-[14px] sm:text-[16px] pt-2.5 pb-5 border-b border-gray-400">مشتریان گلستان</h3>

    </div>
</div>
</div>
         <hr className=" m-3 text-gray-400"/> 
        </div>
     );
}
 
export default About;