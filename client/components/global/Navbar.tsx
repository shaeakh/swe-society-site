"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import Link from "next/link";
import { cn } from "@/utils/cn";


function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
     <Menu setActive={setActive}>
      <Link href={'/'}>
      <MenuItem setActive={setActive} active={active} item="Home">
          

      </MenuItem>
      </Link>
      <Link href={'/event'}>
      <MenuItem setActive={setActive} active={active} item="Event">

         
      </MenuItem>
      </Link>
      <Link href={'/notice'}>
      <MenuItem setActive={setActive} active={active} item="Notice">
          

          </MenuItem>
      </Link>
      <Link href={'/blog'}>
      <MenuItem setActive={setActive} active={active} item="Blog">
          

          </MenuItem>
      </Link>
      <Link href={'/achievement'}>
      <MenuItem setActive={setActive} active={active} item="Achievement">
          

          </MenuItem>
      </Link>
      <MenuItem setActive={setActive} active={active} item="Soceity">
           <div className='flex flex-col space-y-4'>
      <HoveredLink href="/exectuive-committe">Executive Committe</HoveredLink>
      <HoveredLink href="/members">Members</HoveredLink>
      <HoveredLink href="/History">History</HoveredLink>
      <HoveredLink href="/gallery">Gallery</HoveredLink>
      <HoveredLink href="/contact">Contact</HoveredLink>
             
      </div>

          </MenuItem>
      
      

          <Link href={'/login'}>
      <MenuItem setActive={setActive} active={active} item="Login">
          

          </MenuItem>
      </Link>


    </Menu>
  </div>
)
}

export default Navbar
