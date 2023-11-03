import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import Preview from './Editor/Preview'

export default function askQuestionPreview({setPreviewStatus}) {
    const {questionData} = useContext(GlobalContext)
  return (
    <div className='w-screen min-h-screen flex justify-center'>
      <div className='w-[60rem] mt-8 mb-8 rounded bg-slate-50'>
        <div className='w-full h-16 flex justify-end'>
            <button className='w-20 text-2xl' onClick={()=>{setPreviewStatus(false)}}><i className="fa-solid fa-xmark"></i></button>
        </div>
        {/* <Preview
            data={questionData}
        /> */}
      </div>
    </div>
  )
}
