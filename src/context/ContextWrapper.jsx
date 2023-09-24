import { useState } from 'react';
import GlobalContext from './GlobalContext'
import {initial_questions} from './initialStates'
export default function ContextWrapper(props) {
    
    const [questions,setQuestions]=useState(initial_questions)
    const [pageNumber,setPageNumber] = useState(0)
    const numberOfQuestionsPerPage = 10

    const value = {
        questions,
        pageNumber,
        setPageNumber,
        numberOfQuestionsPerPage
    }
  return (
      <GlobalContext.Provider value={value}>
        {props.children}
      </GlobalContext.Provider>
  )
}