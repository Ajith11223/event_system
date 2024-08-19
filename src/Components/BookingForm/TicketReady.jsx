import React from "react";
import MainBg from "../../../public/TicketGreenBg.svg";
import Image from "next/image";

export default function TicketReady() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#D6E7E2] to-[#E9F2ED] p-8 relative z-0">
      <div
        className="absolute opacity-[60%] top-0 w-full"
        style={{
          paddingBottom: `${(455 / 1440) * 100}%`, // Aspect ratio (262px height for 1443px width)
          backgroundImage: `url(${MainBg.src})`,
          backgroundPosition: "top right",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      ></div>
      <div className=" absolute flex flex-col mt-5 md:mt-10 lg:mt-[57px] items-center w-full">
        <div className="text-center flex flex-col gap-2.5 md:gap-5 lg:gap-6  mt-5 md:mt-10 lg:mt-[57px]">
          <div className="flex justify-center items-center ">
            <Image
              src="/TicketReady.svg"
              alt="Ticket Ready"
              height={51.5}
              width={51.5}
            />
          </div>
          <div className="flex flex-col gap-2.5 md:gap-3.5 ">
            <h2 className="text-[24px] lg:text-[32px] lg:leading-[43.2px] text-HeadingBlack font-bold">
              You’re All Set! Your Ticket is Ready! 🎉
            </h2>
            <p className="font-normal text-[16px] md:text-[18px] md:leading-[24.3px] text-[#5D5151] ">
              Your ticket has been sent via email and WhatsApp. We’re excited to
              have you join us!
            </p>
          </div>
        </div>

        {/* Ticket Section */}
        {/* <div className="bg-[#F4F1F299] opacity-[60%]  rounded-lg  p-2.5 md:p-5 lg:p-6 flex justify-between items-center">
          <div className="bg-white">
          <div className="flex items-center">
            <Image
            src="/ChairSquareRounded.svg"
            alt="Ticket"
            width={256}
            height={225}
            />
            <div>
              <h3 className="text-xl font-bold">Target Edu Expo 2024</h3>
              <p className="text-gray-600">
                Venue: International School Riyadh
              </p>
              <p className="text-gray-600">Time: International School Riyadh</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-gray-600">ID: 12345</p>
            <p className="text-gray-600">Date: 13 Sep 2024</p>
            <p className="text-gray-600">Tickets: 1</p>
          </div>
          <div className="ml-6 border-l pl-6">
            <div className="bg-gray-100 p-4 rounded-lg">
              <img
                src="/path/to/qr-code.jpg" // Replace with actual QR code path
                alt="QR Code"
                className="w-16 h-16"
              />
              <p className="text-gray-600 text-center mt-2">Scan for entry</p>
            </div>
          </div>
          </div>
        </div> */}

        <div className="relative  rounded-lg  p-2.5 md:p-5 lg:p-6 flex justify-between items-center mt-5 md:mt-10 lg:mt-[57px]">
          <div className="absolute inset-0 bg-[#F4F1F2] opacity-60 rounded-lg pointer-events-none"></div>
          <div className="bg-white relative p-2.5 md:p-3 rounded-[18px]">
            <div className="grid  grid-cols-5">
              <div className="flex items-center col-span-1">
                <Image
                  src="/ChairSquareRounded.svg"
                  alt="Ticket"
                  width={256}
                  height={225}
                />
              </div>
              <div className="col-span-3 p-2.5 md:p-5 lg:p-[30px]">
                <div className="flex flex-col gap-2.5 md:gap-5 lg:gap-6">
                  <div className="w-full flex justify-between items-center"></div>
                </div>
              </div>
              <div className=" col-span-1 flex justify-end flex-col items-center gap-2.5 md:gap-3">
                <p className="font-medium text-[14px] leading-[18.9px] text-[#7C7A7A]">
                  Scan for entry
                </p>
                <div className="p-2.5 md:p-5 bg-[#DED6D633] rounded-xl">
                  <Image
                    src="/QRCode.svg"
                    alt="QR Code"
                    width={141}
                    height={141}
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Date and Buttons */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 mb-6">
            Booking Date And Time: Wed, 14 Aug, 2024, 11:10 pm
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-orange-500 text-white py-2 px-4 rounded-lg">
              Download Ticket
            </button>
            <button className="border border-gray-300 text-gray-600 py-2 px-4 rounded-lg">
              Resend Ticket
            </button>
            <button className="border border-gray-300 text-gray-600 py-2 px-4 rounded-lg">
              Order details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
