import MainLayout from "@/Components/MainLayout/MainLayout";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="bg-white h-full relative overflow-hidden bg-gradient-to-b from-white to-orange-50 ">
      <MainLayout>
        <div className=" mt-2.5 md:mt-5 lg:mt-6 xl:mt-[45px]">
          <Image
            src="/HomeChairs.svg"
            alt="Home"
            height={386}
            width={1240}
            className="w-full"
          />
        </div>
        <div className=" mx-2.5 md:mx-5 lg:mx-[50px] xl:mx-[100px]">
          <div className=" mx-auto ">
            <div className="xl:grid xl:grid-cols-7 gap-2.5 md:gap-5 xl:gap-[84px]">
              <div className="p-8 col-span-5">
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
                  <p className="text-secondary-dark font-normal text-[16px] md:text-[18px] mt-2 md:mt-2.5 xl:mt-3.5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla volutpat libero at velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Nunc vulputate
                    libero at velit interdum, ac aliquet odio mattis.
                  </p>
                </div>

                <div className="mt-2.5 md:mt-5 lg:mt-6 xl:mt-[45px]">
                  <div className="bg-[linear-gradient(90.62deg,rgba(238,218,192,0.6)_0.54%,rgba(254,215,164,0.6)_115.41%)] p-2 lg:px-4 rounded-lg">
                    <h2 className="text-[18px] md:text-[20px] md:leading-[27px] font-bold text-primary-dark">
                      Panel Discussion
                    </h2>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div
                      className="border-[1px] border-solid p-8 rounded-lg"
                      style={{
                        borderImageSource:
                          "linear-gradient(90.88deg, #E1DCDC 0.75%, #CECACA 101.36%)",
                        borderImageSlice: 1,
                        borderRadius: "8px",
                      }}
                    >
                      {" "}
                      <h3 className="text-xl font-semibold text-gray-800">
                        Future Career Trends with AI and ML
                      </h3>
                      <p className="text-gray-600">
                        Experts discuss how artificial intelligence and machine
                        learning are transforming industries and creating new
                        career paths.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800">
                        Global Career Opportunities
                      </h3>
                      <p className="text-gray-600">
                        Insights into career options outside the country,
                        including necessary skills and educational pathways.
                      </p>
                    </div>
                    <div className="p-4 bg-orange-100 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800">
                        Future Career Trends with AI and ML
                      </h3>
                      <p className="text-gray-600">
                        Experts discuss how artificial intelligence and machine
                        learning are transforming industries and creating new
                        career paths.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800">
                        Global Career Opportunities
                      </h3>
                      <p className="text-gray-600">
                        Insights into career options outside the country,
                        including necessary skills and educational pathways.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div className="mt-8 flex flex-col gap-2.5 md:gap-5 lg:gap-10 xl:gap-[63px] justify-between items-center bg-[#F4F1F299] rounded-[14px] p-2.5 md:p-5 lg:p-6">
                  <div className="text-gray-700">
                    <p>
                      <strong>Date:</strong> 13th Sep 04:00-09:00PM
                    </p>
                    <p>
                      <strong>Category:</strong> Education
                    </p>
                    <p>
                      <strong>Location:</strong> International School Riyadh
                    </p>
                  </div>
                  <div className="text-center flex justify-between w-full items-center ">
                    <p className="text-2xl font-bold text-gray-800">₹235</p>
                    <button className="mt-2 px-6 py-2 bg-orange-500 text-white font-semibold rounded-full">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="text-center text-gray-500 mt-8">
            Lorem ipsum
          </footer>
        </div>
      </MainLayout>
    </div>
  );
};

export default page;
