import { useContext, useEffect, useState } from "react";
import Community from "../components/Community";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import QuestionPreview from "../components/QuestionPreview";
import GlobalContext from "../context/GlobalContext";

export default function HomePage() {
  const {questions, pageNumber, numberOfQuestionsPerPage} = useContext(GlobalContext)
  const [displayData, setDisplayData] = useState()

  useEffect(()=>{
    var data = []
    var num_count = 1
    for(var i=0; i<numberOfQuestionsPerPage; i++){
        num_count = i + (pageNumber*numberOfQuestionsPerPage)
        if((num_count+1) <= questions.length){
          data.push(questions[num_count])
        }
    }
    setDisplayData(data)
  },[pageNumber])
  return (
    <>
      <Header/>
      <div className="max-w-screen min-h-[calc(100vh-4rem)] bg-secondary-color flex">
        <div className="w-[75%] flex flex-col items-center">
          { 
            displayData?
            displayData.map((data,i)=>
              <QuestionPreview
                data = {data}
                key = {i}
              />
            )
            :null
          }
          <Pagination/>
        </div>
        <div className="w-[25%] flex justify-center">
          <Community/>
        </div>
          
      </div>
    </>
  )
}
