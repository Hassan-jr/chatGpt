import React, { useState } from 'react'
import Image from 'next/image'
import send from './assets/send.svg'
import User from './User'
import Bot from './Bot'
function chat() {
      var value = 0;
    const [task,setTask]=useState([
        {
            quiz: "",
            answer: ""
        }
    ])
// dcdcdc text color
const askquiz = (e)=>{
      e.preventDefault()
      const message = e.target
      console.log("The quiz is ", message);
}

  return (
    <div  className=' bg-[#343541] h-screen w-screen text-[#dcdcdc] flex flex-col p-5 space-y-4'>
    <User/>
    <Bot/>
    {/* input */}
    <div className=' fixed bottom-5 w-full'>
      <form onSubmit={askquiz} className='w-10/12 mx-auto bg-[#40414F] flex flex-row justify-between align-middle rounded-lg'>
      <input name="message" type="textarea"   placeholder='Ask ' className='pl-2 rounded border-none w-11/12 bg-transparent'/>
      <button className='w-1/12  bg-[#40414F]' type="submit">
        <Image src={send}  width={30} height={30}  alt="send" className='mx-auto bg-[#40414F]'/>
      </button>
      </form>
    </div>
    </div>
  )
}

export default chat