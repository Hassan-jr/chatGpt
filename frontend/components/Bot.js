import React from 'react'
import Image from 'next/image'
import bot from './assets/bot.svg'
function Bot() {
  return (
    <div className='flex flex-row justify-center align-middle'>
         <Image src={bot} alt="send" className='mx-auto bg-[#40414F]'/>
    </div>
  )
}

export default Bot