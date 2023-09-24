import React from 'react'
import ProfilePic from '../assets/download.png'
export default function QuestionPreview({data}) {

  function getColor(){
    if(data.answer_by === ""){
      return "bg-gray-600 text-white"
    }
    if(data.answer_by === "student"){
      return "bg-green-600 text-white"
    }
    if(data.answer_by === "teacher"){
      return "bg-blue-700 text-white"
    }

  }
  return (
    <div className='w-[80%] min-h-[12rem] bg-primary-color mt-6 rounded flex justify-center'>
      <div className='w-[90%] mt-6 mb-6'>
          <h1 className='text-3xl font-semibold'>{data.title}</h1>
          <div className={`w-32 h-6 flex justify-start items-center px-2 gap-2 rounded mt-2 ${getColor()}`}>
            <i className="fa-solid fa-square-check"></i>
            {data.answer_numbers} answers
          </div>
          {/* TAGS */}
          <div className='w-full flex gap-4 mt-4 mb-4'>
            {
              data.tags.map((data,i)=>
                <div className='px-2 h-6 bg-secondary-color rounded-md flex justify-center items-center text-center' key={i}>{data}</div>
              )
            }
              
          </div>
          <div className='flex items-center gap-1'>
              <img className='w-10 h-10 rounded-full' src={ProfilePic} alt="" />
              <h1 className='text-base font-medium'>{data.author}</h1><span>asked at</span><h1 className='text-base font-medium'>{data.time}</h1>
          </div>
          <div className='flex gap-4 text-sm mt-4'>
              <span><i className="fa-solid fa-eye"></i> {data.views} views</span>
              <span><i className="fa-solid fa-message"></i> {data.comments} comments</span>
          </div>
      </div>
    </div>
  )
}
