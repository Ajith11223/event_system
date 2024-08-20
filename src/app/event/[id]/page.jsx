"use client";
import BookingForm from "@/Components/BookingForm/BookingForm";
import TicketReady from "@/Components/BookingForm/TicketReady";
import MainLayout from "@/Components/MainLayout/MainLayout";
import React from "react";

const page = () => {
  return (
    <>
      <div className="  bg-[linear-gradient(90deg,#F6EEEE_6.18%,#EDD8BD_104.58%)] absolute  w-full min-h-screen top-0">
        <MainLayout>
          <BookingForm />
        </MainLayout>
      </div>
    </>
  );
};

export default page;
