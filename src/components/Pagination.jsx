import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

export default function Pagination() {
    const {questions, numberOfQuestionsPerPage ,pageNumber, setPageNumber} = useContext(GlobalContext)

    const handleNext = ()=>{
        if( (pageNumber+1 )!== Math.ceil(questions.length/numberOfQuestionsPerPage)){
          setPageNumber(pageNumber + 1)  
        }
        
    }
    const handlePrev = ()=>{
        if(pageNumber !== 0){
            setPageNumber(pageNumber - 1)
        }
    }
  return (
    <div className='flex gap-4 mt-8 mb-8 justify-center items-center text-gray-600'>
        <button 
            onClick={handlePrev}
            className='w-20 h-8 rounded border-2 border-gray-400 flex gap-2 justify-center items-center'><i className="fa-solid fa-chevron-left"></i>Prev
        </button>
        <span className='flex justify-center items-center gap-1'>
            Page 
            <h1 className='font-bold'>{pageNumber + 1}</h1> 
            of 
            <h1 className='font-bold'>{Math.ceil(questions.length/numberOfQuestionsPerPage)}</h1>
        </span>
        <button onClick={handleNext} className='w-20 h-8 rounded border-2 border-gray-400 flex gap-2 justify-center items-center'>Next<i className="fa-solid fa-chevron-right   "></i></button>
    </div>
  )
}
