"use client";
import React, { useState } from "react";
import { SelectPicker } from "rsuite";
import "./BookingForm.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
const BookingForm = () => {
  const [gender, setGender] = useState(null);
  const router = useRouter();
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
    {
      label: "International Indian School (IISR)",
      value: "International Indian School (IISR)",
    },
    {
      label: "International Indian Public School (IIPS)",
      value: "International Indian Public School (IIPS)",
    },
    {
      label: "Al Alia International Indian School",
      value: "Al Alia International Indian School",
    },
    {
      label: "Al Yasmin International School (AYIS)",
      value: "Al Yasmin International School (AYIS)",
    },
    { label: "Alif International School", value: "Alif International School" },
    { label: "Delhi Public School (DPS)", value: "Delhi Public School (DPS)" },
    { label: "Yara International School", value: "Yara International School" },
    {
      label: "Modern International School",
      value: "Modern International School",
    },
    {
      label: "Modern Middle East International School",
      value: "Modern Middle East International School",
    },
    {
      label: "New Middle East International School",
      value: "New Middle East International School",
    },
    { label: "Others", value: "Others" },
  ];

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    gender: Yup.string().required("Gender is required"),
    dob: Yup.date().required("Date of Birth is required"),
    mobileNumber: Yup.string()
      .matches(/^\d+$/, "Mobile number must be digits only")
      .required("Mobile number is required"),
    whatsappNumber: Yup.string()
      .matches(/^\d+$/, "WhatsApp number must be digits only")
      .required("WhatsApp number is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    occupation: Yup.string().required("Occupation is required"),
    school: Yup.string().required("School is required"),
    confirmation: Yup.boolean().oneOf([true], "You must confirm attendance"),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (response.ok) {
        router.push("/ticket/?ticket=" + data?.data?._id);
        console.log(data); // "Form submission successful!"
      } else {
        console.error("Error:", data.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  return (
    <div className="  px-2.5 md:px-5 lg:px-[50px] xl:px-[100px] pb-5 md:pb-10 lg:pb-[50px] xl:pb-[100px]">
      <div className="mt-[76px] md:mt-[86px] lg:mt-[112px] xl:mt-[122px] ">
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
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#F4F1F299] xl:col-span-5 p-2.5 md:p-3.5 rounded-[14px] ">
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
            </div> */}
          <Formik
            initialValues={{
              name: "",
              gender: "",
              dob: "",
              mobileNumber: "",
              whatsappNumber: "",
              email: "",
              occupation: "",
              school: "",
              confirmation: false,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, errors, touched }) => (
              <Form className="mt-2.5 md:mt-5 flex flex-col xl:mt-[35px] xl:grid xl:grid-cols-7 gap-2.5 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#F4F1F299] xl:col-span-5 p-2.5 md:p-3.5 rounded-[14px]">
                  <div className="flex flex-col gap-2.5 md:gap-3.5">
                    <label className="text-[14px] md:text-[16px] leading-[21.6px] font-medium text-secondary-dark">
                      Name
                    </label>
                    <Field
                      name="name"
                      type="text"
                      placeholder="Enter your full name."
                      className="h-full p-2 md:px-3 md:py-3.5 rounded-lg w-full focus:outline-none placeholder:text-primary-Placeholder placeholder:text-[14px] placeholder:leading-[18.9px] placeholder:font-normal"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm -mt-2.5"
                    />
                  </div>

                  <div className="flex flex-col gap-2.5 md:gap-3.5 h-full">
                    <label className="text-[14px] md:text-[16px] leading-[21.6px] font-medium text-secondary-dark">
                      Gender
                    </label>
                    <SelectPicker
                      data={genderData}
                      onChange={(value) => setFieldValue("gender", value)}
                      placeholder="Select your gender"
                      searchable={false}
                      className="border-none h-full md:h-[48px] z-0"
                    />
                    {touched.gender && errors.gender && (
                      <div className="text-red-500 text-sm -mt-2.5">
                        {errors.gender}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-2.5 md:gap-3.5">
                    <label className="text-[14px] md:text-[16px] leading-[21.6px] font-medium text-secondary-dark">
                      Date of Birth (DOB)
                    </label>
                    <Field
                      name="dob"
                      type="date"
                      className="max-h-[48px] p-2 md:px-3 md:py-3.5 rounded-lg w-full focus:outline-none placeholder:text-primary-Placeholder placeholder:text-[14px] placeholder:leading-[18.9px] placeholder:font-normal"
                    />
                    <ErrorMessage
                      name="dob"
                      component="div"
                      className="text-red-500 text-sm -mt-2.5"
                    />
                  </div>

                  <div className="flex flex-col gap-2.5 md:gap-3.5">
                    <label className="text-[14px] md:text-[16px] leading-[21.6px] font-medium text-secondary-dark">
                      Mobile Number
                    </label>
                    <Field
                      name="mobileNumber"
                      type="text"
                      placeholder="Enter your active mobile number"
                      className="h-full p-2 md:px-3 md:py-3.5 rounded-lg w-full focus:outline-none placeholder:text-primary-Placeholder placeholder:text-[14px] placeholder:leading-[18.9px] placeholder:font-normal"
                    />
                    <ErrorMessage
                      name="mobileNumber"
                      component="div"
                      className="text-red-500 text-sm -mt-2.5"
                    />
                  </div>

                  <div className="flex flex-col gap-2.5 md:gap-3.5">
                    <label className="text-[14px] md:text-[16px] leading-[21.6px] font-medium text-secondary-dark">
                      WhatsApp Number
                    </label>
                    <Field
                      name="whatsappNumber"
                      type="text"
                      placeholder="Enter your WhatsApp number"
                      className="h-full p-2 md:px-3 md:py-3.5 rounded-lg w-full focus:outline-none placeholder:text-primary-Placeholder placeholder:text-[14px] placeholder:leading-[18.9px] placeholder:font-normal"
                    />
                    <ErrorMessage
                      name="whatsappNumber"
                      component="div"
                      className="text-red-500 text-sm -mt-2.5"
                    />
                  </div>

                  <div className="flex flex-col gap-2.5 md:gap-3.5">
                    <label className="text-[14px] md:text-[16px] leading-[21.6px] font-medium text-secondary-dark">
                      Email Address
                    </label>
                    <Field
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="h-full p-2 md:px-3 md:py-3.5 rounded-lg w-full focus:outline-none placeholder:text-primary-Placeholder placeholder:text-[14px] placeholder:leading-[18.9px] placeholder:font-normal"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm -mt-2.5"
                    />
                  </div>

                  <div className="flex flex-col gap-2.5 md:gap-3.5">
                    <label className="text-[14px] md:text-[16px] leading-[21.6px] font-medium text-secondary-dark">
                      Occupation
                    </label>
                    <SelectPicker
                      data={occupationData}
                      onChange={(value) => setFieldValue("occupation", value)}
                      placeholder="Select occupation"
                      searchable={false}
                      className="border-none md:h-[48px] z-0"
                    />
                    {touched.occupation && errors.occupation && (
                      <div className="text-red-500 text-sm -mt-2.5">
                        {errors.occupation}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-2.5 md:gap-3.5">
                    <label className="text-[14px] md:text-[16px] leading-[21.6px] font-medium text-secondary-dark">
                      School
                    </label>
                    <SelectPicker
                      data={schoolData}
                      onChange={(value) => setFieldValue("school", value)}
                      placeholder="Select school"
                      searchable={false}
                      className="border-none md:h-[48px] z-0"
                    />
                    {touched.school && errors.school && (
                      <div className="text-red-500 text-sm -mt-2.5">
                        {errors.school}
                      </div>
                    )}
                  </div>

                  <div className="md:col-span-2 flex flex-col gap-2.5 md:gap-3.5">
                    <label className="text-[14px] md:text-[16px] leading-[21.6px] font-medium text-secondary-dark">
                      Confirmation of Attendance
                    </label>
                    <div className="flex items-start gap-2.5 md:gap-3.5">
                      <Field
                        name="confirmation"
                        type="checkbox"
                        className="h-5 w-5 custom-checkbox rounded cursor-pointer"
                      />
                      <label className="md:leading-[21.6px] text-[14px] md:text-[16px] font-normal text-[#2C2828]">
                        I confirm my attendance for the event.
                      </label>
                    </div>
                    <ErrorMessage
                      name="confirmation"
                      component="div"
                      className="text-red-500 text-sm -mt-2.5"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <div className="bg-[#F4F1F299] p-2.5 md:p-5 xl:p-[26px] xl:pl-[30px] rounded-[14px] flex flex-col gap-5 md:gap-10 xl:gap-[100px]">
                    <div className="flex flex-col gap-2">
                      <p className="text-[16px] md:text-[18px] font-normal md:leading-[24.3px] text-secondary-black">
                        Silver
                      </p>
                      <p className="text-[20px] md:text-[25px] md:leading-[33.75px] font-bold text-secondary-black">
                        Free
                      </p>
                    </div>
                    <button
                      type="submit"
                      className="p-2.5 md:p-3 lg:px-5 xl:px-6 bg-[#DD720D] text-white hover:text-[#DD720D] hover:bg-white font-semibold rounded-full"
                    >
                      Proceed to checkout
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
