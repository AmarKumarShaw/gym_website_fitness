import React from 'react'

const Polygon = () => {
    return (
        <div className='h-screen w-full items-center bg-black'>
            <div className='h-40 text-center lg:text-7xl p-6 text-white'>
                <p>Feature Classes..........................</p>
            </div>
            <div className='flex flex-row'>
                <div className='bg-white flex flex-row h-64 w-72 m-6 items-center border-white border-2 justify-center'
                    style={{
                        clipPath: "polygon(30%  0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30% "
                    }}>
                    <img className='object-cover' src="./images/fitness.12.jpg" alt="logo"
                        
                    />
                </div>
                <div className='bg-white flex flex-row items-center h-64 w-72 m-6 border-white border-2 justify-center'
                    style={{
                        clipPath: "polygon(30%  0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30% "
                    }}>
                    <img className='object-cover' src="./images/fitness.12.jpg" alt="logo"
                    />
                </div>
                 <div className='bg-white flex flex-row items-center h-64 w-72 m-6 border-white border-2 justify-center'
                    style={{
                        clipPath: "polygon(30%  0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30% "
                    }}>
                    <img className='object-cover' src="./images/fitness.12.jpg" alt="logo"
                    />
                </div>
            </div>
        </div>
    )
}

export default Polygon