import MainLayout from '@/Components/MainLayout/MainLayout'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='bg-white h-full relative overflow-hidden'>
    <MainLayout>
      <div className=' mt-2.5 md:mt-5 lg:mt-6 xl:mt-[45px]'>
      <Image src="/HomeChairs.svg" alt="Home" height={386} width={1240} className='w-full'/>
      </div>
    </MainLayout></div>
  )
}

export default page
