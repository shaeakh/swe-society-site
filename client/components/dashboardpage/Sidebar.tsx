"use client";

import sidebarItems from "@/data/getSidebarMenuItem";
import DashboardHeader from "./DashboardHeader";
import SidebarDesktop from "./SidebarDesktop";
import SidebarMobile from "./SidebarMobile";

function SideBar() {
  return (
    <>
      <div className="lg:visible invisible">
        <SidebarDesktop sidebarItems={sidebarItems} />
      </div>
      <div className="lg:invisible visible">
        <SidebarMobile sidebarItems={sidebarItems} />
      </div>
      <DashboardHeader />
    </>
  );
}

export default SideBar;
