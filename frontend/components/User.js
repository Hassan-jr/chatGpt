import React from 'react'
import user from './assets/user.svg'
import Image from 'next/image'
function User(prop) {
  return (
    <div className='flex flex-row justify-center align-middle space-x-2'>
          <Image src={user} width={50} height={50} alt="send" className='mx-auto bg-[#40414F] flex-none'/>
          <h1 className='flex-1 text-3xl'>{prop.quiz}</h1>
    </div>
  )
}

export default User