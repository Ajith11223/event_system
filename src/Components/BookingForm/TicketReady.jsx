import React from "react";
import MainBg from "../../../public/TicketGreenBg.svg";
import Image from "next/image";
import "./TicketReady.css";

export default function TicketReady() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#F4E6DA] to-[#F7ECE1]  relative z-0">
      <div
        className="absolute opacity-[60%] top-0 w-full hidden lg:block"
        style={{
          paddingBottom: `${(455 / 1440) * 100}%`, // Aspect ratio (262px height for 1443px width)
          backgroundImage: `url(${MainBg.src})`,
          backgroundPosition: "top ",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className=" absolute flex flex-col mt-20 items-center w-full">
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
            <h2 className="text-[24px] lg:text-[32px] lg:leading-[43.2px] text-HeadingBlack font-bold">
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
          <div className="grid  grid-cols-5 bg-white relative divide-x-[2px] divide-dashed  rounded-[18px]"
          >
              <div className="flex items-center col-span-1 p-2.5 md:p-3  ">
                <Image
                  src="/ChairSquareRounded.svg"
                  alt="Ticket"
                  width={256}
                  height={225}
                />
              </div>
              <div className="col-span-3 p-2.5 md:p-5 lg:p-[30px]  ">
                <div className="flex flex-col gap-2.5 md:gap-5 lg:gap-6">
                  <div className="w-full flex justify-between items-center">
                    <h2 className="text-[20px] md:text-[24px] xl:leading-[32.4px] font-bold text-primary-dark">
                      Target Edu Expo 2024
                    </h2>
                    <p className="font-normal text-[14px] md:text-[16px] leading-[21.6px] text-[#7C7A7A]">
                      ID; 12345
                    </p>
                  </div>
                  <div className="grid grid-cols-5 gap-2.5 md:gap-5">
                    <div className="grid col-span-3 flex-col gap-2">
                      <p className="font-semibold text-[14px] md:text-[16px] leading-[21.6px] text-[#7C7A7A]">
                        venue
                      </p>
                      <h5 className="font-medium text-[14px] md:text-[16px] leading-[21.6px] text-secondary-dark">
                        International School Riyadh
                      </h5>
                    </div>
                    <div className="grid col-span-2 flex-col gap-2">
                      <p className="font-semibold text-[14px] md:text-[16px] leading-[21.6px] text-[#7C7A7A]">
                        Date
                      </p>
                      <h5 className="font-medium text-[14px] md:text-[16px] leading-[21.6px] text-secondary-dark">
                        13 Sep 2024
                      </h5>
                    </div>
                    <div className="grid col-span-3 flex-col gap-2">
                      <p className="font-semibold text-[14px] md:text-[16px] leading-[21.6px] text-[#7C7A7A]">
                        Time
                      </p>
                      <h5 className="font-medium text-[14px] md:text-[16px] leading-[21.6px] text-secondary-dark">
                        4:00 pm
                      </h5>
                    </div>
                    <div className="grid col-span-2 flex-col gap-2">
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
              <div className=" col-span-1 flex justify-end flex-col items-center gap-2.5 md:gap-3 p-2.5 md:p-3">
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
