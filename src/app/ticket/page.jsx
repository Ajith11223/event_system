'use client'
import TicketReady from '@/Components/BookingForm/TicketReady'
import MainLayout from '@/Components/MainLayout/MainLayout'
import React from 'react'

const page = () => {
  
  return (
    <>
    <div className="bg-white h-screen  relative  bg-gradient-to-b from-white to-orange-50 ">
      <MainLayout>
        {/* <BookingForm /> */}
        
           <TicketReady/>
      </MainLayout>
    </div>
  </>
  )
}

export default page