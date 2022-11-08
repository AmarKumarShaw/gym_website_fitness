import React from 'react'

const Card = () => {
    return (
        <div className='h-screen text-center w-full bg-black'>
            <div className='h-30  max-sm:p-8'>
                <p className='lg:text-8xl max-sm:text-6xl text-white'>Our Services</p>
            </div>
            <div className='flex  font-bold text-2xl h-82 mt-12 overflow-x-auto scrollbar-hide'>
                <div className='flex flex-col h-72 w-72 m-5 items-center justify-center border-zinc-500 border-2 lg:lg:rounded-t-3xl max-sm:rounded-3xl bg-white'>
                    <div className='h-50 w-72'>
                        <img className='lg:rounded-t-3xl max-sm:rounded-3xl h-50 w-72 object-contain' src="./images/openpic.png" alt="#" />
                    </div>
                    <div className='h-22'>
                        <p className='pt-8'>Open 24 hours</p>
                    </div>
                </div>
                <div className='flex flex-col h-72 w-72 m-5 items-center justify-center border-zinc-500 border-2 lg:rounded-t-3xl max-sm:rounded-3xl bg-white'>
                    <div className='h-50 w-72'>
                        <img className='lg:rounded-t-3xl max-sm:rounded-3xl h-50 w-72 object-contain' src="./images/openpic.png" alt="#" />
                    </div>
                    <div className='h-22'>
                        <p className='pt-8'>Open 24 hours</p>
                    </div>
                </div>
                <div className='flex flex-col h-72 w-72 m-5 items-center justify-center border-zinc-500 border-2 lg:rounded-t-3xl max-sm:rounded-3xl bg-white'>
                    <div className='h-50 w-72'>
                        <img className='lg:rounded-t-3xl max-sm:rounded-3xl h-50 w-72 object-contain' src="./images/openpic.png" alt="#" />
                    </div>
                    <div className='h-22'>
                        <p className='pt-8'>Open 24 hours</p>
                    </div>
                </div>
                <div className='flex flex-col h-72 w-72 m-5 items-center justify-center border-zinc-500 border-2 lg:rounded-t-3xl max-sm:rounded-3xl bg-white'>
                    <div className='h-50 w-72'>
                        <img className='lg:rounded-t-3xl max-sm:rounded-3xl h-50 w-72 object-contain' src="./images/openpic.png" alt="#" />
                    </div>
                    <div className='h-22'>
                        <p className='pt-8'>Open 24 hours</p>
                    </div>
                </div>
                <div className='flex flex-col h-72 w-72 m-5 items-center justify-center border-zinc-500 border-2 lg:rounded-t-3xl max-sm:rounded-3xl bg-white'>
                    <div className='h-50 w-72'>
                        <img className='lg:rounded-t-3xl max-sm:rounded-3xl h-50 w-72 object-contain' src="./images/openpic.png" alt="#" />
                    </div>
                    <div className='h-22'>
                        <p className='pt-8'>Open 24 hours</p>
                    </div>
                </div>
                <div className='flex flex-col h-72 w-72 m-5 items-center justify-center border-zinc-500 border-2 lg:rounded-t-3xl max-sm:rounded-3xl bg-white'>
                    <div className='h-50 w-72'>
                        <img className='lg:rounded-t-3xl max-sm:rounded-3xl h-50 w-72 object-contain' src="./images/openpic.png" alt="#" />
                    </div>
                    <div className='h-22'>
                        <p className='pt-8'>Open 24 hours</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card