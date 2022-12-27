import React from 'react'
import user from './assets/user.svg'
import Image from 'next/image'
function User() {
  return (
    <div className='flex flex-row  bg-red-500'>
          <Image src={user} alt="send" className='mx-auto bg-[#40414F] flex-none'/>
          <h1 className='flex-1'>Hello openai how are you doing</h1>
    </div>
  )
}

export default User