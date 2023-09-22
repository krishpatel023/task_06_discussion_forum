import { useState } from 'react';
import GlobalContext from './GlobalContext'

var socket;

export default function ContextWrapper(props) {
    
    const [messages,setMessages]=useState()
    const value = {
        messages,
        setMessages,

    }
  return (
      <GlobalContext.Provider value={value}>
        {props.children}
      </GlobalContext.Provider>
  )
}