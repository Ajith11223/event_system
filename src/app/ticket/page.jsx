'use client'
import TicketReady from "@/Components/BookingForm/TicketReady";
import MainLayout from "@/Components/MainLayout/MainLayout";
import React from "react";
import MainBg from "../../../public/TicketGreenBg.svg";

const page = () => {
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
          <TicketReady />
        </MainLayout>
      </div>
    </div>
  );
};

export default page;
