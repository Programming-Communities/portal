import Image from 'next/image'
import React from 'react'

function WelcomeBanner() {
  return (
    <div className='flex gap-5 items-center bg-white rounded-xl p-5'>
      <Image src="/logo.jpg" alt="logo"
      width={100}
      height={100}/>
        <div>
        <h2 className='font-bold text-[25px]'>
        Welcome to <span className='text-primary'>Programming Community</span> Hub </h2>
        <h2 className='text-gray-500'> Connect with a community that learns together</h2>
        </div>

    </div>
  )
}

export default WelcomeBanner
