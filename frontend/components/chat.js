import React from 'react'
import Image from 'next/image'
import send from './assets/send.svg'
import User from './User'
import Bot from './Bot'
function chat() {
// dcdcdc text color
const askquiz = ()=>{

}

  return (
    <div  className=' bg-[#343541] h-screen w-screen text-[#dcdcdc] flex flex-col p-5'>
    <User/>
    <Bot/>
    {/* input */}
    <div className=' fixed bottom-5 w-full'>
      <form onSubmit={askquiz} className='w-10/12 mx-auto bg-[#40414F] flex flex-row justify-between align-middle rounded-lg'>
      <textarea name="message"  placeholder='Message' className='pl-2 rounded border-none w-11/12 bg-transparent'/>
      <button className='w-1/12  bg-[#40414F]'>
        <Image src={send} alt="send" className='mx-auto bg-[#40414F]'/>
      </button>
      </form>
    </div>
    </div>
  )
}

export default chat