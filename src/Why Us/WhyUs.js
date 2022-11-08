import React from 'react'
import "./whyus.css"

const WhyUs = () => {
    return (
        <div>
            <div className="content p-24 flex lg:items-center lg:justify-around lg:flex-row sm:flex-col  ">
                <div className="content1 lg:w-1/2 object-contain sm:w-fit sm:mx-auto">
                    <img className='why-us-img object-contain lg:h-full sm:h-80' src="./images/fit3.png" alt="" />
                </div>
                <div className="content2 lg:w-1/2 sm:w-full text-white lg:text-start sm:text-center pt-8 ">
                    <div className="con1 ">
                        <p className='font-bold lg:text-7xl sm:text-2xl text-wrap'> WHY US ?</p>
                    </div>
                    <div className="con2">
                        <p className='font-bold lg:text-3xl sm:text-xl'>We Cares</p>
                    </div>
                    <div className="con3">
                        <p>A gym isn’t just a place for exercise; it’s the place you go to unwind, socialize and work out. The gym is a whole experience. Some of the most successful facilities have several gym features that contribute to the kind of member experience that drives retention and sales.</p>            </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs