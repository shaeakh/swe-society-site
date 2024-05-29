"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { dummyuser as user } from "@/data/dummy/userdata";
import { SidebarItems } from "@/data/types";
import { Home, LogOut, Menu, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SidebarButton from "./SidebarButton";

interface SidebarMobileProps {
  sidebarItems: SidebarItems;
}
function SidebarMobile(props: SidebarMobileProps) {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="fixed top-3 left-3">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <div className="h-full px-3 py-4 snap-y">
          <div className="flex flex-col gap-1 overflow-y-auto h-5/6 max-h-5/6">
            {props.sidebarItems.links.map((link, index) => (
              <SheetClose asChild>
                <Link key={index} href={link.href}>
                  <SidebarButton
                    variant={pathname === link.href ? "default" : "ghost"}
                    Icon={link.Icon}
                    className="w-full"
                  >
                    {link.label}
                  </SidebarButton>
                </Link>
              </SheetClose>
            ))}
          </div>
          <div className="absolute left-0 bottom-3 w-full px-1">
            <Drawer>
              <DrawerTrigger asChild>
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
              </DrawerTrigger>
              <DrawerContent className="mb-2 p-3">
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
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default SidebarMobile;
