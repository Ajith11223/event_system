'use client'
import React from 'react'
import MainLayout from "@/Components/MainLayout/MainLayout";
import MainBg from "../../../../public/TicketGreenBg.svg";
import TicketReady from '@/Components/BookingForm/TicketReady';
import { useParams } from 'next/navigation';
const page = () => {
  const params = useParams();
  const id = params.id; //
  console.log(id)
  return (
    <div className="relative">
    <div className="bg-[linear-gradient(90deg,#F6EEEE_6.18%,#EDD8BD_104.58%)] absolute  w-full min-h-screen top-0">
      <div
        className="absolute opacity-[60%] top-0 w-full hidden lg:block -z-0"
        style={{
          paddingBottom: `${(455 / 1440) * 100}%`, // Aspect ratio (262px height for 1443px width)
          backgroundImage: `url(${MainBg.src})`,
          backgroundPosition: "top ",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <MainLayout>
        <TicketReady id={id} />
      </MainLayout>
    </div>
  </div>
  )
}

export default page

