import Image from "next/image";
import React from "react";
import LoginButton from "../Common/LoginButton/LoginButton";

const Header = () => {
  return (
    <div className="w-screen fixed top-0 px-2.5 md:px-5 lg:px-[50px] xl:px-[100px] z-10">
      <div className="border-[1px] border-[#F5ECEC] p-2.5 lg:p-5 xl:p-6  flex items-center justify-between px-2.5 md:px-5 lg:px-6 bg-[#F4F1F2E5] mt-2.5 md:mt-5 lg:mt-6  rounded-[14px] top-0">
        <Image src="/Logo.svg" alt="LOGO" height={20.23} width={86.98} />
        <LoginButton btnName={"Login"} />
      </div>
    </div>
  );
};

export default Header;
