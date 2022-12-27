import React from 'react'
import Image from 'next/image'
import bot from './assets/bot.svg'
function Bot(prop) {
  return (
    <div className='flex flex-row items-start space-x-3 w-full bg-[#40414F] '>
         <Image src={bot}  width={50} height={50}  alt="send" className=' bg-[#40414F]'/>
         <div className='flex-1'>
         <h1 className='-1'>{prop.answer}</h1>
         
         </div>
        
    </div>
  )
}

export default Bot