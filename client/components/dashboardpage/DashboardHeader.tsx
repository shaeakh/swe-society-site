"use client";

import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

function DashboardHeader() {
  return (
    <div className="lg:ml-[270px] border-b p-2 flex justify-around items-center">
      <Link href="/" className="flex justify-center w-full">
        <Image src={logo} alt="" width={80} height={35} />
      </Link>
    </div>
  );
}

export default DashboardHeader;
