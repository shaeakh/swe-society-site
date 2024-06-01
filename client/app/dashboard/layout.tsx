import SideBar from "@/components/dashboardpage/Sidebar";
import React from "react";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <>
      <SideBar />
      <main className=" lg:ml-[300px] mt-4">{children}</main>
    </>
  );
};

export default DashboardLayout;
