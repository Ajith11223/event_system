"use client";
import BookingForm from "@/Components/BookingForm/BookingForm";
import TicketReady from "@/Components/BookingForm/TicketReady";
import MainLayout from "@/Components/MainLayout/MainLayout";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { ReadMore } from "@/Components/Common/ReadMore/ReadMore";
import { BsGlobe } from "react-icons/bs";
import { Carousel } from "rsuite";
import "../../Components/BookingForm/event.css"

const page = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/event/123");
  };

  return (
    <div className="bg-white h-full relative overflow-hidden bg-gradient-to-b from-white to-orange-50 ">
      <MainLayout>
        {/* <BookingForm/> */}
        {/* <TicketReady/> */}
        <div className=" mx-2.5 md:mx-5 lg:mx-[50px] xl:mx-[100px] pt-10 flex flex-col gap-2.5 md:gap-5 lg:gap-10 xl:gap-[45px]">
          <div className="flex flex-col ">
          <Carousel autoplay className="h-fit w-full  mt-12 lg:mt-20 xl:mt-24 custom-slider" shape="bar">
           
            <Image
            src="/HomeChairs.svg"
            alt="Home"
            height={386}
            width={1240}
            className="w-full "
          />
           <Image
            src="/HomeChairs.svg"
            alt="Home"
            height={386}
            width={1240}
            className="w-full "
          />
           <Image
            src="/HomeChairs.svg"
            alt="Home"
            height={386}
            width={1240}
            className="w-full "
          />
           <Image
            src="/HomeChairs.svg"
            alt="Home"
            height={386}
            width={1240}
            className="w-full "
          />
           <Image
            src="/HomeChairs.svg"
            alt="Home"
            height={386}
            width={1240}
            className="w-full "
          />
          </Carousel>
          </div>
          
          <div className="xl:grid xl:grid-cols-7 gap-2.5 md:gap-5 xl:gap-[84px] mb-20 ">
            <div className="xl:pb-10 col-span-5">
              <div>
                <h2 className="text-[32px] md:text-[48px] xl:leading-[64.8px] font-bold text-primary-dark">
                  Target Edu Expo 2024
                </h2>
                <p className="text-secondary-dark font-medium text-[16px] md:text-[18px] mt-2 md:mt-2.5 xl:mt-3.5">
                  Lorem ipsum dololo
                </p>
              </div>
              <div className="mt-2.5 md:mt-5 lg:mt-6 xl:mt-[35px] text-gray-700 flex flex-col gap-2.5 md:gap-5 lg:gap-6">
                <h2 className="text-[20px] md:text-[24px] xl:leading-[32.4px] font-bold text-primary-dark">
                  About
                </h2>
                <p className="text-secondary-dark font-normal text-[16px] leading-[24.3px] md:text-[18px] mt-2 md:mt-2.5 xl:mt-3.5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  volutpat libero at velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Nunc vulputate libero at velit
                  interdum, ac aliquet odio mattis.
                </p>
              </div>

              <div className="mt-2.5 md:mt-5 lg:mt-6 xl:mt-[45px]">
                <div className="bg-[linear-gradient(90.62deg,rgba(238,218,192,0.6)_0.54%,rgba(254,215,164,0.6)_115.41%)] p-2 lg:px-4 rounded-lg">
                  <h2 className="text-[18px] md:text-[20px] md:leading-[27px] font-bold text-primary-dark">
                    Location Details
                  </h2>
                </div>
                <div className="mt-4 space-y-2.5 md:space-y-5 xl:space-y-[45px]">
                  <div
                    className="border-[1px] border-[#E1DCDC] p-2.5 md:p-5 xl:p-8 rounded-lg flex flex-col gap-2.5 md:gap-3.5"
                    style={{ backgroundColor: "rgba(244, 241, 242, 0.6)" }}
                  >
                    <div className="flex flex-col md:flex-row gap-2.5 md:gap-3.5 items-center justify-center">
                      <div className="flex items-start gap-2.5 md:gap-3.5">
                        <div className="bg-[linear-gradient(180deg,_#D9D9D9_-122.29%,_rgba(115,115,115,0)_100%)] rounded-full flex items-center justify-center p-[7px] h-fit w-fit">
                          <Image
                            src="/HomeOrangeLocation.svg"
                            height={20}
                            width={20}
                            alt="Location"
                            className="min-w-[20px] min-h-[20px]"
                          />
                        </div>
                        <div className="flex flex-col gap-2.5 md:gap-3.5">
                          <h3 className="text-[16px] md:text-[18px] md:leading-[24.3px] font-bold text-primary-heading">
                            International School Riyadh
                          </h3>
                          <p className="text-secondary-dark font-normal text-[16px] leading-[24.3px] md:text-[18px]">
                            Lorem ipsum dolor sit amet consectetur. Nunc
                            venenatis amet arviverra nisl non.
                          </p>
                        </div>
                      </div>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d115949.45013939892!2d46.61397817731075!3d24.74677397345836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sInternational%20School%20Riyadh!5e0!3m2!1sen!2sin!4v1724147243574!5m2!1sen!2sin"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        className="border-[1px] border-[#CEC9C9] rounded-[14px] lg:min-w-[379px]"
                      ></iframe>
                    </div>{" "}
                  </div>
                  <div className="flex flex-col gap-2.5 md:gap-5 xl:gap-6">
                    <div className="bg-[linear-gradient(90.62deg,rgba(238,218,192,0.6)_0.54%,rgba(254,215,164,0.6)_115.41%)] p-2 lg:px-4 rounded-lg">
                      <h2 className="text-[18px] md:text-[20px] md:leading-[27px] font-bold text-primary-dark">
                        Agenda
                      </h2>
                    </div>
                    <div
                      className="border-[1px] border-[#E1DCDC]  p-2.5 md:p-5 xl:p-8 rounded-lg flex flex-col gap-2.5 md:gap-3.5"
                      style={{ backgroundColor: "rgba(244, 241, 242, 0.6)" }}
                    >
                      <div className=" bg-[linear-gradient(180deg,_rgba(255,218,231,0.4)_-0.05%,_rgba(153,131,138,0.4)_393.97%)] p-2.5 md:p-5 xl:p-6 flex flex-col gap-2.5 md:gap-3.5 rounded-[14px]">
                        <div className="border-[1px] border-[#E1DCDC] px-2 py-1 max-w-fit bg-[#F4F1F299] rounded-[4px]]">
                          <span className="font-normal text-[14px]  leading-[18.9px] text-secondary-black">
                            04:00-09:00PM
                          </span>
                        </div>
                        <h5 className="font-bold text-[16px] md:text-[18px] leading-[24.3px] text-primary-dark">
                          Agenda Title
                        </h5>
                        <span className="font-normal text-[16px] md:text-[18px] leading-[24.3px] text-secondary-dark">
                          <ReadMore maxCharacterCount={150}>
                            ipsum dolor sit amet, consectetur adipiscing elit.
                            Nunc vulputate libero et velit interdum, ac aliquet
                            odio mattis. Class aptent ta See moreipsum dolor sit
                            amet, consectetur adipiscing elit. Nunc vulputate
                            libero et velit interdum, ac aliquet odio mattis.
                            Class aptent ta
                          </ReadMore>
                        </span>
                        <div className="flex flex-wrap">
                          <div className="bg-white px-2 py-1 flex gap-2 items-center justify-center rounded-full">
                            <Image
                              src="/DummyGirl.svg"
                              alt="Profile img"
                              height={18}
                              width={18}
                            />
                            <p className="text-[16px] md:text-[18px] leading-[24.3px] text-secondary-black">
                              Josh
                            </p>
                          </div>
                        </div>
                      </div>{" "}
                      <div className=" bg-[linear-gradient(180deg,_rgba(218,237,255,0.4)_-0.05%,_rgba(153,131,138,0.4)_393.97%)] p-2.5 md:p-5 xl:p-6 flex flex-col gap-2.5 md:gap-3.5 rounded-[14px]">
                        <div className="border-[1px] border-[#E1DCDC] px-2 py-1 max-w-fit bg-[#F4F1F299] rounded-[4px]]">
                          <span className="font-normal text-[14px]  leading-[18.9px] text-secondary-black">
                            04:00-09:00PM
                          </span>
                        </div>
                        <h5 className="font-bold text-[16px] md:text-[18px] leading-[24.3px] text-primary-dark">
                          Agenda Title
                        </h5>
                        <span className="font-normal text-[16px] md:text-[18px] leading-[24.3px] text-secondary-dark">
                          <ReadMore maxCharacterCount={150}>
                            ipsum dolor sit amet, consectetur adipiscing elit.
                            Nunc vulputate libero et velit interdum, ac aliquet
                            odio mattis. Class aptent ta See moreipsum dolor sit
                            amet, consectetur adipiscing elit. Nunc vulputate
                            libero et velit interdum, ac aliquet odio mattis.
                            Class aptent ta
                          </ReadMore>
                        </span>
                        <div className="flex flex-wrap">
                          <div className="bg-white px-2 py-1 flex gap-2 items-center justify-center rounded-full">
                            <Image
                              src="/DummyGirl.svg"
                              alt="Profile img"
                              height={18}
                              width={18}
                            />
                            <p className="text-[16px] md:text-[18px] leading-[24.3px] text-secondary-black">
                              Josh
                            </p>
                          </div>
                        </div>
                      </div>{" "}
                      <div className="bg-[linear-gradient(180deg,_rgba(219,255,218,0.4)_-0.05%,_rgba(153,131,138,0.4)_393.97%)] p-2.5 md:p-5 xl:p-6 flex flex-col gap-2.5 md:gap-3.5 rounded-[14px]">
                        <div className="border-[1px] border-[#E1DCDC] px-2 py-1 max-w-fit bg-[#F4F1F299] rounded-[4px]]">
                          <span className="font-normal text-[14px]  leading-[18.9px] text-secondary-black">
                            04:00-09:00PM
                          </span>
                        </div>
                        <h5 className="font-bold text-[16px] md:text-[18px] leading-[24.3px] text-primary-dark">
                          Agenda Title
                        </h5>
                        <span className="font-normal text-[16px] md:text-[18px] leading-[24.3px] text-secondary-dark">
                          <ReadMore maxCharacterCount={150}>
                            ipsum dolor sit amet, consectetur adipiscing elit.
                            Nunc vulputate libero et velit interdum, ac aliquet
                            odio mattis. Class aptent ta See moreipsum dolor sit
                            amet, consectetur adipiscing elit. Nunc vulputate
                            libero et velit interdum, ac aliquet odio mattis.
                            Class aptent ta
                          </ReadMore>
                        </span>
                        <div className="flex flex-wrap">
                          <div className="bg-white px-2 py-1 flex gap-2 items-center justify-center rounded-full">
                            <Image
                              src="/DummyGirl.svg"
                              alt="Profile img"
                              height={18}
                              width={18}
                            />
                            <p className="text-[16px] md:text-[18px] leading-[24.3px] text-secondary-black">
                              Josh
                            </p>
                          </div>
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5 md:gap-5 xl:gap-6">
                    <div className="bg-[linear-gradient(90.62deg,rgba(238,218,192,0.6)_0.54%,rgba(254,215,164,0.6)_115.41%)] p-2 lg:px-4 rounded-lg">
                      <h2 className="text-[18px] md:text-[20px] md:leading-[27px] font-bold text-primary-dark">
                        Organized by
                      </h2>
                    </div>
                    <div
                      className="border-[1px] border-[#E1DCDC]  p-2.5 md:p-5 xl:p-8 rounded-lg flex flex-col md:flex-row gap-2.5 md:gap-5 md:items-center md:justify-between"
                      style={{ backgroundColor: "rgba(244, 241, 242, 0.6)" }}
                    >
                      <div className="flex items-center gap-2.5 md:gap-3.5">
                        <div className="bg-white p-2.5 md:p-3 rounded-xl">
                          <Image
                            src="/TargetCompanyImg.svg"
                            height={82}
                            width={82}
                            alt="Company Profile"
                          />
                        </div>
                        <p className="text-secondary-dark font-normal text-[16px] md:text-[18px] leading-[24.3px]">
                          Target Group of Companies, Soudi Arabia, P.o box No :
                          123
                        </p>
                      </div>
                      <button className="bg-primary-btnblack hover:text-primary-btnblack hover:border-[1px] border-primary-btnblack   p-2.5 md:p-3 w-full md:w-[288px] text-[14px] md:text-[16px] flex items-center leading-[21.6px] font-normal text-white h-fit gap-2 rounded-full justify-center hover:bg-white">
                        <BsGlobe className="text-[20px]" />
                        <span> Visit Website</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative col-span-2 ">
              <div className="sticky-wrapper min-h-screen">
                <div
                  id="sticky-div"
                  className="flex flex-col gap-2.5 md:gap-3.5 lg:gap-[34px] sticky-content "
                >
                  <div className="mt-5 xl:mt-8 flex flex-col gap-2.5 md:gap-5 lg:gap-10 xl:gap-[63px] justify-between  bg-[#F4F1F299] rounded-[14px] p-2.5 md:p-5 lg:p-6">
                    <div className="flex flex-col gap-2.5 md:gap-3.5 lg:gap-[18px]">
                      <p className="font-normal text-[14px] md:text-[16px] leading-[21.6px] text-secondary-black flex items-center gap-2.5 md:gap-3">
                        <Image
                          src="/DateLine.svg"
                          height={20}
                          width={20}
                          alt="Date"
                        />{" "}
                        13th Sep 04:00-09:00PM
                      </p>
                      <p className="font-normal text-[14px] md:text-[16px] leading-[21.6px] text-secondary-black flex items-center gap-2.5 md:gap-3">
                        <Image
                          src="/EducationLine.svg"
                          height={20}
                          width={20}
                          alt="Education"
                        />{" "}
                        Education
                      </p>
                      <p className="font-normal text-[14px] md:text-[16px] leading-[21.6px] text-secondary-black flex items-center gap-2.5 md:gap-3">
                        <Image
                          src="/MapLine.svg"
                          height={20}
                          width={20}
                          alt="Education"
                        />{" "}
                        International School
                      </p>
                    </div>
                    <div className="text-center flex justify-between w-full items-center ">
                      <p className="text-[24px] md:text-[32px] leading-[43.2px] font-bold text-secondary-black">
                        Free
                      </p>
                      <button
                        onClick={handleClick}
                        className=" p-2.5 md:p-3 lg:px-5 xl:px-6 bg-[#DD720D] text-white hover:text-[#DD720D] hover:bg-white font-semibold rounded-full"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                  <button className="bg-primary-btnblack hover:text-primary-btnblack hover:border-[1px] border-primary-btnblack   p-2.5 md:p-3 w-full  text-[14px] md:text-[16px] flex items-center leading-[21.6px] font-normal text-white h-fit gap-2 rounded-full justify-center hover:bg-white">
                    <BsGlobe className="text-[20px]" />
                    <span> Visit Website</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default page;
