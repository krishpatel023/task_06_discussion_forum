import React from "react";

const GlobalContext = React.createContext({
    questions : [],
    setQuestions : () => {},
    pageNumber : [],
    setPageNumber : () => {},
})

export default GlobalContext