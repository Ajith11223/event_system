import Image from "next/image";
import React from "react";
import LoginButton from "../Common/LoginButton/LoginButton";

const Header = () => {
  return (
    <div className="w-screen fixed top-0">
      <div className="border-[1px] border-[#F5ECEC] h-[86px] flex items-center justify-between px-2.5 md:px-5 lgpx-6 bg-[#F4F1F2E5] mt-2.5 md:mt-5 lg:mt-6 mx-2.5 md:mx-5 lg:mx-[50px] xl:mx-[100px] rounded-[14px] top-0">
        <Image src="/Logo.svg" alt="LOGO" height={20.23} width={86.98} />
        <LoginButton btnName={"Login"} />
      </div>
    </div>
  );
};

export default Header;
