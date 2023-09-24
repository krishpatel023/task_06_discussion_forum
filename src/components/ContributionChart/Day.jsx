import React, { useState } from 'react'
// import {format} from 'dayjs'
export default function Day({day, contributionData,color}) {
    const [isShown,setShown] = useState(false)

    const checkDate = () => {
      for(var i = 0; i < contributionData.length; i++) {
        if(contributionData[i].date === day.format("DD-MM-YYYY")){
          const color = setColor(contributionData[i].contributions)
          return color
        }
      }
      return "bg-[#EFEFEF]"
    }
    const setColor = (num)=>{
      if(num >= 76){
        return color[3]
      }
      if(num >= 51){
        return color[2]
      }
      if(num >= 26){
        return color[1]
      }
      if(num >= 0){
        return color[0]
      }
    }

  return (
    <>
        <div className={`w-[14px] h-[14px] rounded ${checkDate()} relative`} onMouseEnter={()=>{setShown(!isShown)}} onMouseLeave={()=>{setShown(!isShown)}}>
        {
            isShown?
            <div className='absolute bottom-5 left-[-3rem] z-50 w-32 h-8 bg-gray-500 rounded text-white text-center'>{day.format('DD-MM-YY')}</div>
            :null
        }
        </div>
    </>
  )
}
