const ProductCard = ({image,title,subtitle,Tdescription,description,button1,button2}) => {
    return (
        <div>
            <div className="card w-full h-142.5 bg-white relative">
            <div className="w-full h-130 bg-[#c9cf93]">
                <img className="w-full h-125 object-cover" src={image} alt={title} />
            </div>
            <div className="w-[17%] h-[18%] text-white bg-red-500 pt-2.5 ps-7 pb-4 absolute right-[25%] bottom-[9%]">
            <h2 className="text-[30px] mb-2">{title}</h2>
            <h3 className="text-[16px]">{subtitle}</h3>
            </div>
            </div>
            <div className="pt-0 bg-white w-full py-12.5 px-100 ">
                <h2 className="text-red-500 text-[21px] pb-4 font-semibold">{Tdescription}</h2>
                <p className="text-[15px] leading-9 text-justify text-gray-400">{description}</p>
            </div>
            <div className="flex justify-start items-center gap-2 pt-0 bg-white w-full py-12.5 px-100">
                {button1 && <a className="text-gray-400 btn rounded-lg bg-white hover:bg-red-500 hover:text-white py-4 px-5" href="">{button1}</a>}
              {button2 &&   <a className="text-gray-400 btn rounded-lg bg-white hover:bg-red-500 hover:text-white py-4 px-5" href="">{button2}</a>}
            </div>
        </div>
    )
       
    
}
 
export default ProductCard;