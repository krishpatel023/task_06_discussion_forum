import React from 'react'
import Header from '../components/Header'
// import Editor from '../components/Editor/Editor'

export default function AskQuestion() {
  return (
    <div className='w-screen'>
      <Header/>
      <div className='w-full min-h-[calc(100vh-4rem)] flex flex-col items-center'>
        {/* <Editor/> */}
        
        <div className='w-[90%] mt-8 flex flex-col gap-4'>
            <h1 className='text-3xl font-semibold'>Ask a Question?</h1>
            <label htmlFor="title" className="block mb-2 text-lg font-medium text-gray-900">
              Title
              <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2" placeholder="Question Title" required/>
            </label> 
            <label htmlFor="tags" className="block mb-2 text-lg font-medium text-gray-900">
              Tags
              <input type="text" id="tags" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2" placeholder="Tags" required/>
            </label> 
            <button className='w-24 h-8 bg-accent-color text-accent-complementary rounded-md'>Add Tag</button>
            <button className='w-32 h-12 bg-accent-color text-accent-complementary rounded-md'>Post</button>
        </div>
      </div>
    </div>
  )
}
