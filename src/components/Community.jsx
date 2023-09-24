import React from 'react'

export default function Community() {
  return (
    <div className='w-[90%] h-[25rem] bg-primary-color rounded-md flex flex-col items-center mt-6'>
        <div className='h-[15%] w-[90%] border-b-2 border-gray-200 flex justify-between items-center'>
            <h1>Collectives</h1>
            <button className='text-accent-color'>view all</button>
        </div>

        <div className='w-[90%] h-[20%] flex rounded-lg border-b-2 border-gray-200'>
            <div className='h-full w-[20%] flex justify-center items-center text-center text-3xl text-blue-500'><i className="fa-brands fa-react"></i></div>
            <div className='h-full w-[60%] flex flex-col justify-center'>
                <h1 className='font-semibold'>React.js</h1>
                <span className='text-xs'>12.1k Questions</span>
            </div>
            <div className='h-full w-[20%] flex justify-center items-center'>
                <button className='w-24 h-8 rounded-md border border-accent-color bg-blue-50 text-blue-700 hover:bg-blue-100'>View</button>
            </div>
        </div>

        <div className='w-[90%] h-[20%] flex rounded-lg border-b-2 border-gray-200'>
            <div className='h-full w-[20%] flex justify-center items-center text-center text-3xl text-yellow-500'><i className="fa-brands fa-aws"></i></div>
            <div className='h-full w-[60%] flex flex-col justify-center'>
                <h1 className='font-semibold'>AWS</h1>
                <span className='text-xs'>2.7k Questions</span>
            </div>
            <div className='h-full w-[20%] flex justify-center items-center'>
                <button className='w-24 h-8 rounded-md border border-accent-color bg-blue-50 text-blue-700 hover:bg-blue-100'>View</button>
            </div>
        </div>

        <div className='w-[90%] h-[20%] flex rounded-lg border-b-2 border-gray-200'>
            <div className='h-full w-[20%] flex justify-center items-center text-center text-3xl text-gray-800'><i className="fa-brands fa-github"></i></div>
            <div className='h-full w-[60%] flex flex-col justify-center'>
                <h1 className='font-semibold'>Github</h1>
                <span className='text-xs'>1.5k Questions</span>
            </div>
            <div className='h-full w-[20%] flex justify-center items-center'>
                <button className='w-24 h-8 rounded-md border border-accent-color bg-blue-50 text-blue-700 hover:bg-blue-100'>View</button>
            </div>
        </div>

        <div className='w-[90%] h-[20%] flex rounded-lg '>
            <div className='h-full w-[20%] flex justify-center items-center text-center text-3xl text-green-500'><i className="fa-brands fa-node"></i></div>
            <div className='h-full w-[60%] flex flex-col justify-center'>
                <h1 className='font-semibold'>Node.js</h1>
                <span className='text-xs'>762 Questions</span>
            </div>
            <div className='h-full w-[20%] flex justify-center items-center'>
                <button className='w-24 h-8 rounded-md border border-accent-color bg-blue-50 text-blue-700 hover:bg-blue-100'>View</button>
            </div>
        </div>
    </div>
  )
}
