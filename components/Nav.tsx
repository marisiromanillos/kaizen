"use client";
import Image from "next/image";
import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const openNav = () => setOpen(!open);

  return (
    <header>
      <div className="flex justify-between items-center p-6">
        <div>
          <Image
            src="/logo-white.webp"
            alt="kaizen soho london physiotherapist logo"
            width={35}
            height={35}
            blurDataURL="/logo-white.webp"
            priority
          />
        </div>
        <div>
          <button className="flex flex-col justify-center items-center">
            <span
              className={`bg-lightGreen block transition-all duration-300 ease-out
                            h-0.5 mb-0.5 w-10 rounded-sm`}
            ></span>
            <span
              className={`bg-lightGreen block transition-all duration-300 ease-out
                            h-0.5 mb-1 w-10 rounded-sm my-0.5`}
            ></span>
            <span
              className={`bg-lightGreen block transition-all duration-300 ease-out
                            h-0.5 w-10 rounded-sm`}
            ></span>
          </button>
        </div>
      </div>
    </header>
  );
};
export default Nav;
