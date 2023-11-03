import React from "react";

const GlobalContext = React.createContext({
    questions : [],
    setQuestions : () => {},
    pageNumber : [],
    setPageNumber : () => {},
    questionData : [],
    setQuestionData : () => {}
})

export default GlobalContext