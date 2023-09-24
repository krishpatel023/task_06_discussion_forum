import React from 'react'
import Header from '../components/Header'
import ProfilePic from '../assets/download.png'
import BadgeImg from '../assets/Class=Designer, Level=Level 5.png'
import DashboardQuestion from '../components/DashboardQuestion'
import ContributionChart from '../components/ContributionChart/ContributionChart'
export default function Dashboard() {
  return (
    <>
      <Header/>
      <div className='max-w-screen min-h-[calc(100vh-4rem)] bg-secondary-color flex flex-col items-center'>
        <div className='w-[70%] bg-white rounded mt-8 mb-8 flex flex-col items-center sm:w-full sm:mt-0 sm:mb-0'>
            <div className='w-[90%] h-60 flex justify-between items-center'>
                <div className='w-40 h-40 bg-red-800 rounded'>
                    <img className='object-cover h-full w-full' src={ProfilePic} alt="" />
                </div>
                <div className='w-[calc(95%-10rem)] flex flex-col justify-center gap-2'>
                    <h1 className='text-3xl'>Krish Patel</h1>
                    <h3>krishpatel0234@gmail.com</h3>
                    <h3>Student</h3>
                    <h3>10th - C</h3>
                    <button className='w-36 h-8 rounded-md border border-accent-color bg-blue-50 text-blue-700 hover:bg-blue-100 flex justify-center items-center gap-2'><i className="fa-solid fa-pen"></i>Edit Details</button>
                </div>
            </div>
            <div className='w-[90%] mb-8 mt-8'>
            <h1 className='text-xl font-md mb-3'>Contribution</h1>
                <ContributionChart/>
            </div>
            <div className='w-[90%] mb-4'>
                <h1 className='text-xl font-md mb-3'>Badges</h1>
                <div className='flex'>
                    <div className='w-36 h-44 shadow-xl rounded flex flex-col justify-center items-center'>
                        <img className="w-20 h-20" src={BadgeImg} alt="" />
                        <h1 className='text-lg'>Designer</h1>
                    </div>
                </div>
            </div>
            <div className='w-[90%] flex justify-between mb-16 md:flex-col'>
                <div className='w-[45%] md:w-full'>
                    <h1 className='text-xl font-md mb-3'>Questions</h1>
                    <div className='w-full border-[1px] border-gray-400 rounded flex flex-col items-center'>
                        <DashboardQuestion/>
                        <div className='h-[1px] w-[95%] bg-gray-400'></div>
                        <DashboardQuestion/>
                        <div className='h-[0.5px] w-[95%] bg-gray-400'></div>
                        <DashboardQuestion/>
                        <div className='h-[1px] w-[95%] bg-gray-400'></div>
                        <div className='w-full h-8 flex justify-center items-center'><button>view more</button></div>
                    </div>                    
                </div>
                <div className='w-[45%] md:w-full'>
                    <h1 className='text-xl font-md mb-3'>Comments</h1>
                    <div className='w-full border-[1px] border-gray-400 rounded flex flex-col items-center'>
                        <DashboardQuestion/>
                        <div className='h-[1px] w-[95%] bg-gray-400'></div>
                        <DashboardQuestion/>
                        <div className='h-[0.5px] w-[95%] bg-gray-400'></div>
                        <DashboardQuestion/>
                        <div className='h-[1px] w-[95%] bg-gray-400'></div>
                        <div className='w-full h-8 flex justify-center items-center'><button>view more</button></div>
                    </div>                    
                </div>
            </div>            
        </div>

      </div>
    </>
  )
}
