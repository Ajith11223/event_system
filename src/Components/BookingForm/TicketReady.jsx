'use client';
import React from "react";
import Image from "next/image";
import "./TicketReady.css";
import { LuDownload } from "react-icons/lu";
import { HiMiniArrowUturnRight } from "react-icons/hi2";
import { TbListDetails } from "react-icons/tb";
import { useSearchParams } from "next/navigation";
import QRCode from "react-qr-code";

export default function TicketReady() {
  const searchParams = useSearchParams();

  const id = searchParams.get("ticket");
  console.log(id);
  return (
    <div className=" relative ">
      <div className="  flex flex-col mt-20 items-center w-full">
        <div className="text-center flex flex-col gap-2.5 md:gap-5 lg:gap-6  mt-5 md:mt-10 lg:mt-20">
          <div className="flex justify-center items-center ">
            <Image
              src="/TicketReady.svg"
              alt="Ticket Ready"
              height={51.5}
              width={51.5}
            />
          </div>
          <div className="flex flex-col gap-2.5 md:gap-3.5 ">
            <h2 className="text-[24px] lg:text-[32px] leading-[30px] lg:leading-[43.2px] text-HeadingBlack font-bold">
              You’re All Set! Your Ticket is Ready! 🎉
            </h2>
            <p className="font-normal text-[16px] md:text-[18px] md:leading-[24.3px] text-[#5D5151] ">
              Your ticket has been sent via email and WhatsApp. We’re excited to
              have you join us!
            </p>
          </div>
        </div>

        <div className="relative  rounded-lg  p-2.5 md:p-5 lg:p-6 flex justify-between items-center mt-5 md:mt-10 lg:mt-[57px] mx-2.5 md:mx-5 lg:mx-[50px] xl:mx-[100px]">
          <div className="absolute inset-0 bg-[#F4F1F2] opacity-60 rounded-lg pointer-events-none"></div>
          <div className="flex flex-col md:grid md:grid-cols-5 bg-white relative md:divide-x-[2px] divide-dashed  rounded-[18px]">
            <div className=" justify-center items-center col-span-1 p-2.5 md:p-3  hidden md:flex">
              <Image
                src="/ChairSquareRounded.svg"
                alt="Ticket"
                width={256}
                height={225}
              />
            </div>
            <div className="col-span-3 p-2.5 md:p-5 lg:p-[30px]  ">
              <div className="flex flex-col gap-2.5 md:gap-5 lg:gap-6">
                <div className="w-full flex-col flex md:flex-row justify-between md:items-center">
                  <h2 className="text-[20px] md:text-[24px] xl:leading-[32.4px] font-bold text-primary-dark">
                    Target Edu Expo 2024
                  </h2>
                  <p className="font-normal text-[14px] md:text-[16px] md:leading-[21.6px] text-[#7C7A7A]">
                    ID; {id}
                  </p>
                </div>
                <div className="grid flex-col md:grid-cols-5 gap-2.5 md:gap-5">
                  <div className="grid md:col-span-3 flex-col gap-0 md:gap-2">
                    <p className="font-semibold text-[14px] md:text-[16px] md:leading-[21.6px] text-[#7C7A7A]">
                      venue
                    </p>
                    <h5 className="font-medium text-[14px] md:text-[16px] leading-[21.6px] text-secondary-dark">
                      International School Riyadh
                    </h5>
                  </div>
                  <div className="grid md:col-span-2 flex-col gap-0 md:gap-2">
                    <p className="font-semibold text-[14px] md:text-[16px] md:leading-[21.6px] text-[#7C7A7A]">
                      Date
                    </p>
                    <h5 className="font-medium text-[14px] md:text-[16px] leading-[21.6px] text-secondary-dark">
                      13 Sep 2024
                    </h5>
                  </div>
                  <div className="grid md:col-span-3 flex-col gap-0 md:gap-2">
                    <p className="font-semibold text-[14px] md:text-[16px] leading-[21.6px] text-[#7C7A7A]">
                      Time
                    </p>
                    <h5 className="font-medium text-[14px] md:text-[16px] leading-[21.6px] text-secondary-dark">
                      4:00 pm
                    </h5>
                  </div>
                  <div className="grid md:col-span-2 flex-col gap-0 md:gap-2">
                    <p className="font-semibold text-[14px] md:text-[16px] leading-[21.6px] text-[#7C7A7A]">
                      Tickets
                    </p>
                    <h5 className="font-medium text-[14px] md:text-[16px] leading-[21.6px] text-secondary-dark">
                      1
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-span-1 flex justify-center flex-col items-center gap-2.5 md:gap-3 p-2.5 md:p-3">
              <p className="font-medium text-[14px] leading-[18.9px] text-[#7C7A7A]">
                Scan for entry
              </p>
              <div className="p-2.5 md:p-5 bg-[#DED6D633] rounded-xl max-w-[200px]">
                {/* <Image
                  src="/QRCode.svg"
                  alt="QR Code"
                  width={141}
                  height={141}
                />{" "} */}
                <QRCode value={id} className="w-full h-full"/>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Date and Buttons */}
        <div className="mt-2.5 md:mt-5 lg:mt-[34px] flex flex-col xl:flex-row gap-2.5 items-center xl:justify-between w-full px-2.5 md:px-5 lg:px-[50px] xl:px-[100px] mb-20">
          <p className="text-[#595659] font-normal text-[14px] md:text-[16px] leading-[21.6px] flex flex-col xl:flex-row md:items-center gap-0.5 md:gap-3.5">
            Booking Date And Time{" "}
            <span className="font-medium text-[16px] md:text-[18px] leading-[24.3px] text-primary-dark">
              {" "}
              Wed, 14 Aug, 2024, 11:10 pm
            </span>
          </p>
          <div className="flex  flex-col md:flex-row gap-2.5  ">
            <button className=" p-2.5 font-normal text-[14px] md:text-[16px] leading-[21.6px] md:p-3 lg:px-5 xl:px-6 bg-[#DD720D] text-white hover:text-[#DD720D] hover:bg-white  rounded-full flex gap-2 items-center w-[160px] md:w-fit">
              <LuDownload className="font-bold" />
              Download ticket
            </button>
            <button className=" p-2.5  md:p-3 lg:px-5 xl:px-6 bg-white text-black hover:text-white hover:bg-black font-normal text-[14px] md:text-[16px] leading-[21.6px] rounded-full flex gap-2 items-center w-[160px] md:w-fit">
              <HiMiniArrowUturnRight className="font-bold" /> Resend Ticket
            </button>
            <button className=" p-2.5 md:p-3 lg:px-5 xl:px-6 bg-white text-black hover:text-white hover:bg-black font-normal text-[14px] md:text-[16px] leading-[21.6px] rounded-full flex gap-2 items-center w-[160px] md:w-fit">
              <TbListDetails className="font-bold" /> Order details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
