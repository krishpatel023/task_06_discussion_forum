import React, { useState } from 'react'
import { generateRandomeData, getMonthName, getYear } from './CalendarUtils';
import dayjs from 'dayjs';
import Day from './Day';

export default function ContributionChart() {
    
    const currentMonthIndex = dayjs().month()
    const [data, setData] = useState(getYear(0))
    const monthNames = getMonthName()

    const contributionData = generateRandomeData()
    const color = ["bg-blue-500","bg-blue-600","bg-blue-700","bg-blue-800"]
  return (
    <>
    <div className='min-w-full flex overflow-y-auto'>
        <div className='w-6 h-full flex flex-col leading-1 items-center'>
            <div className='h-[22px]'>
                <h1 className='text-white'>.</h1>
            </div>
            <h1 className='text-[12px]'>M</h1>
            <h1 className='text-[12px]'>T</h1>
            <h1 className='text-[12px]'>W</h1>
            <h1 className='text-[12px]'>T</h1>
            <h1 className='text-[12px]'>F</h1>
            <h1 className='text-[12px]'>S</h1>
            <h1 className='text-[12px]'>S</h1>
        </div>
        <div>
            <div className='h-4 flex'>
                {
                    monthNames.map((month,i)=>
                        <div key={i} className='w-[calc(100%/12)] text-center flex justify-center items-center'>
                            <h1 className='text-xx font-medium'>{month}</h1>
                        </div>
                    )
                }
            </div>
            <div className='flex gap-1 mt-2'>
                {
                    data?
                    data.map((row,i)=>(
                        <div key={i} className='flex flex-col gap-1'>
                        {
                            row.map((day,j)=>
                                <Day
                                    day = {day}
                                    contributionData = {contributionData}
                                    color = {color}
                                    key = {j}
                                />
                            )
                        }
                        </div>
                    ))
                    :null
                }                
            </div>

        </div>
      
    </div>
    <div className='w-full flex justify-end items-center mt-4'>
        <h1 className='text-lg'>Less</h1>
        {
            color.map((data,i)=>
            <div className={`w-4 h-4 inline-block ${data} rounded mx-1`} key={i}></div>
            )
        }
        
        <h1 className='text-lg'>More</h1>
    </div>
    </>
  )
}
