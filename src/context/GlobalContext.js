import React from "react";

const GlobalContext = React.createContext({
    messages : [],
    setMessages : () => {},
})

export default GlobalContext