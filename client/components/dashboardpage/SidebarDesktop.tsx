"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { dummyuser as user } from "@/data/dummy/userdata";
import { SidebarItems } from "@/data/types";
import { Home, LogOut, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SidebarButton from "./SidebarButton";

interface SidebarDesktopProps {
  sidebarItems: SidebarItems;
}

function SidebarDesktop(props: SidebarDesktopProps) {
  const pathname = usePathname();
  return (
    <aside className=" w-[270px] max-w-xs h-screen fixed left-0 top-0 z-50 border-r">
      <div className="h-full px-3 py-4 snap-y">
        <div className="flex flex-col gap-1 overflow-y-auto h-5/6 max-h-5/6">
          {props.sidebarItems.links.map((link, index) => (
            <Link key={index} href={link.href}>
              <SidebarButton
                variant={pathname === link.href ? "default" : "ghost"}
                Icon={link.Icon}
                className="w-full"
              >
                {link.label}
              </SidebarButton>
            </Link>
          ))}
        </div>
        <div className="absolute left-0 bottom-3 w-full px-3">
          <Popover>
            <PopoverTrigger asChild>
              <div className="flex justify-between items-center w-full px-4 py-2 bg-background hover:bg-accent rounded-full border cursor-pointer">
                <div className="flex gap-2 items-center">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.photourl} />
                    <AvatarFallback>{user.role}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-base font-bold">{user.name}</p>
                    <p className="text-[11px] text-slate-300">{user.reg}</p>
                  </div>
                </div>
                <MoreHorizontal size={20} />
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-64 mb-2 p-3">
              <div className="space-y-1">
                <Link href="/">
                  <SidebarButton size="lg" Icon={Home} className="w-full">
                    Go To Homepage
                  </SidebarButton>
                </Link>
                <SidebarButton
                  size="lg"
                  Icon={LogOut}
                  variant="default"
                  className="w-full"
                >
                  Log Out
                </SidebarButton>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </aside>
  );
}

export default SidebarDesktop;
