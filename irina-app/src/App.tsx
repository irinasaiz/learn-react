
import './App.css'
import Message from './Message';
import React, {useState} from "react";
import { useEffect } from 'react';

const App: React.FC = () => {
  const [userName, setUserName] = useState<string>('Irina');
  const [message, setMessage] = useState<string>('This is the initial message');

  useEffect(() => {
    const timer = setTimeout(() => {
      // update the state after 5 sec
      setUserName('Irina')
      setMessage('Updated message with Typescript')
    }, 5000)

    return () => clearTimeout(timer)
  }, [])
  

  return (
   <div>
    <h1>Typescript is cool!</h1>
    <Message name={userName} message={message}/>
   </div>

  )
}
export default App

