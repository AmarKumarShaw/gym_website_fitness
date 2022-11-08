import React from 'react'

const Polygon = () => {
    return (
        <div className=' flex flex-col lg:h-screen max-sm:h-full w-full items-center bg-black text-center'>
            <div className='lg:h-40 max-sm:h-40 max-sm:w-screen lg:text-7xl max-sm:text-5xl  text-center text-white'>
                <p className='max-sm:h-40 max-sm:w-screen lg:text-8xl max-sm:text-5xl lg:p-6 max-sm:p-4'>Feature Classes.......</p>
            </div>
            <div className='flex lg:flex-row max-sm:mt-10 max-sm:flex-col items-center justify-center'>
                <div className='flex flex-col lg:m-4 max-sm:h-50 '>
                    <div className='bg-white flex flex-row h-72 w-72 m-6 items-center border-white border-2 justify-center'
                        style={{
                            clipPath: "polygon(30%  0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30% "
                        }}>
                        <img className='object-cover' src="./images/fitness.12.jpg" alt="logo"
                        />
                    </div>
                    <div>
                        <p className=' text-white'>Motivation and Accountability</p>
                    </div>
                </div>
                <div className="flex flex-col m-4">
                    <div className='bg-white flex flex-row items-center h-72 w-72 m-6 border-white border-2 justify-center'
                        style={{
                            clipPath: "polygon(30%  0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30% "
                        }}>
                        <img className='object-cover' src="./images/fitness.12.jpg" alt="logo"
                        />
                    </div>
                    <div className='h-22'>
                        <p className=' text-white'>Clean and Hygienic</p>
                    </div>
                </div>
                <div className="flex flex-col m-4">
                    <div className='bg-white flex flex-row items-center h-72 w-72 m-6 border-white border-2 justify-center'
                        style={{
                            clipPath: "polygon(30%  0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30% "
                        }}>
                        <img className='object-cover' src="./images/fitness.12.jpg" alt="logo"
                        />
                    </div>
                    <div className='h-22'>
                        <p className=' text-white'>Comunity and socializing</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Polygon