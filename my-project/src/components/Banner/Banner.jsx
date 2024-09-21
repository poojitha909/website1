import React from 'react'


const Banner = ({ image,title,subtitle,tag,reverse }) => {
  return (
    <div className="bg-[#f9f9f9]">
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0">
                {/* image banner */}
                <div className={`flex justify-start items-center $
                    {reverse && "md:order-last}`}>
                    <img src={image} alt={title} className="w-[400px] h-full object-cover"/>
                </div>
                {/* Banner text */}
                <div className="flex flex-col justify-center items-center text-center md:text-left lg:max-w-[500px]">
                    <p className="text-sm-orange-600 font-semibold">{tag}</p>
                    <p className="text-xl lg:text-2xl font-semibold capitalize">{title}</p>
                    <p className="text-sm text-slate-500">{subtitle}</p>
                </div>
                <div className="flex justify-center md:justify-start">
                    <button className="primary-btn !mt-5">Get Startted</button>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Banner