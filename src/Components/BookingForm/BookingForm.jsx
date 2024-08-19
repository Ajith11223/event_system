"use client";
import React, { useState } from "react";
import { SelectPicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "./BookingForm.css";

const BookingForm = () => {
  const [gender, setGender] = useState(null);
  const genderData = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Other", value: "Other" },
  ];
  const [occupation, setOccupation] = useState(null);
  const occupationData = [
    { label: "Working", value: "Working" },
    { label: "Business", value: "Business" },
    { label: "Student", value: "Student" },
    { label: "House wife", value: "House wife" },
    { label: "Retired", value: "Retired" },
  ];
  const [school, setSchool] = useState(null);
  const schoolData = [
    { label: "International Indian School (IISR)", value: "International Indian School (IISR)" },
    { label: "International Indian Public School (IIPS)", value: "International Indian Public School (IIPS)" },
    { label: "Al Alia International Indian School", value: "Al Alia International Indian School" },
    { label: "Al Yasmin International School (AYIS)", value: "Al Yasmin International School (AYIS)" },
    { label: "Alif International School", value: "Alif International School" },
    { label: "Delhi Public School (DPS)", value: "Delhi Public School (DPS)" },
    { label: "Yara International School", value: "Yara International School" },
    { label: "Modern International School", value: "Modern International School" },
    { label: "Modern Middle East International School", value: "Modern Middle East International School" },
    { label: "New Middle East International School", value: "New Middle East International School" },
    { label: "Others", value: "Others" },

  ];


  return (
    <div className=" bg-gradient-to-r from-[#F4E6DA] to-[#F7ECE1] px-2.5 md:px-5 lg:px-[50px] xl:px-[100px] pb-5 md:pb-10 lg:pb-[50px] xl:pb-[100px]">
      <div className="mt-28 ">
        <div className="bg-primary-dark text-white p-2.5 md:p-5 xl:p-6 rounded-[14px] flex justify-between items-center w-full">
          <div className="text-[16px] md:text-[18px] md:leading-[24.3px] font-bold">
            Target edu expo
          </div>
          <div className="text-[14px] md:text-[16px] leading-[21.6px] font-normal">
            13th September 2024
          </div>
        </div>

        {/* Form and Checkout Section */}
        <div className=" mt-2.5 md:mt-5 xl:mt-[45px] ">
          {/* Form Section */}
          <div className="flex flex-col gap-2.5 md:gap-3.5">
            <h2 className="text-[20px] mad:text-[24px] md:leading-[32.4px] font-bold text-primary-dark">
              Ticket Booking Form
            </h2>
            <p className="text-secondary-dark font-medium text-[16px] md:text-[18px] leading-[24.3px] ">
              Please fill out the form below to secure your spot at the event.
            </p>
          </div>
          <div className="mt-2.5 md:mt-5 flex flex-col xl:mt-[35px] xl:grid xl:grid-cols-7 gap-2.5 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#F4F1F299] xl:col-span-5 p-2.5 md:p-3.5 rounded-[14px] ">
              <div className="flex flex-col gap-2.5 md:gap-3.5">
                <label className="text-[14px] md:text-[16px] leading-[21.6px] font-medium text-secondary-dark">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name."
                  className=" p-2 md:px-3 md:py-3.5  rounded-lg w-full focus:outline-none placeholder:text-primary-Placeholder placeholder:text-[14px] placeholder:leading-[18.9px] placeholder:font-normal"
                />
              </div>

              <div className="flex flex-col gap-2.5 md:gap-3.5 h-full">
                <label className="text-[14px] md:text-[16px] leading-[21.6px] font-medium text-secondary-dark">
                  Gender
                </label>
                <SelectPicker
                  data={genderData}
                  value={gender !== "Select your gender" ? gender : null}
                  className="border-none h-full md:h-[48px] z-0"
                  onChange={(value) => setGender(value)}
                  placeholder="Select your gender"
                  searchable={false}
                />
              </div>

              <div className="flex flex-col gap-2.5 md:gap-3.5">
                <label className="text-[14px] md:text-[16px] leading-[21.6px] font-medium text-secondary-dark">
                  Date of Birth (DOB)
                </label>
                <input
                  type="date"
                  className="max-h-[48px] p-2 md:px-3 md:py-3.5  rounded-lg w-full focus:outline-none placeholder:text-primary-Placeholder placeholder:text-[14px] placeholder:leading-[18.9px] placeholder:font-normal"
                />
              </div>

              <div className="flex flex-col gap-2.5 md:gap-3.5">
                <label className="text-[14px] md:text-[16px] leading-[21.6px] font-medium text-secondary-dark">
                  Mobile Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your active mobile number"
                  className="h-full p-2 md:px-3 md:py-3.5  rounded-lg w-full focus:outline-none placeholder:text-primary-Placeholder placeholder:text-[14px] placeholder:leading-[18.9px] placeholder:font-normal"
                />
              </div>

              <div className="flex flex-col gap-2.5 md:gap-3.5">
                <label className="text-[14px] md:text-[16px] leading-[21.6px] font-medium text-secondary-dark">
                  WhatsApp Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your WhatsApp number"
                  className="h-full p-2 md:px-3 md:py-3.5  rounded-lg w-full focus:outline-none placeholder:text-primary-Placeholder placeholder:text-[14px] placeholder:leading-[18.9px] placeholder:font-normal"
                />
              </div>

              <div className="flex flex-col gap-2.5 md:gap-3.5">
                <label className="text-[14px] md:text-[16px] leading-[21.6px] font-medium text-secondary-dark">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="h-full p-2 md:px-3 md:py-3.5  rounded-lg w-full focus:outline-none placeholder:text-primary-Placeholder placeholder:text-[14px] placeholder:leading-[18.9px] placeholder:font-normal"
                />
              </div>

              <div className="flex flex-col gap-2.5 md:gap-3.5">
                <label className="text-[14px] md:text-[16px] leading-[21.6px] font-medium text-secondary-dark">
                  Occupation
                </label>
                <SelectPicker
                  data={occupationData}
                  value={occupation !== "Select occupation" ? occupation : null}
                  className="border-none md:h-[48px] z-0 placeholder:text-primary-Placeholder placeholder:text-[14px] placeholder:leading-[18.9px] placeholder:font-normal"
                  onChange={(value) => setOccupation(value)}
                  placeholder="Select occupation"
                  searchable={false}
                />
              </div>
              <div className="flex flex-col gap-2.5 md:gap-3.5">
                <label className="text-[14px] md:text-[16px] leading-[21.6px] font-medium text-secondary-dark">
                  School
                </label>
                <SelectPicker
                  data={schoolData}
                  value={school !== "Select school" ? school : null}
                  className="border-none md:h-[48px] z-0"
                  onChange={(value) => setSchool(value)}
                  placeholder="Select school"
                  searchable={false}
                />
              </div>

              <div className="md:col-span-2 flex flex-col gap-2.5 md:gap-3.5">
                <label className="text-[14px] md:text-[16px] leading-[21.6px] font-medium text-secondary-dark">
                  Confirmation of Attendance
                </label>
                <div className="flex items-center gap-2.5 md:gap-3.5">
                  <input
                    type="checkbox"
                    className="h-5 w-5  custom-checkbox rounded cursor-pointer"
                  />
                  <label className=" md:leading-[21.6px] text-[14px] md:text-[16px] font-normal text-[#2C2828]">
                    I confirm my attendance for the event.
                  </label>
                </div>
              </div>
            </div>

            {/* Checkout Section */}
            <div className=" xl:col-span-2">
              <div className="bg-[#F4F1F299] p-2.5 md:p-5 xl:p-[26px] xl:pl-[30px] rounded-[14px] flex flex-col gap-5 md:gap-10 xl:gap-[100px]">
                <div className="flex flex-col gap-2">
                  <p className="text-[16px] md:text-[18px] font-normal md:leading-[24.3px] text-secondary-black">
                    Silver
                  </p>
                  <p className="text-[20px] md:text-[25px]  md:leading-[33.75px] font-bold text-secondary-black">
                    ₹235
                  </p>
                </div>
                <button className=" p-2.5 md:p-3 lg:px-5 xl:px-6 bg-[#DD720D] text-white hover:text-[#DD720D] hover:bg-white font-semibold rounded-full">
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
