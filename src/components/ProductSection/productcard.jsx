import { basePath } from "@/lib/basePath";
const ProductCard = ({
  image,
  title,
  subtitle,
  Tdescription,
  description,
  button1,
  button2,
}) => {
  return (
    <div>
      <div className="card w-full h-auto sm:h-142.5 bg-white relative">
        <div className="w-full h-auto sm:h-130 bg-[#c9cf93]">
          <img
            className="w-full h-[220px] sm:h-[320px] lg:h-125 object-cover"
            src={image}
            alt={title}
          />
        </div>
        <div className="w-[60%] sm:w-[35%] lg:w-[17%] h-auto sm:h-[18%] text-white bg-red-500 pt-2.5 ps-4 sm:ps-7 pb-4 absolute right-[10%] sm:right-[25%] bottom-[9%]">
          <h2 className="text-[20px] sm:text-[24px] lg:text-[30px] mb-2">
            {title}
          </h2>
          <h3 className="text-[13px] sm:text-[16px]">{subtitle}</h3>
        </div>
      </div>
      <div className="pt-0 bg-white w-full py-8 sm:py-10 lg:py-12.5 px-4 sm:px-16 lg:px-100 ">
        <h2 className="text-red-500 text-[18px] sm:text-[21px] pb-4 font-semibold">
          {Tdescription}
        </h2>
        <p className="text-[14px] sm:text-[15px] leading-8 sm:leading-9 text-justify text-gray-400">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap justify-start items-center gap-2 pt-0 bg-white w-full py-8 sm:py-10 lg:py-12.5 px-4 sm:px-16 lg:px-100">
        {button1 && (
          <a
            className="text-gray-400 btn rounded-lg bg-white hover:bg-red-500 hover:text-white py-3 sm:py-4 px-4 sm:px-5 text-[13px] sm:text-[15px]"
            href=""
          >
            {button1}
          </a>
        )}
        {button2 && (
          <a
            className="text-gray-400 btn rounded-lg bg-white hover:bg-red-500 hover:text-white py-3 sm:py-4 px-4 sm:px-5 text-[13px] sm:text-[15px]"
            href=""
          >
            {button2}
          </a>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
